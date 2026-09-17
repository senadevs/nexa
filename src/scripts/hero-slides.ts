import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/*
 * Hero slideshow: every slide pairs the rotating headline word with a showcase image.
 * - Word: letters of the outgoing word rise and fade; the next word rises in from below.
 *   Hidden letters are reset instantly, so a word never travels back through the line.
 * - Image: the incoming slide wipes up from the bottom (container and image translate in
 *   opposite directions, transforms only) while the outgoing image drifts up.
 * - A progress segment fills during each hold; the pause button stops everything (WCAG 2.2.2).
 * - Reduced motion: same sequence with short cross-fades and no movement.
 */
const HOLD = 3.4;

const hero = document.querySelector<HTMLElement>("[data-hero-slides]");
const words = [...(hero?.querySelectorAll<HTMLElement>(".rotator-word") ?? [])];
const slides = [...(hero?.querySelectorAll<HTMLElement>(".hero-slide") ?? [])];
const segments = [
  ...(hero?.querySelectorAll<HTMLElement>(".hero-progress i") ?? []),
];
const counter = hero?.querySelector<HTMLElement>("[data-hero-counter]");
const toggle = hero?.querySelector<HTMLButtonElement>(".hero-toggle");

const start = () => {
  if (!hero || slides.length < 2 || words.length !== slides.length) return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const pictures = slides.map((slide) => slide.querySelector("picture"));
  const images = slides.map((slide) => slide.querySelector("img"));
  const letters = reduceMotion
    ? []
    : words.map(
        (word) =>
          SplitText.create(word, {
            type: "chars",
            charsClass: "rotator-char",
            aria: "none",
          }).chars,
      );

  // Initial state: first slide visible, the rest waiting below their mask.
  gsap.set([...words, ...slides], { visibility: "visible" });
  if (reduceMotion) {
    gsap.set(words, { autoAlpha: (i: number) => (i === 0 ? 1 : 0) });
    gsap.set(slides, {
      autoAlpha: (i: number) => (i === 0 ? 1 : 0),
      yPercent: 0,
    });
    gsap.set(pictures, { yPercent: 0 });
  } else {
    letters.forEach((chars, i) =>
      gsap.set(chars, { yPercent: i === 0 ? 0 : 110 }),
    );
    gsap.set(slides, {
      yPercent: (i: number) => (i === 0 ? 0 : 100),
      zIndex: (i: number) => (i === 0 ? 1 : 0),
    });
    gsap.set(pictures, { yPercent: (i: number) => (i === 0 ? 0 : -100) });
    gsap.set(images, { scale: 1 });
  }
  gsap.set(segments, { scaleX: 0 });

  let index = 0;
  let userPaused = false;
  let inView = true;
  let progress: gsap.core.Tween | null = null;
  let transition: gsap.core.Timeline | null = null;

  const isRunning = () => !userPaused && inView && !document.hidden;

  const hold = () => {
    progress = gsap.fromTo(
      segments[index],
      { scaleX: 0 },
      { scaleX: 1, duration: HOLD, ease: "none", onComplete: advance },
    );
    if (!isRunning()) progress.pause();
  };

  const advance = () => {
    const current = index;
    index = (index + 1) % slides.length;
    if (index === 0) gsap.set(segments, { scaleX: 0 });
    if (counter) counter.textContent = String(index + 1).padStart(2, "0");

    const tl = gsap.timeline({
      onComplete: () => {
        words[current].classList.remove("is-active");
        words[index].classList.add("is-active");
        slides[current].classList.remove("is-active");
        slides[index].classList.add("is-active");
        hold();
      },
    });
    transition = tl;

    if (reduceMotion) {
      tl.to([words[current], slides[current]], {
        autoAlpha: 0,
        duration: 0.4,
      }).to([words[index], slides[index]], { autoAlpha: 1, duration: 0.4 }, 0);
      return;
    }

    gsap.set(slides[index], { zIndex: 2, yPercent: 100 });
    gsap.set(pictures[index], { yPercent: -100 });
    gsap.set(images[index], { scale: 1.15 });
    gsap.set(slides[current], { zIndex: 1 });

    tl.to(
      letters[current],
      {
        yPercent: -60,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.in",
        stagger: 0.018,
      },
      0,
    )
      .fromTo(
        letters[index],
        { yPercent: 110 },
        { yPercent: 0, duration: 0.75, ease: "expo.out", stagger: 0.03 },
        0.3,
      )
      // Mask and picture move by the same amount in opposite directions (same duration and
      // ease), so the picture stays put while its mask wipes up; the zoom lives on the <img>.
      .to(slides[index], { yPercent: 0, duration: 1, ease: "expo.inOut" }, 0)
      .to(pictures[index], { yPercent: 0, duration: 1, ease: "expo.inOut" }, 0)
      .to(images[index], { scale: 1, duration: 1.4, ease: "expo.out" }, 0)
      .to(images[current], { scale: 1.08, duration: 1, ease: "expo.inOut" }, 0)
      .set(letters[current], { yPercent: 110, autoAlpha: 1 })
      .set(slides[current], { yPercent: 100, zIndex: 0 })
      .set(pictures[current], { yPercent: -100 })
      .set(images[current], { scale: 1 });
  };

  const sync = () => {
    if (isRunning()) {
      transition?.resume();
      progress?.resume();
    } else {
      transition?.pause();
      progress?.pause();
    }
  };

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      userPaused = !userPaused;
      hero.classList.toggle("is-paused", userPaused);
      toggle.setAttribute(
        "aria-label",
        (userPaused ? toggle.dataset.labelPlay : toggle.dataset.labelPause) ??
          "",
      );
      sync();
    });
  }

  // Save work while the hero is off screen or the tab is hidden.
  ScrollTrigger.create({
    trigger: hero,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => {
      inView = self.isActive;
      sync();
    },
  });
  document.addEventListener("visibilitychange", sync);

  hold();
};

document.fonts.ready.then(start);
