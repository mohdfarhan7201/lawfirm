import React from "react";
import { AchievementItem } from "@/lib/content";
import { Award, CheckCircle, Scale, ShieldCheck, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  item: AchievementItem;
  theme?: "dark" | "ivory";
}

export default function AchievementCard({
  item,
  theme = "dark",
}: AchievementCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative p-8 border transition-all duration-300 group flex flex-col justify-between",
        isDark
          ? "bg-[#12181B] border-[rgba(184,155,98,0.2)] hover:border-[#B89B62] hover:bg-[#151D21]"
          : "bg-[#FFFFFF] border-[#E3DCD0] hover:border-[#B89B62] shadow-sm hover:shadow-lg"
      )}
    >
      {/* Corner decorative accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B89B62] opacity-70 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top category label & verification check */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89B62] font-semibold">
            {item.category}
          </span>
          {item.verified && (
            <div className="flex items-center gap-1 text-[10px] text-[#9CA3AF]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89B62]" />
              <span>Verified Standing</span>
            </div>
          )}
        </div>

        {/* Big Statistic / Highlight Tag */}
        {item.number && (
          <div className="font-serif text-3xl md:text-4xl text-[#B89B62] font-normal mb-2">
            {item.number}
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-serif text-xl md:text-2xl font-normal tracking-tight mb-3",
            isDark ? "text-[#F5F1E8]" : "text-[#0B1012]"
          )}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-xs md:text-sm leading-relaxed",
            isDark ? "text-[#9CA3AF]" : "text-[#555E62]"
          )}
        >
          {item.description}
        </p>
      </div>

      {item.date && (
        <div className="mt-6 pt-4 border-t border-[rgba(184,155,98,0.15)] text-[11px] text-[#777777]">
          {item.date}
        </div>
      )}
    </div>
  );
}
