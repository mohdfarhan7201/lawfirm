"use client";

import React, { useRef } from "react";
import { AchievementItem } from "@/lib/content";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/animations";

interface AchievementCardProps {
  item: AchievementItem;
  theme?: "dark" | "ivory";
}

export default function AchievementCard({
  item,
}: AchievementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      y: -5,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion() || !cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative p-8 border group flex flex-col justify-between transition-shadow duration-300",
        "bg-[#FFFFFF] border-[#E5DDD0] hover:border-[#2A1E17] shadow-sm hover:shadow-[0_20px_40px_rgba(42,30,23,0.08)]"
      )}
    >
      {/* Corner decorative accent */}
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#9C7348] opacity-70 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top category label & verification check */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold">
            {item.category}
          </span>
          {item.verified && (
            <div className="flex items-center gap-1 text-[10px] text-[#66584F]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C7348]" />
              <span>Verified Standing</span>
            </div>
          )}
        </div>

        {/* Big Statistic / Highlight Tag */}
        {item.number && (
          <div className="font-serif text-3xl md:text-4xl text-[#2A1E17] font-semibold mb-2 group-hover:text-[#9C7348] transition-colors">
            {item.number}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight mb-3 text-[#2A1E17]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed text-[#66584F]">
          {item.description}
        </p>
      </div>

      {item.date && (
        <div className="mt-6 pt-4 border-t border-[#E5DDD0] text-[11px] text-[#8A7B70]">
          {item.date}
        </div>
      )}
    </div>
  );
}
