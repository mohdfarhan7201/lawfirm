"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, ShieldCheck, Scale, Star } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";
import { lawyerConfig } from "@/lib/content";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statueRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightBadgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Watermark background emergence
      if (watermarkRef.current) {
        tl.fromTo(
          watermarkRef.current,
          { opacity: 0, scale: 0.82 },
          { opacity: 0.55, scale: 1, duration: 1.5, ease: "power2.out" },
          0
        );

        // Watermark slow parallax zoom on scroll
        gsap.to(watermarkRef.current, {
          y: -50,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // 2. Statue majestic rise from bottom
      if (statueRef.current) {
        tl.fromTo(
          statueRef.current,
          { opacity: 0, y: 90, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            onComplete: () => {
              // Continuous smooth breathing floating physics
              gsap.to(statueRef.current, {
                y: -12,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          },
          0.1
        );

        // Parallax scrub on scroll
        gsap.to(statueRef.current, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      // 3. Headline words reveal from behind overflow masks
      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words && words.length > 0) {
        tl.fromTo(
          words,
          { y: "120%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
          },
          0.2
        );
      }

      // 4. Subtitle smooth slide-up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
          0.65
        );
      }

      // 5. CTA Button with elegant spring pop
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.88, y: 18 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.8)" },
          0.8
        );
      }

      // 6. Left & right floating annotations
      if (leftCardRef.current) {
        tl.fromTo(
          leftCardRef.current,
          { opacity: 0, x: -45 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          0.9
        );
      }

      if (rightBadgesRef.current) {
        tl.fromTo(
          rightBadgesRef.current.children,
          { opacity: 0, x: 45 },
          { opacity: 1, x: 0, duration: 0.9, stagger: 0.15, ease: "power3.out" },
          0.9
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = [
    "YOUR",
    "LEGAL",
    "PARTNER",
    "IN",
    "EVERY",
    "SITUATION",
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#F8F5EE] text-[#2A1E17] pt-28 sm:pt-36 md:pt-40 pb-16 overflow-hidden flex flex-col justify-between"
    >
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        {/* Main Hero Headline - LexCore Bold All-Caps with Word Masking */}
        <h1
          ref={headlineRef}
          className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] text-[#2A1E17] tracking-tight leading-[1.06] uppercase max-w-5xl mx-auto mb-5 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xs sm:text-sm md:text-[15px] text-[#66584F] max-w-xl mx-auto leading-relaxed font-sans mb-8 px-4"
        >
          From Complex Disputes To Everyday Legal Matters, We Deliver Strategic Solutions With A
          Client First Approach. We Stand By You To Protect What Matters Most.
        </p>

        {/* Primary CTA Button */}
        <div ref={ctaRef} className="mb-10 sm:mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2A1E17] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#443227] transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] group"
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Center Stage: Watermark + Lady Justice Statue + Annotations */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[420px] sm:min-h-[520px] md:min-h-[600px] mt-2">
          {/* Giant Faint Watermark Typography */}
          <div
            ref={watermarkRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[85px] sm:text-[150px] md:text-[200px] lg:text-[230px] font-black text-[#E8DFD1]/55 tracking-[0.18em] uppercase z-0 font-serif leading-none"
          >
            LAWYER
          </div>

          {/* Left Annotation Box (Desktop & Tablet) */}
          <div
            ref={leftCardRef}
            className="hidden md:flex flex-col text-left max-w-[210px] lg:max-w-[240px] absolute left-2 lg:left-6 top-1/3 z-20"
          >
            <p className="text-xs lg:text-[13px] text-[#66584F] leading-relaxed">
              Our legal chambers brings{" "}
              <strong className="text-[#2A1E17] font-bold">15+ years</strong> of combined
              courtroom expertise, having represented clients across over{" "}
              <strong className="text-[#2A1E17] font-bold">1,000+ criminal & civil</strong> matters.
            </p>
          </div>

          {/* Center Statue of Lady Justice */}
          <div
            ref={statueRef}
            className="relative z-10 w-[240px] sm:w-[300px] md:w-[350px] lg:w-[390px] aspect-[3/4] transition-transform duration-700"
          >
            <Image
              src="/images/lady-justice.jpg"
              alt="Lady Justice Bronze Sculpture - Chambers of Adv. Arman Ashrafi"
              fill
              priority
              sizes="(max-width: 768px) 280px, 400px"
              className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(42,30,23,0.18)]"
            />
          </div>

          {/* Right Annotation: Dual Laurel Trust Badges */}
          <div
            ref={rightBadgesRef}
            className="hidden md:flex items-center gap-4 absolute right-2 lg:right-6 top-1/3 z-20"
          >
            {/* Laurel Badge 1 */}
            <div className="flex flex-col items-center text-center p-3 bg-[#FAF8F5]/80 backdrop-blur-sm border border-[#E5DDD0] shadow-sm">
              <div className="flex items-center gap-1 text-[#9C7348] mb-1">
                <span className="text-xs">‹</span>
                <Star className="w-3 h-3 fill-[#9C7348] text-[#9C7348]" />
                <span className="text-xs">›</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#2A1E17]">
                Top Advocate
              </span>
              <span className="text-[9px] text-[#8A7B70] tracking-wider mt-0.5">
                2022 – 2026
              </span>
            </div>

            {/* Laurel Badge 2 */}
            <div className="flex flex-col items-center text-center p-3 bg-[#FAF8F5]/80 backdrop-blur-sm border border-[#E5DDD0] shadow-sm">
              <div className="flex items-center gap-1 text-[#9C7348] mb-1">
                <span className="text-xs">‹</span>
                <Scale className="w-3 h-3 text-[#9C7348]" />
                <span className="text-xs">›</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#2A1E17]">
                Trusted Lawyer
              </span>
              <span className="text-[9px] text-[#8A7B70] tracking-wider mt-0.5">
                Bar Council Reg.
              </span>
            </div>
          </div>
        </div>

        {/* Mobile-only annotations */}
        <div className="md:hidden flex flex-col items-center gap-4 mt-6 text-center max-w-sm px-4">
          <p className="text-xs text-[#66584F] leading-relaxed">
            Our legal practice brings <strong className="text-[#2A1E17]">15+ years</strong> of court
            advocacy across <strong className="text-[#2A1E17]">1,000+ matters</strong>.
          </p>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-[#FFFFFF] border border-[#E5DDD0] text-[10px] uppercase font-bold tracking-wider text-[#2A1E17]">
              ★ Top Advocate 2022-26
            </div>
            <div className="px-3 py-1.5 bg-[#FFFFFF] border border-[#E5DDD0] text-[10px] uppercase font-bold tracking-wider text-[#2A1E17]">
              ⚖️ Bar Council Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
