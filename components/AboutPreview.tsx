"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { lawyerConfig } from "@/lib/content";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Text fade-up
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textColRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Sophisticated frame clip reveal
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { clipPath: "inset(0 0 100% 0)", opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Quote delayed reveal with gentle continuous floating physics
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
            },
            onComplete: () => {
              gsap.to(quoteRef.current, {
                y: -6,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );
      }

      // Subtle portrait parallax on scroll
      if (imageFrameRef.current) {
        gsap.to(imageFrameRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#FFFFFF] text-[#2A1E17] border-t border-[#E5DDD0] overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Text (Clean & Authoritative) */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              eyebrow="ABOUT ADV. ARJUN SHARMA"
              title="Driven By Strategy, Grounded In Integrity"
              subtitle="Providing principled legal representation and strategic counsel across high-stakes court matters."
              theme="light"
              className="mb-6 md:mb-8"
            />

            <p className="text-base text-[#4A3D35] leading-relaxed mb-5 font-normal">
              {lawyerConfig.about.previewText}
            </p>

            <p className="text-sm text-[#66584F] leading-relaxed mb-8">
              Practicing before the High Court of Judicature and District Courts, our chambers is rooted in upholding institutional decorum, rigorous pre-trial research, and client-first advocacy that adheres to the highest ethics of the Indian legal profession.
            </p>

            <Button
              href="/about"
              variant="primary"
              size="md"
              className="min-w-[200px]"
            >
              KNOW MORE ABOUT ME
            </Button>
          </div>

          {/* Right Column: Grand Framed Portrait with Floating Quote Card */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Background Architectural Accent Border */}
              <div className="absolute -inset-3.5 border border-[#E5DDD0] pointer-events-none translate-x-3 translate-y-3" />

              {/* Main Framed Portrait */}
              <div
                ref={imageFrameRef}
                className="relative aspect-[3/4] w-full overflow-hidden border-2 border-[#2A1E17] shadow-[0_20px_50px_rgba(42,30,23,0.12)] bg-[#F8F5EE]"
              >
                <Image
                  src="/images/lawyer.jpg"
                  alt={lawyerConfig.personal.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 340px, 400px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Corner ornamental accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#2A1E17]" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#2A1E17]" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#2A1E17]" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#2A1E17]" />
              </div>

              {/* Floating Quote Card Overlay */}
              <div
                ref={quoteRef}
                className="mt-4 sm:-mt-10 sm:translate-x-4 relative z-10 bg-[#F8F5EE] border border-[#E5DDD0] p-5 md:p-6 shadow-[0_16px_36px_rgba(42,30,23,0.08)]"
              >
                <div className="font-serif italic text-base sm:text-lg text-[#2A1E17] leading-relaxed mb-2">
                  &ldquo;{lawyerConfig.quote.text}&rdquo;
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#9C7348] font-semibold">
                  — {lawyerConfig.quote.author}
                </div>
                <div className="text-[10px] text-[#8A7B70] mt-0.5">
                  {lawyerConfig.personal.courts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
