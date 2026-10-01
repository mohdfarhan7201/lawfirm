"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const statsData = [
    { value: 15, suffix: "+", label: "Years in Practice" },
    { value: 1000, suffix: "+", label: "Legal Matters Resolved" },
    { value: 95, suffix: "%", label: "Client Approval" },
    { value: 500, suffix: "+", label: "Bail & Writs Argued" },
  ];

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Manifesto text scroll entrance
      if (manifestoRef.current) {
        gsap.fromTo(
          manifestoRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: manifestoRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Stats row entrance
      if (statsRowRef.current) {
        gsap.fromTo(
          statsRowRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRowRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Numbers counting
      countersRef.current.forEach((counter, i) => {
        if (!counter) return;
        const target = statsData[i].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            counter.innerText = Math.round(obj.val).toString();
          },
        });
      });

      // Rotating stamp continuous 360 animation + scroll-driven speedup
      if (stampRef.current) {
        const spinTween = gsap.to(stampRef.current, {
          rotation: "+=360",
          duration: 14,
          repeat: -1,
          ease: "none",
        });

        // Speed up rotation when scrolling down through section
        gsap.to(stampRef.current, {
          rotation: "+=720",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 pb-20 md:pb-28 bg-[#F8F5EE] text-[#2A1E17] overflow-hidden"
    >
      <div className="container-custom">
        {/* LexCore Manifesto Statement (Dual-Tone Typography) */}
        <div
          ref={manifestoRef}
          className="max-w-4xl mx-auto text-center font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.26] tracking-tight mb-16 sm:mb-24 px-4"
        >
          <span className="text-[#968980] font-light">
            At Chambers of Adv. Arman Ashrafi, We Deliver Principled Legal Defense Through Expertise,
            Precision, And A Client{" "}
          </span>
          <span className="text-[#2A1E17] font-semibold">
            Focused Mindset. Backed By Integrity And Results, We Support You Every Step Of The Way.
          </span>
        </div>

        {/* Horizontal 4-Column Stats with Center Rotating Stamp */}
        <div className="relative pt-12 border-t border-[#E5DDD0]">
          {/* Centered Circular Rotating Scroll Down Stamp */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="relative w-22 h-22 rounded-full bg-[#35251C] text-[#FAF8F5] border-2 border-[#E5DDD0] shadow-lg flex items-center justify-center">
              {/* Spinning circular text */}
              <div
                ref={stampRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                  <path
                    id="stampCircle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] uppercase tracking-[0.22em] fill-[#FAF8F5] font-semibold font-sans">
                    <textPath href="#stampCircle">
                      • SCROLL DOWN • SCROLL DOWN •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Down Arrow */}
              <ArrowDown className="w-4 h-4 text-[#FAF8F5]" />
            </div>
          </div>

          {/* 4 Stats Columns */}
          <div
            ref={statsRowRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#E5DDD0] pt-4"
          >
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-4 pt-4 lg:pt-0"
              >
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A1E17] tracking-tight mb-2">
                  <span
                    ref={(el) => {
                      countersRef.current[index] = el;
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#9C7348] ml-0.5">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-[#66584F] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
