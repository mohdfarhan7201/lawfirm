"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LegalEmblem from "./LegalEmblem";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only show once per session to avoid annoying users
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("legal_preloader_seen");
      if (hasLoaded) {
        setIsDone(true);
        return;
      }
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          sessionStorage.setItem("legal_preloader_seen", "true");
        },
      });

      tl.fromTo(
        emblemRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power1.inOut" },
          "-=0.2"
        )
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
          delay: 0.1,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B1012] text-[#F5F1E8]"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div ref={emblemRef}>
          <LegalEmblem size={52} color="#B89B62" />
        </div>

        <div
          ref={textRef}
          className="text-[11px] uppercase tracking-[0.3em] text-[#B89B62] font-semibold"
        >
          JUSTICE &nbsp;|&nbsp; LAW &nbsp;|&nbsp; INTEGRITY
        </div>

        <div className="w-36 h-[1.5px] bg-[#1F272B] overflow-hidden mt-1">
          <div
            ref={lineRef}
            className="w-full h-full bg-[#B89B62] origin-left"
          />
        </div>
      </div>
    </div>
  );
}
