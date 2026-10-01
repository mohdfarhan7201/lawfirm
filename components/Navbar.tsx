"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LegalEmblem from "./LegalEmblem";
import Button from "./Button";
import { lawyerConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // GSAP animation for mobile drawer
  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo(
        "#mobile-drawer",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        ".mobile-nav-item",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.06,
          delay: 0.08,
          ease: "power2.out",
        }
      );
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[#F8F5EE]/95 backdrop-blur-md py-3.5 border-b border-[#E5DDD0] shadow-[0_4px_24px_rgba(42,30,23,0.06)]"
            : "bg-[#F8F5EE]/90 backdrop-blur-md py-4 border-b border-[#E5DDD0]"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo / Advocate Title - LexCore Style Bold Branding */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-label={`${lawyerConfig.personal.fullName} - Home`}
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <LegalEmblem size={30} color="#2A1E17" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-[#2A1E17] transition-colors">
                {lawyerConfig.personal.fullName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7348] translate-y-[-2px]" />
            </div>
          </Link>

          {/* Desktop Nav Items - Editorial with Active Bullet Dot */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[12px] uppercase tracking-[0.14em] transition-colors duration-200 flex items-center gap-1.5",
                    isActive
                      ? "text-[#2A1E17] font-bold"
                      : "text-[#66584F] hover:text-[#2A1E17] font-medium"
                  )}
                >
                  {isActive && (
                    <span className="text-[#9C7348] text-base leading-none">•</span>
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button - Deep Roasted Espresso with Diagonal Arrow */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A1E17] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#443227] transition-all duration-300 group shadow-sm active:scale-[0.98]"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center p-2 text-[#2A1E17] hover:text-[#9C7348] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C7348]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#9C7348]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2A1E17]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer - Warm Ivory / Light Luxury */}
      {mobileOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-30 bg-[#F8F5EE] flex flex-col justify-between pt-24 pb-10 px-8 md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#E5DDD0] pb-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C7348] font-bold">
                Court & Litigation Portfolio
              </span>
              <span className="text-[10px] text-[#66584F]">
                High Court & District Court
              </span>
            </div>

            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "mobile-nav-item flex items-center justify-between text-2xl font-serif tracking-wide py-2 border-b border-[#E5DDD0]",
                      isActive
                        ? "text-[#9C7348] font-medium"
                        : "text-[#2A1E17] hover:text-[#9C7348]"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#9C7348] opacity-75" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mobile-nav-item flex flex-col gap-4 pt-6 border-t border-[#E5DDD0]">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              GET IN TOUCH
            </Button>
            <div className="text-center text-[11px] text-[#66584F]">
              {lawyerConfig.personal.courts} • {lawyerConfig.personal.location}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
