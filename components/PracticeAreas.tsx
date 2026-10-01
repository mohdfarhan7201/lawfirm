"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import PracticeAreaCard from "./PracticeAreaCard";
import Button from "./Button";
import { lawyerConfig } from "@/lib/content";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
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
      className="py-16 md:py-24 bg-[#F8F5EE] text-[#2A1E17] border-t border-[#E5DDD0]"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <SectionHeading
            eyebrow="LEGAL EXPERTISE"
            title="Areas of Legal Practice"
            subtitle="Strategic legal representation and advisory spanning civil, criminal, constitutional, and appellate matters."
            theme="light"
            className="mb-0"
          />

          <div className="mt-5 md:mt-0 shrink-0">
            <Button
              href="/practice-areas"
              variant="primary"
              size="md"
            >
              VIEW ALL PRACTICE AREAS
            </Button>
          </div>
        </div>

        {/* 3-Column Grid of 6 Practice Areas */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {lawyerConfig.practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.id}
              area={area}
              theme="ivory"
              showServices={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
