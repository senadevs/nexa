import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// Hero word rotator: letters of the outgoing word rise out of the line mask while the
// next word rises in from below. Hidden letters are reset instantly (never animated back
// through the visible line), so a word never travels top to bottom.
const startRotator = () => {
  const words = [...document.querySelectorAll<HTMLElement>(".rotator-word")];
  if (words.length < 2) return;
  const letters = words.map(
    (word) =>
      SplitText.create(word, {
        type: "chars",
        charsClass: "rotator-char",
        aria: "none",
      }).chars,
  );
  gsap.set(words, { visibility: "visible" });
  letters.forEach((chars, index) =>
    gsap.set(chars, { yPercent: index === 0 ? 0 : 110 }),
  );
  let index = 0;
  const cycle = () => {
    if (document.hidden) return gsap.delayedCall(1, cycle);
    const current = index;
    index = (index + 1) % words.length;
    gsap
      .timeline({ onComplete: () => void gsap.delayedCall(2.2, cycle) })
      .to(letters[current], {
        yPercent: -60,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.in",
        stagger: 0.018,
      })
      .set(letters[current], { yPercent: 110, autoAlpha: 1 })
      .fromTo(
        letters[index],
        { yPercent: 110 },
        { yPercent: 0, duration: 0.75, ease: "expo.out", stagger: 0.03 },
        0.3,
      )
      .add(() => {
        words[current].classList.remove("is-active");
        words[index].classList.add("is-active");
      }, 0.3);
  };
  gsap.delayedCall(2.6, cycle);
};

const countUp = (element: HTMLElement) => {
  const target = Number(element.dataset.count ?? 0);
  const state = { value: 0 };
  gsap.to(state, {
    value: target,
    duration: 1.6,
    ease: "power3.out",
    onUpdate: () => {
      element.textContent = String(Math.round(state.value));
    },
  });
};

if (!reduceMotion) {
  document.fonts.ready.then(() => {
    startRotator();

    // Hero intro: giant lines rise from their mask.
    gsap.from(".hero-title .line-inner", {
      yPercent: 105,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.12,
      delay: 0.1,
    });
    gsap.from(".hero-bottom", {
      autoAlpha: 0,
      y: 24,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.45,
    });

    // Hero glow drifts while the next section covers the hero.
    gsap.to(".hero-glow", {
      xPercent: -20,
      yPercent: 25,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".hero-inner", {
      yPercent: -18,
      autoAlpha: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Marquee: constant loop that speeds up with scroll velocity.
    const loops = [
      ...document.querySelectorAll<HTMLElement>("[data-marquee]"),
    ].map((track) => {
      const direction = Number(track.dataset.marquee ?? 1);
      gsap.set(track, { xPercent: direction > 0 ? 0 : -50 });
      return gsap.to(track, {
        xPercent: direction > 0 ? -50 : 0,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
    });
    ScrollTrigger.create({
      trigger: ".marquee",
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) =>
        loops.forEach((loop) => (self.isActive ? loop.play() : loop.pause())),
      onUpdate: (self) => {
        const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 350, 5);
        loops.forEach((loop) => {
          gsap
            .timeline({ overwrite: true })
            .to(loop, { timeScale: boost, duration: 0.2 })
            .to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out" });
        });
      },
    });

    // Section titles: line-by-line masked reveal.
    document
      .querySelectorAll<HTMLElement>("[data-reveal-title]")
      .forEach((title) => {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (split) =>
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
              scrollTrigger: { trigger: title, start: "top 85%", once: true },
            }),
        });
      });

    // Manifesto: words light up as the reader scrolls through the paragraph.
    const words = gsap.utils.toArray<HTMLElement>("[data-manifesto] .mw");
    gsap.fromTo(
      words,
      { opacity: 0.14 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "[data-manifesto]",
          start: "top 80%",
          end: "bottom 45%",
          scrub: true,
        },
      },
    );

    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          once: true,
          onEnter: () => countUp(element),
        });
      });

    gsap.from(".client-logo span", {
      autoAlpha: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      stagger: { each: 0.06, grid: "auto" },
      scrollTrigger: { trigger: ".client-wall", start: "top 85%", once: true },
    });

    const media = gsap.matchMedia();

    media.add("(min-width: 801px)", () => {
      // Stacked service cards: each card sinks back as the next one slides over it.
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) return;
        gsap.to(card.querySelector(".service-card-inner"), {
          scale: 0.92,
          filter: "brightness(0.72)",
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top top+=120",
            scrub: true,
          },
        });
      });
    });

    media.add("(min-width: 1025px)", () => {
      // Work: vertical scroll drives a horizontal track while the viewport is pinned.
      const section = document.querySelector<HTMLElement>(".work");
      const viewport = document.querySelector<HTMLElement>(".work-viewport");
      const track = document.querySelector<HTMLElement>(".work-track");
      if (!section || !viewport || !track) return;
      section.classList.add("is-horizontal");
      const distance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.to(".work-progress span", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".work-media img").forEach((image) => {
        gsap.fromTo(
          image,
          { xPercent: -6 },
          {
            xPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".work-item"),
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
      return () => section.classList.remove("is-horizontal");
    });

    media.add("(hover: hover) and (pointer: fine)", () => {
      const follower = document.querySelector<HTMLElement>(".cursor-follower");
      const label = follower?.querySelector("span");
      if (!follower || !label) return;
      const x = gsap.quickTo(follower, "x", {
        duration: 0.45,
        ease: "power3.out",
      });
      const y = gsap.quickTo(follower, "y", {
        duration: 0.45,
        ease: "power3.out",
      });
      const move = (event: PointerEvent) => {
        x(event.clientX);
        y(event.clientY);
      };
      window.addEventListener("pointermove", move, { passive: true });
      const targets = [
        ...document.querySelectorAll<HTMLElement>("[data-cursor]"),
      ];
      const enter = (event: Event) => {
        label.textContent =
          (event.currentTarget as HTMLElement).dataset.cursor ?? "";
        follower.classList.add("is-visible");
      };
      const leave = () => follower.classList.remove("is-visible");
      targets.forEach((target) => {
        target.addEventListener("pointerenter", enter);
        target.addEventListener("pointerleave", leave);
        target.addEventListener("focus", leave);
      });
      return () => {
        window.removeEventListener("pointermove", move);
        targets.forEach((target) => {
          target.removeEventListener("pointerenter", enter);
          target.removeEventListener("pointerleave", leave);
        });
      };
    });

    // Contact: the form card rises into place.
    gsap.from(".contact-form", {
      y: 60,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".contact-grid", start: "top 85%", once: true },
    });
  });
}
