import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ScrollScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  private group = new THREE.Group();
  private frame = 0;
  private visible = true;
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
    this.camera.position.z = 6;
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.DirectionalLight(0xf36b48, 4);
    key.position.set(2, 3, 4);
    this.scene.add(key);
    const pink = new THREE.PointLight(0xd0c7bb, 5, 8);
    pink.position.set(-3, -2, 3);
    this.scene.add(pink);
    this.shapes = [
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.3, 2),
        new THREE.MeshStandardMaterial({
          color: 0xf36b48,
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
          color: 0xf1f0ea,
          roughness: 0.2,
          metalness: 0.2,
          wireframe: true,
        }),
      ),
    ];
    this.shapes.forEach((shape, index) => {
      shape.visible = index === 0;
      this.group.add(shape);
    });
    this.scene.add(this.group);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement ?? canvas);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
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
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    )
      return;
    ScrollTrigger.create({
      trigger: ".immersive-break",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // Keep the opening chapter on screen longer so the narrative starts
        // with a clear message before the 3D object changes state.
        const index = self.progress < 0.44 ? 0 : self.progress < 0.72 ? 1 : 2;
        this.shapes.forEach((shape, shapeIndex) => {
          shape.visible = shapeIndex === index;
        });
        this.group.rotation.y = self.progress * Math.PI * 2;
        this.group.rotation.x = self.progress * Math.PI * 0.7;
        steps.forEach((step, stepIndex) =>
          step.classList.toggle("is-active", stepIndex === index),
        );
      },
    });
  }

  private resize() {
    const box = this.canvas.parentElement?.getBoundingClientRect();
    if (!box) return;
    this.renderer.setSize(box.width, box.height, false);
    this.camera.aspect = box.width / box.height;
    this.camera.updateProjectionMatrix();
  }
  private render = () => {
    if (!this.visible) return;
    this.frame = requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
  };
  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    this.shapes.forEach((shape) => {
      shape.geometry.dispose();
      if (Array.isArray(shape.material))
        shape.material.forEach((material) => material.dispose());
      else shape.material.dispose();
    });
    this.renderer.dispose();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}

const canvas = document.querySelector<HTMLCanvasElement>("#scroll-canvas");
if (canvas && "WebGLRenderingContext" in window) {
  const scene = new ScrollScene(canvas);
  window.addEventListener("pagehide", () => scene.dispose(), { once: true });
}
