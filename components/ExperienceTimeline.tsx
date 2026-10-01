"use client";

import { useEffect, useRef } from "react";
import { lawyerConfig, ExperienceItem } from "@/lib/content";
import { Briefcase, Landmark } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items?: ExperienceItem[];
  theme?: "dark" | "ivory";
}

export default function ExperienceTimeline({
  items = lawyerConfig.experience,
  theme = "dark",
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Animate vertical gold line growing down
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 85%",
              scrub: 0.5,
            },
          }
        );
      }

      // Animate each timeline entry
      itemsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isDark = theme === "dark";

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
      {/* Background Track Line */}
      <div className={cn("absolute left-2 sm:left-3.5 top-2 bottom-4 w-[2px]", isDark ? "bg-[#2A1E17]/20" : "bg-[#E5DDD0]")} />

      {/* Animated Growing Gold Line */}
      <div
        ref={lineRef}
        className="absolute left-2 sm:left-3.5 top-2 bottom-4 w-[2px] bg-[#9C7348] origin-top shadow-[0_0_8px_rgba(156,115,72,0.4)]"
      />

      {/* Timeline Items */}
      <div className="space-y-12 sm:space-y-16">
        {items.map((item, index) => {
          const isCurrent = index === 0;
          return (
            <div
              key={item.id}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative flex flex-col items-start pl-6 sm:pl-8 group"
            >
              {/* Gold Timeline Dot */}
              <div
                className={cn(
                  "absolute -left-[19px] sm:-left-[23px] top-1.5 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300",
                  isDark ? "border-[#0B1012] bg-[#9C7348]" : "border-[#F8F5EE] bg-[#2A1E17]",
                  isCurrent
                    ? "ring-4 ring-[#9C7348]/30 shadow-[0_0_12px_#9C7348]"
                    : "group-hover:scale-125"
                )}
              >
                {isCurrent && (
                  <span className="absolute -inset-0.5 rounded-full bg-[#9C7348] animate-ping opacity-40 pointer-events-none" />
                )}
              </div>

              {/* Year & Badge Row */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-serif text-xl sm:text-2xl text-[#9C7348] font-bold">
                  {item.period}
                </span>
                {item.badge && (
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest px-2.5 py-0.5 font-medium border",
                    isDark ? "bg-[rgba(184,155,98,0.12)] border-[rgba(184,155,98,0.3)] text-[#B89B62]" : "bg-[#FFFFFF] border-[#E5DDD0] text-[#2A1E17]"
                  )}>
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Role Title */}
              <h3
                className={cn(
                  "font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-1",
                  isDark ? "text-[#F5F1E8]" : "text-[#2A1E17]"
                )}
              >
                {item.role}
              </h3>

              {/* Organization / Court */}
              <div className={cn("flex items-center gap-2 text-xs uppercase tracking-[0.18em] mb-4", isDark ? "text-[#9CA3AF]" : "text-[#8A7B70]")}>
                <Landmark className="w-3.5 h-3.5 text-[#9C7348]" />
                <span>{item.organization}</span>
              </div>

              {/* Description */}
              <p
                className={cn(
                  "text-sm leading-relaxed max-w-2xl mb-4 font-normal",
                  isDark ? "text-[#D1D5DB]" : "text-[#66584F]"
                )}
              >
                {item.description}
              </p>

              {/* Bulleted Key Focus Points */}
              {item.achievements && (
                <ul className="space-y-1.5 border-l border-[rgba(184,155,98,0.3)] pl-4">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className={`text-xs ${
                        isDark ? "text-[#9CA3AF]" : "text-[#6B7280]"
                      }`}
                    >
                      • {ach}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
