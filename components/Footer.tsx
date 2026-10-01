"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import LegalEmblem from "./LegalEmblem";
import { lawyerConfig } from "@/lib/content";
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Parallax on giant watermark
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 40, opacity: 0.3 },
          {
            y: -20,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.6,
            },
          }
        );
      }

      // Column reveal
      if (columnsRef.current) {
        gsap.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-[#1E1510] text-[#FAF8F5] pt-16 pb-10 overflow-hidden border-t border-[#35251C]">
      {/* Giant Ghost Watermark in Background */}
      <div
        ref={watermarkRef}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[90px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-serif font-black text-[#281C15] tracking-[0.14em] uppercase leading-none z-0 whitespace-nowrap"
      >
        ARJUN SHARMA
      </div>

      <div className="container-custom relative z-10">
        {/* Main 3-Column Clean Row */}
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#35251C]">
          {/* Col 1: Identity & Courts (md:col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <LegalEmblem size={36} color="#9C7348" />
              <div className="flex items-baseline gap-1.5">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-semibold leading-tight">
                  {lawyerConfig.personal.fullName}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#9C7348]" />
              </div>
            </div>

            <p className="text-sm sm:text-[15px] text-[#C2B4A7] leading-relaxed max-w-md">
              Reliable legal solutions focused on protecting your rights with clarity, integrity, and decisive courtroom results before the High Court and District Courts.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3.5 mt-2">
              {lawyerConfig.social.linkedin && (
                <a
                  href={lawyerConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-[#3A2A20] flex items-center justify-center text-[#9C7348] hover:border-[#9C7348] hover:bg-[#35251C] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {lawyerConfig.social.twitter && (
                <a
                  href={lawyerConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full border border-[#3A2A20] flex items-center justify-center text-[#9C7348] hover:border-[#9C7348] hover:bg-[#35251C] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <span className="text-sm uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-sm sm:text-[15px] text-[#E8DFD3]">
              <li>
                <Link href="/" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9C7348] transition-colors inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Chambers Contact (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-3.5">
            <span className="text-sm uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
              Chambers & Contact
            </span>
            <div className="space-y-3.5 text-sm sm:text-[15px] text-[#C2B4A7]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9C7348] shrink-0 mt-0.5" />
                <span className="leading-snug text-[#FAF8F5]">{lawyerConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#9C7348] shrink-0" />
                <a
                  href={`tel:${lawyerConfig.personal.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#9C7348] text-[#FAF8F5] font-mono"
                >
                  {lawyerConfig.personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#9C7348] shrink-0" />
                <a
                  href={`mailto:${lawyerConfig.personal.email}`}
                  className="hover:text-[#9C7348] text-[#FAF8F5]"
                >
                  {lawyerConfig.personal.email}
                </a>
              </div>
            </div>

            <div className="mt-3">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm sm:text-[15px] text-[#9C7348] hover:text-[#B58A63] underline underline-offset-4 font-semibold"
              >
                Schedule Chamber Appointment →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Simple Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A8988D]">
          <div>
            © {currentYear} {lawyerConfig.personal.fullName}. All Rights Reserved.
          </div>

          <div className="text-xs text-center sm:text-right max-w-md text-[#8A7B70]">
            Informational portfolio compliant with Bar Council of India Rule 36.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#9C7348] hover:text-[#FAF8F5] transition-colors font-medium"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
