"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { PracticeArea } from "@/lib/content";
import {
  Scale,
  FileText,
  Landmark,
  Building,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/animations";

interface PracticeAreaCardProps {
  area: PracticeArea;
  theme?: "ivory" | "dark";
  showServices?: boolean;
}

const iconMap = {
  Scale,
  FileText,
  Landmark,
  Building,
  Users,
  Briefcase,
};

export default function PracticeAreaCard({
  area,
  theme = "ivory",
  showServices = false,
}: PracticeAreaCardProps) {
  const IconComponent = iconMap[area.iconName] || Scale;
  const isIvory = theme === "ivory";
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      y: -6,
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
        "group relative flex flex-col justify-between p-8 md:p-9 border transition-shadow duration-300 ease-out",
        "bg-[#FFFFFF] text-[#2A1E17] border-[#E5DDD0] hover:border-[#2A1E17] shadow-sm hover:shadow-[0_22px_45px_rgba(42,30,23,0.1)]"
      )}
    >
      {/* Top row: Number and Gold Icon */}
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DDD0]">
          <span className="font-serif text-2xl font-light text-[#9C7348] tracking-wider transition-transform duration-300 group-hover:translate-x-1 inline-block">
            {area.number}
          </span>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8F5EE] border border-[#E5DDD0] text-[#2A1E17] group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[#2A1E17] group-hover:text-[#FAF8F5] transition-all duration-300 shadow-sm">
            <IconComponent className="w-4 h-4" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#2A1E17] group-hover:text-[#9C7348] mb-3 transition-colors">
          {area.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed mb-6 font-normal text-[#66584F]">
          {showServices ? area.description : area.shortDesc}
        </p>

        {/* Optional Services List (used on /practice-areas page) */}
        {showServices && area.services && (
          <ul className="mb-6 space-y-2 border-t border-[#E5DDD0] pt-4">
            {area.services.map((service) => (
              <li
                key={service}
                className="text-xs flex items-center gap-2 text-[#4A3D35]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#9C7348]" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Action Link */}
      <div className="pt-4 border-t border-[#E5DDD0] flex items-center justify-between">
        <Link
          href={`/practice-areas#${area.id}`}
          className="text-[11px] uppercase tracking-[0.16em] font-semibold flex items-center gap-2 text-[#2A1E17] group-hover:text-[#9C7348] transition-all duration-300"
        >
          <span>Explore Scope</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#9C7348]" />
        </Link>
      </div>
    </div>
  );
}
