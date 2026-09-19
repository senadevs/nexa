import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * Site-wide transitions shared by every page (imported from BaseLayout).
 *
 * 1. Loader: only the logo on ink, once per session (sessionStorage), skippable with a click
 *    or key, never with reduced motion. The inline script in <head> adds `html.is-loading`
 *    before first paint so the page never flashes underneath. Guidance followed:
 *    gsap-scrolltrigger → performance-a11y ("preloaders: max 1-1.5 s, skippable, not on
 *    repeat visits").
 * 2. In-page navigation: a curtain covers the viewport, the jump to the section happens
 *    hidden and instantly, and the curtain leaves upwards — the page never visibly scrolls.
 *
 * `whenSiteReady()` resolves once fonts are loaded and the loader (if any) has started to
 * leave, so page intros play in view instead of under the loader.
 */

declare global {
  interface Window {
    __nexaSafety?: number;
  }
}

const INTRO_KEY = "nexa-intro";
const root = document.documentElement;
// The site script is alive: cancel the inline safety net so it can never cut the loader short.
window.clearTimeout(window.__nexaSafety);
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

let resolveReady: () => void = () => {};
const siteReady = new Promise<void>((resolve) => {
  resolveReady = () => void document.fonts.ready.then(() => resolve());
});
export const whenSiteReady = () => siteReady;

const wait = (ms: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, ms));
const pageLoaded = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", () => resolve(), { once: true });
  });

const runLoader = () => {
  const loader = document.querySelector<HTMLElement>(".site-loader");
  // Pages without a hero entrance have nothing waiting on intro-pending; on the home page the
  // entrance script removes it, and this fallback reveals the hero if that script never ran.
  whenSiteReady().then(() => {
    if (!document.querySelector(".hero"))
      root.classList.remove("intro-pending");
    else window.setTimeout(() => root.classList.remove("intro-pending"), 2500);
  });
  if (!root.classList.contains("is-loading") || !loader) {
    loader?.remove();
    resolveReady();
    return;
  }
  const parts = loader.querySelectorAll<SVGElement>(
    ".site-loader-logo svg > *",
  );

  gsap.fromTo(
    parts,
    { yPercent: 110, autoAlpha: 0 },
    {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.03,
    },
  );

  const ready = Promise.all([
    wait(1000),
    Promise.race([
      Promise.all([document.fonts.ready, pageLoaded()]),
      wait(1600),
    ]),
  ]);
  const skipped = new Promise<void>((resolve) => {
    loader.addEventListener("click", () => resolve(), { once: true });
    window.addEventListener("keydown", () => resolve(), { once: true });
  });

  let leaving = false;
  const leave = () => {
    if (leaving) return;
    leaving = true;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* private mode: the loader simply shows again next visit */
    }
    // One continuous move: the logo rises out, then the panel lifts with a curved bottom edge
    // and the page entrance starts while the panel is uncovering it.
    gsap
      .timeline({
        defaults: { overwrite: true },
        onComplete: () => loader.remove(),
      })
      .to(parts, {
        yPercent: -110,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.012,
      })
      .add(() => {
        // Keep the panel on screen after the class goes; unlocking scroll causes no shift (scrollbar-gutter).
        gsap.set(loader, { display: "grid" });
        root.classList.remove("is-loading");
      }, 0.28)
      .to(
        loader,
        {
          yPercent: -100,
          "--curve": `${Math.round(window.innerHeight * 0.18)}px`,
          duration: 1,
          ease: "power4.inOut",
        },
        0.28,
      )
      .add(resolveReady, 0.55);
  };

  Promise.race([ready, skipped]).then(leave);
};

const runCurtain = () => {
  const curtain = document.querySelector<HTMLElement>(".page-curtain");
  const label = curtain?.querySelector<HTMLElement>("[data-curtain-label]");
  let busy = false;

  const targetFor = (hash: string) => {
    if (hash === "#top") return document.body;
    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
      return null;
    }
  };

  const jump = (target: HTMLElement, hash: string) => {
    if (target === document.body)
      window.scrollTo({ top: 0, behavior: "instant" });
    else target.scrollIntoView({ behavior: "instant", block: "start" });
    history.pushState(null, "", hash);
    // Move keyboard focus with the view without scrolling again.
    if (!target.matches("a, button, input, select, textarea, [tabindex]"))
      target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    ScrollTrigger.update();
  };

  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
      "a[href]",
    );
    if (
      !link ||
      link.classList.contains("skip-link") ||
      link.target === "_blank"
    )
      return;
    const url = new URL(link.href, location.href);
    if (
      !url.hash ||
      url.origin !== location.origin ||
      url.pathname !== location.pathname
    )
      return;
    const target = targetFor(url.hash);
    if (!target) return;
    event.preventDefault();

    if (reduceMotion || !curtain || !label) {
      jump(target, url.hash);
      return;
    }
    if (busy) return;
    busy = true;
    label.textContent = target.dataset.label ?? link.textContent?.trim() ?? "";

    gsap
      .timeline({ onComplete: () => void (busy = false) })
      .set(curtain, { visibility: "visible", yPercent: 100 })
      .set(label, { yPercent: 110 })
      .to(curtain, { yPercent: 0, duration: 0.55, ease: "power4.inOut" })
      .to(label, { yPercent: 0, duration: 0.45, ease: "power3.out" }, "-=0.2")
      .add(() => jump(target, url.hash))
      .to(
        label,
        { yPercent: -110, duration: 0.35, ease: "power3.in" },
        "+=0.12",
      )
      .to(
        curtain,
        { yPercent: -100, duration: 0.6, ease: "power4.inOut" },
        "-=0.2",
      )
      .set(curtain, { visibility: "hidden" });
  });
};

runLoader();
runCurtain();
