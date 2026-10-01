"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems, GalleryItem } from "@/lib/content";
import PageHero from "./PageHero";
import { X, ChevronLeft, ChevronRight, Maximize2, Award, Calendar, Tag, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

const categories = [
  "All",
  "Courtroom & Robes",
  "Case Milestones & Press",
  "Awards & Felicitations",
  "Conferences & Seminars",
] as const;

type CategoryType = (typeof categories)[number];

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // Animate grid cards when filtered
  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".gallery-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, [activeCategory]);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((p) => p.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setSelectedPhoto(item);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (filteredItems.length === 0) return;
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
    setSelectedPhoto(filteredItems[nextIdx]);
  };

  const prevPhoto = () => {
    if (filteredItems.length === 0) return;
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
    setSelectedPhoto(filteredItems[prevIdx]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, lightboxIndex, filteredItems]);

  return (
    <>
      <PageHero
        title="Photo Gallery & Press"
        subtitle="Official portraits, courtroom proceedings, legal aid conferences, and regional press milestones of Adv. Arman Ashrafi."
        breadcrumb="Gallery"
      />

      <section className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="container-custom">
          {/* Introductory Note */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9C7348] font-bold block mb-2">
              DOCUMENTED ADVOCACY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1E17] font-semibold leading-tight">
              A Photographic Record of Courtroom Defense & Public Service
            </h2>
            <p className="mt-3 text-base text-[#6E5D4F] leading-relaxed">
              Explore authentic archival photographs spanning landmark trial acquittals, official High Court robes, 
              Bihar State Legal Services Authority (BSLSA) capacity building conventions, and honors conferred by senior judicial officers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 pb-4 border-b border-[#E3DACD]">
            {categories.map((cat) => {
              const count = cat === "All"
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#2A1E17] text-[#FAF8F5] shadow-md shadow-[#2A1E17]/10"
                      : "bg-[#FFFFFF] text-[#6E5D4F] border border-[#E3DACD] hover:border-[#9C7348] hover:text-[#2A1E17]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#9C7348] text-white" : "bg-[#F0ECE1] text-[#6E5D4F]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Open photo lightbox: ${item.title}`}
                onClick={() => openLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(item);
                  }
                }}
                className="gallery-card group cursor-pointer bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E3DACD] shadow-sm hover:shadow-xl hover:border-[#9C7348]/50 transition-all duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#9C7348]"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#EFEBE4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E17]/70 via-[#2A1E17]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-xs text-[#FAF8F5] flex items-center gap-1.5 bg-[#2A1E17]/80 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      <Maximize2 className="w-3.5 h-3.5 text-[#9C7348]" />
                      Click to Expand
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FAF8F5]/95 backdrop-blur-sm text-[#2A1E17] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border border-[#E3DACD] shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#9C7348] mb-2 font-medium">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#2A1E17] leading-snug group-hover:text-[#9C7348] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#6E5D4F] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-xs text-[#6E5D4F] group-hover:text-[#2A1E17] font-medium">
                    <span>View High-Res Photo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9C7348] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#2A1E17] to-[#3B2B21] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#4A372C]">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C2B4A7] font-semibold block mb-2">
                ASSISTANT LEGAL AID DEFENSE COUNSEL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                Require Strategic Legal Defense in Saran or Patna?
              </h3>
              <p className="mt-2 text-sm text-[#E0D7CC] leading-relaxed">
                Connect with Adv. Arman Ashrafi for case evaluation, bail hearings, trial representation, or institutional legal defense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-[#9C7348] hover:bg-[#B38555] text-white text-sm font-semibold tracking-wider uppercase transition-colors text-center shadow-lg shadow-[#9C7348]/20"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/experience"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold tracking-wider uppercase transition-colors text-center"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#140E0A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between w-full max-w-7xl mx-auto z-10 text-[#FAF8F5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9C7348] font-bold">
                {selectedPhoto.category}
              </span>
              <span className="text-xs text-[#8A796A]">•</span>
              <span className="text-xs text-[#C2B4A7]">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close modal"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Middle: Photo Display + Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all border border-white/10 shadow-lg hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-h-[72vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all border border-white/10 shadow-lg hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Title & Description */}
          <div
            className="w-full max-w-4xl mx-auto z-10 bg-[#241A14]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-[#3A2B21] text-[#FAF8F5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#FAF8F5]">
                {selectedPhoto.title}
              </h4>
              <span className="text-xs bg-[#9C7348] text-white px-3 py-1 rounded-full font-medium w-fit">
                {selectedPhoto.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#C2B4A7] leading-relaxed">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
