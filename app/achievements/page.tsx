import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AchievementCard from "@/components/AchievementCard";
import Button from "@/components/Button";
import { lawyerConfig } from "@/lib/content";
import { ShieldCheck, Award, BookOpen, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements & Standing | Verified Legal Credentials",
  description:
    "Verified professional standing, bar council membership, litigation record, and legal outreach seminars conducted by Adv. Arjun Sharma.",
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <PageHero
        title="Achievements & Standing"
        subtitle="Transparent credentials, verified professional standing, and contributions to legal literacy."
        breadcrumb="Achievements"
        backgroundImage="/images/legal-books.jpg"
      />

      {/* Main Stats / Highlights Section */}
      <section className="py-20 md:py-32 bg-[#F8F5EE] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="CREDENTIALS"
            title="Verified Standing & Milestones"
            subtitle="Ground rules of the profession require factual, transparent representation without exaggerated claims."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawyerConfig.achievements.map((ach) => (
              <AchievementCard key={ach.id} item={ach} theme="ivory" />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contributions & CLE */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="LEGAL OUTREACH"
            title="Workshops, Seminars & Pro Bono Advocacy"
            subtitle="Engaging with continuing legal education and expanding civic understanding of constitutional rights."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm transition-colors">
              <BookOpen className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                Procedural Law Seminars
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                Delivered technical discussions at district bar association events on the transition to the Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS).
              </p>
              <div className="text-[11px] text-[#9C7348] font-bold">
                Continuing Legal Education
              </div>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm transition-colors">
              <Users className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                Legal Aid Outreach
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                Assisted community legal awareness camps, educating agrarian workers and local self-help groups on statutory property inheritance and consumer grievance mechanisms.
              </p>
              <div className="text-[11px] text-[#9C7348] font-bold">
                Community Legal Literacy
              </div>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                Moot Court Judge & Mentor
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                Invited as an external evaluator for inter-collegiate moot court competitions, evaluating undergraduate students on constitutional brief drafting and oral advocacy.
              </p>
              <div className="text-[11px] text-[#9C7348] font-bold">
                Institutional Mentorship
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Awards & Accreditations Slot */}
      <section className="py-16 md:py-24 bg-[#F8F5EE] text-[#2A1E17] border-t border-[#E5DDD0]">
        <div className="container-custom max-w-4xl text-center">
          <div className="p-8 md:p-10 border border-[#E5DDD0] bg-[#FFFFFF] shadow-sm">
            <Award className="w-10 h-10 text-[#9C7348] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
              Verified Certifications & Empanelments
            </h3>
            <p className="text-xs text-[#66584F] max-w-lg mx-auto mb-6 leading-relaxed">
              In accordance with Bar Council ethical directives, certificates of merit and tribunal empanelments are verified by chamber records and can be furnished during in-person consultations.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="md"
            >
              CHAMBERS CONSULTATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
