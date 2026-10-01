"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef1 = useRef<HTMLSpanElement>(null);
  const lineRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const el = headingRef.current;
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });

      // Accent lines expand
      if (lineRef1.current) {
        tl.fromTo(
          lineRef1.current,
          { scaleX: 0, transformOrigin: isCenter ? "center" : "left" },
          { scaleX: 1, duration: 0.6, ease: "power2.out" }
        );
      }
      if (lineRef2.current) {
        tl.fromTo(
          lineRef2.current,
          { scaleX: 0, transformOrigin: "center" },
          { scaleX: 1, duration: 0.6, ease: "power2.out" },
          "<"
        );
      }

      // Title & subtitle smooth stagger
      tl.fromTo(
        el.querySelectorAll(".animate-heading-item"),
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power3.out" },
        "-=0.4"
      );
    }, headingRef);

    return () => ctx.revert();
  }, [isCenter]);

  return (
    <div
      ref={headingRef}
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "animate-heading-item flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold mb-3",
            isLight ? "text-[#9C7348]" : "text-[#B89B62]"
          )}
        >
          <span
            ref={lineRef1}
            className={cn("w-6 h-[1.5px] inline-block", isLight ? "bg-[#9C7348]" : "bg-[#B89B62]")}
          />
          <span>{eyebrow}</span>
          {isCenter && (
            <span
              ref={lineRef2}
              className={cn("w-6 h-[1.5px] inline-block", isLight ? "bg-[#9C7348]" : "bg-[#B89B62]")}
            />
          )}
        </div>
      )}

      <h2
        className={cn(
          "animate-heading-item font-serif font-bold text-3xl md:text-5xl lg:text-5xl leading-[1.15] tracking-tight",
          isLight ? "text-[#2A1E17]" : "text-[#FAF8F5]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "animate-heading-item mt-4 max-w-2xl text-sm md:text-base leading-relaxed font-normal",
            isLight ? "text-[#66584F]" : "text-[#D1D5DB]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
