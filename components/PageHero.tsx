"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Watermark entrance and scroll parallax
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
        );

        gsap.to(watermarkRef.current, {
          y: -40,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      }

      // Staggered text entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#F8F5EE] border-b border-[#E5DDD0]"
    >
      {/* Giant Ghost Watermark Typography */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-serif text-[18vw] font-bold text-[#E8DFD1]/40 leading-none tracking-widest whitespace-nowrap">
          {breadcrumb.toUpperCase()}
        </span>
      </div>

      {/* Content Container */}
      <div
        ref={contentRef}
        className="container-custom relative z-10 text-center flex flex-col items-center"
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#9C7348] font-bold mb-4"
        >
          <Link href="/" className="hover:text-[#2A1E17] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#9C7348]/60" />
          <span className="text-[#66584F]">{breadcrumb}</span>
        </nav>

        {/* Page Title */}
        <h1 className="font-serif font-normal text-3xl md:text-5xl lg:text-6xl text-[#2A1E17] tracking-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-[#66584F] font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
