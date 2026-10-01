"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { lawyerConfig } from "@/lib/content";
import { CheckCircle2, Shield, Scale } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Background Image smooth cinematic parallax scrub
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Content header fade-up
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3 Pillar cards staggered pop-up
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#FFFFFF] overflow-hidden text-[#2A1E17] border-t border-[#E5DDD0]"
    >
      <div className="container-custom relative z-10">
        <div
          ref={contentRef}
          className="w-full max-w-6xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#9C7348] font-semibold mb-4">
            <span className="w-8 h-[1px] bg-[#9C7348]" />
            <span>PRACTICE VALUES</span>
            <span className="w-8 h-[1px] bg-[#9C7348]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#2A1E17] mb-6 max-w-4xl mx-auto tracking-tight">
            Dedicated. Experienced. Result-Oriented.
          </h2>

          {/* Editorial Description */}
          <p className="text-base sm:text-lg text-[#66584F] font-normal leading-relaxed mb-12 max-w-3xl mx-auto">
            {lawyerConfig.values.description}
          </p>

          {/* 3 Pillars */}
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left mb-12">
            {lawyerConfig.values.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-7 md:p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#2A1E17] shadow-sm hover:shadow-[0_16px_36px_rgba(42,30,23,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-[#2A1E17] group-hover:text-[#9C7348] mb-3 font-serif text-xl font-semibold transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#9C7348] shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#66584F] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              CONSULT ADVOCATE SHARMA
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              VIEW PROFESSIONAL PROFILE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
