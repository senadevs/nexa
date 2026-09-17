import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Process section 3D scene: one shape per step ("Una idea aparece / La forma cambia / La marca
 * avanza"), driven by scroll.
 * - Framing: the camera distance is recomputed on every resize from the largest shape's
 *   bounding sphere and the canvas aspect, so shapes never overflow the canvas (the stage is
 *   taller than wide on most screens). Recipe: threejs-webgl → fundamentals §fit to view.
 * - Shape change: the outgoing shape shrinks while spinning away and the next one grows in with
 *   a light overshoot (threejs-webgl → gsap-three §6). FRAME_PADDING leaves room for it.
 * - Idle: slow continuous spin on top of the scroll rotation. Off with reduced motion.
 */

const FRAME_PADDING = 1.3;
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

class ScrollScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  private group = new THREE.Group();
  private frame = 0;
  private trigger?: ScrollTrigger;
  private visible = true;
  private active = 0;
  private radius = 1;
  private lastTime = performance.now();
  private resizeObserver: ResizeObserver;
  private intersectionObserver: IntersectionObserver;
  private shapes: THREE.Mesh[];

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.25 : 1.75),
    );
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.DirectionalLight(0xff5e1e, 4);
    key.position.set(2, 3, 4);
    this.scene.add(key);
    const rim = new THREE.PointLight(0xd0c7bb, 5, 8);
    rim.position.set(-3, -2, 3);
    this.scene.add(rim);
    this.shapes = [
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.3, 2),
        new THREE.MeshStandardMaterial({
          color: 0xff5e1e,
          roughness: 0.3,
          flatShading: true,
        }),
      ),
      new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.05, 0.25, 96, 14),
        new THREE.MeshStandardMaterial({
          color: 0xd0c7bb,
          roughness: 0.22,
          metalness: 0.18,
        }),
      ),
      new THREE.Mesh(
        new THREE.OctahedronGeometry(1.45, 1),
        new THREE.MeshStandardMaterial({
          color: 0xfffdf1,
          roughness: 0.2,
          metalness: 0.2,
          wireframe: true,
        }),
      ),
    ];
    // Largest bounding sphere among all shapes: the framing target for every step.
    this.radius = Math.max(
      ...this.shapes.map((shape) => {
        shape.geometry.computeBoundingSphere();
        return shape.geometry.boundingSphere?.radius ?? 1;
      }),
    );
    this.shapes.forEach((shape, index) => {
      shape.visible = index === 0;
      this.group.add(shape);
    });
    this.scene.add(this.group);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement ?? canvas);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      // Restart the loop only once; a second render() call would run two loops in parallel.
      cancelAnimationFrame(this.frame);
      if (this.visible) this.render();
    });
    this.intersectionObserver.observe(canvas);
    this.resize();
    this.setupScroll();
    this.render();
  }

  private setupScroll() {
    const steps = [
      ...document.querySelectorAll<HTMLElement>(".immersive-step"),
    ];
    if (reduceMotion || window.innerWidth < 768) return;
    this.trigger = ScrollTrigger.create({
      trigger: ".immersive-break",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // Keep the opening chapter on screen longer so the narrative starts
        // with a clear message before the 3D object changes state.
        const index = self.progress < 0.44 ? 0 : self.progress < 0.72 ? 1 : 2;
        this.group.rotation.y = self.progress * Math.PI * 2;
        this.group.rotation.x = self.progress * Math.PI * 0.7;
        if (index !== this.active) this.showShape(index);
        steps.forEach((step, stepIndex) =>
          step.classList.toggle("is-active", stepIndex === index),
        );
      },
    });
  }

  private showShape(index: number) {
    const previous = this.shapes[this.active];
    const next = this.shapes[index];
    this.active = index;
    // Interrupt any running swap so fast scrolling never leaves two shapes on screen.
    this.shapes.forEach((shape) => {
      gsap.killTweensOf([shape.scale, shape.rotation]);
      if (shape !== previous && shape !== next) shape.visible = false;
    });
    gsap.to(previous.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.45,
      ease: "power3.in",
      onComplete: () => void (previous.visible = false),
    });
    gsap.to(previous.rotation, {
      z: previous.rotation.z + Math.PI / 2,
      duration: 0.45,
      ease: "power3.in",
    });
    next.visible = true;
    gsap.fromTo(
      next.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 0.9, delay: 0.3, ease: "back.out(1.4)" },
    );
    gsap.fromTo(
      next.rotation,
      { z: -Math.PI / 2 },
      { z: 0, duration: 1.1, delay: 0.3, ease: "expo.out" },
    );
  }

  private resize() {
    const box = this.canvas.parentElement?.getBoundingClientRect();
    if (!box || !box.width || !box.height) return;
    this.renderer.setSize(box.width, box.height, false);
    const aspect = box.width / box.height;
    this.camera.aspect = aspect;
    // Fit the bounding sphere inside the narrower of the two axes.
    const halfFov = THREE.MathUtils.degToRad(this.camera.fov / 2);
    this.camera.position.z =
      (this.radius * FRAME_PADDING) / (Math.tan(halfFov) * Math.min(1, aspect));
    this.camera.updateProjectionMatrix();
  }

  private render = () => {
    if (!this.visible) return;
    this.frame = requestAnimationFrame(this.render);
    const now = performance.now();
    // Capped so a tab coming back from the background does not jump the rotation.
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;
    if (!reduceMotion) {
      const shape = this.shapes[this.active];
      shape.rotation.y += delta * 0.35;
      shape.rotation.x += delta * 0.12;
    }
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    this.shapes.forEach((shape) => {
      gsap.killTweensOf([shape.scale, shape.rotation]);
      shape.geometry.dispose();
      if (Array.isArray(shape.material))
        shape.material.forEach((material) => material.dispose());
      else shape.material.dispose();
    });
    this.renderer.dispose();
    // Only this scene's trigger: the rest of the page owns its own ScrollTriggers.
    this.trigger?.kill();
  }
}

const canvas = document.querySelector<HTMLCanvasElement>("#scroll-canvas");
if (canvas) {
  try {
    const scene = new ScrollScene(canvas);
    canvas.closest(".process")?.classList.add("has-webgl");
    window.addEventListener("pagehide", (event) => {
      // Kept in the back/forward cache: the page comes back as it was, so keep the scene.
      if (!event.persisted) scene.dispose();
    });
  } catch {
    // No WebGL context: show the static fallback image and every step at full opacity.
    canvas.closest(".process")?.classList.add("no-webgl");
  }
}
