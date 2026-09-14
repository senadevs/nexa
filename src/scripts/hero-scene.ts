import * as THREE from "three";

export class HeroScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  private frame = 0;
  private visible = true;
  private reducedMotion: boolean;
  private resizeObserver: ResizeObserver;
  private intersectionObserver: IntersectionObserver;
  private handleVisibility: () => void;
  private geometry: THREE.BufferGeometry;
  private material: THREE.MeshStandardMaterial;
  private mesh: THREE.Mesh;

  constructor(private canvas: HTMLCanvasElement) {
    this.reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2),
    );
    this.camera.position.set(0, 0, 5.6);
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.8));
    const key = new THREE.DirectionalLight(0xd6f43e, 4);
    key.position.set(2, 3, 4);
    this.scene.add(key);
    const rim = new THREE.PointLight(0xf5a5cc, 4, 8);
    rim.position.set(-3, -1, 2);
    this.scene.add(rim);
    this.geometry = new THREE.IcosahedronGeometry(1.45, 4);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xd6f43e,
      roughness: 0.22,
      metalness: 0.12,
      flatShading: true,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.set(0.2, 0.35, 0);
    this.scene.add(this.mesh);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement ?? canvas);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      if (this.visible) this.render();
    });
    this.intersectionObserver.observe(canvas);
    this.handleVisibility = () => {
      this.visible = document.visibilityState === "visible";
      if (this.visible) this.render();
    };
    document.addEventListener("visibilitychange", this.handleVisibility);
    this.resize();
    this.render();
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
    if (!this.reducedMotion) {
      this.mesh.rotation.x += 0.0018;
      this.mesh.rotation.y += 0.004;
    }
    this.renderer.render(this.scene, this.camera);
  };
  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibility);
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }
}

const canvas = document.querySelector<HTMLCanvasElement>("#hero-canvas");
if (
  canvas &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  "WebGLRenderingContext" in window
) {
  const scene = new HeroScene(canvas);
  window.addEventListener("pagehide", () => scene.dispose(), { once: true });
} else {
  canvas?.remove();
}
