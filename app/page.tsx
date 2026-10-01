import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import PracticeAreas from "@/components/PracticeAreas";
import ValuesSection from "@/components/ValuesSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Link from "next/link";
import { lawyerConfig } from "@/lib/content";
import { ArrowRight, BookOpen, ShieldCheck, Award, Calendar, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#F8F5EE] text-[#2A1E17]">
      {/* 1. LexCore Style Hero: Headline, Subtitle, CTA, Lady Justice Statue & Annotations */}
      <Hero />

      {/* 2. Dual-Tone Manifesto Statement & 4-Column Stats with Center Rotating Stamp */}
      <Stats />

      {/* 3. Advocate Portrait Narrative (Clean Editorial Layout) */}
      <AboutPreview />

      {/* 4. Practice Areas (Warm Alabaster & White Cards) */}
      <PracticeAreas />

      {/* 5. Core Professional Values */}
      <ValuesSection />

      {/* 6. Professional Experience (Chronological Timeline - Light Theme) */}
      <section className="py-20 md:py-28 bg-[#F8F5EE] text-[#2A1E17] border-t border-[#E5DDD0]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <SectionHeading
              eyebrow="CAREER MILESTONES"
              title="Litigation & Practice Experience"
              subtitle="A chronological journey through court trials, legal apprenticeships, and independent practice before the High Court and District Courts."
              theme="light"
              className="mb-0"
            />

            <div className="mt-5 md:mt-0 shrink-0">
              <Button href="/experience" variant="secondary" size="md">
                VIEW FULL TIMELINE
              </Button>
            </div>
          </div>

          <ExperienceTimeline items={lawyerConfig.experience} theme="ivory" />
        </div>
      </section>

      {/* 7. Achievements & Standing Highlights (Clean White Cards) */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-[#2A1E17] border-t border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="PROFESSIONAL STANDING"
            title="Recognitions & Verified Credentials"
            subtitle="Committed to ethical legal advocacy, continuous professional legal education, and community legal aid."
            theme="light"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#2A1E17] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(42,30,23,0.08)] transition-all duration-300 group">
              <div className="text-[10px] uppercase tracking-widest text-[#9C7348] font-bold mb-3">
                STATUTORY ENROLLMENT
              </div>
              <div className="font-serif text-3xl text-[#2A1E17] mb-2 font-semibold">
                Bar Council Member
              </div>
              <p className="text-xs text-[#66584F] leading-relaxed mb-5 font-normal">
                Duly enrolled with the {lawyerConfig.personal.barCouncil}, qualified to appear across all Indian judicial forums.
              </p>
              <div className="text-[11px] text-[#2A1E17] flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9C7348]" />
                <span>Verified Licensee</span>
              </div>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#2A1E17] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(42,30,23,0.08)] transition-all duration-300 group">
              <div className="text-[10px] uppercase tracking-widest text-[#9C7348] font-bold mb-3">
                CASE EXPERIENCE
              </div>
              <div className="font-serif text-3xl text-[#2A1E17] mb-2 font-semibold">
                100+ Court Matters
              </div>
              <p className="text-xs text-[#66584F] leading-relaxed mb-5 font-normal">
                Represented individuals, businesses, and aggrieved parties in trial, revisions, and writ appeals.
              </p>
              <div className="text-[11px] text-[#2A1E17] flex items-center gap-1.5 font-semibold">
                <Award className="w-3.5 h-3.5 text-[#9C7348]" />
                <span>High Court & District Courts</span>
              </div>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#2A1E17] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(42,30,23,0.08)] transition-all duration-300 group">
              <div className="text-[10px] uppercase tracking-widest text-[#9C7348] font-bold mb-3">
                CONTINUING EDUCATION
              </div>
              <div className="font-serif text-3xl text-[#2A1E17] mb-2 font-semibold">
                Legal Seminars
              </div>
              <p className="text-xs text-[#66584F] leading-relaxed mb-5 font-normal">
                Active speaker and attendee at Bar Association workshops on civil procedure and criminal jurisprudence.
              </p>
              <div className="text-[11px] text-[#2A1E17] flex items-center gap-1.5 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#9C7348]" />
                <span>Academic Engagement</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#2A1E17] hover:text-[#9C7348] transition-colors"
            >
              <span>EXPLORE ALL CREDENTIALS & ACHIEVEMENTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9C7348]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LexCore Schedule A Consultation Appointment Banner */}
      <section className="py-20 md:py-28 bg-[#F8F5EE] text-[#2A1E17] border-t border-[#E5DDD0]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 md:p-16 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#F8F5EE] border border-[#E5DDD0] flex items-center justify-center text-[#9C7348] mb-6">
              <Calendar className="w-5 h-5" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9C7348] font-bold mb-3">
              CONFIDENTIAL LEGAL CONSULTATION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1E17] mb-4 leading-tight">
              Schedule A Consultation With {lawyerConfig.personal.fullName}
            </h2>

            <p className="text-xs sm:text-sm text-[#66584F] leading-relaxed mb-8 max-w-xl font-normal">
              Take the first step toward resolving your legal matter with confidence. Receive structured legal guidance tailored to the procedural specifics of your case before the High Court or District Courts.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2A1E17] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-semibold hover:bg-[#443227] transition-all duration-300 shadow-md group"
              >
                <span>Confirm Your Appointment</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Button href="/practice-areas" variant="secondary" size="lg">
                REVIEW PRACTICE AREAS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
