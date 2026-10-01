"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Creates a standard section scroll reveal
 */
export function createSectionReveal(
  element: HTMLElement | string,
  trigger?: HTMLElement | string,
  options?: { y?: number; duration?: number; delay?: number }
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return null;
  }

  registerGSAP();

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: options?.y ?? 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.9,
      delay: options?.delay ?? 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Staggered card reveal for grids
 */
export function createStaggerReveal(
  elements: HTMLElement[] | string,
  trigger: HTMLElement | string,
  stagger: number = 0.12
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return null;
  }

  registerGSAP();

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 35,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Line reveal animation (for dividers, underlines)
 */
export function createLineReveal(
  element: HTMLElement | string,
  trigger?: HTMLElement | string
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { scaleX: 1 });
    return null;
  }

  registerGSAP();

  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 1.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 90%",
      },
    }
  );
}

/**
 * Image clip-path reveal effect
 */
export function createImageReveal(
  container: HTMLElement | string,
  image?: HTMLElement | string
) {
  if (prefersReducedMotion()) {
    gsap.set(container, { clipPath: "inset(0% 0% 0% 0%)" });
    if (image) gsap.set(image, { scale: 1 });
    return null;
  }

  registerGSAP();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    container,
    { clipPath: "inset(0 0 100% 0)" },
    {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.2,
      ease: "power3.inOut",
    }
  );

  if (image) {
    tl.fromTo(
      image,
      { scale: 1.15 },
      { scale: 1, duration: 1.4, ease: "power2.out" },
      "<0.1"
    );
  }

  return tl;
}

/**
 * Subtle parallax effect for background images
 */
export function createParallax(
  image: HTMLElement | string,
  trigger: HTMLElement | string,
  speed: number = 0.2
) {
  if (prefersReducedMotion()) return null;

  registerGSAP();

  return gsap.fromTo(
    image,
    { y: -30 * speed },
    {
      y: 30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
}
