import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Button from "@/components/Button";
import { lawyerConfig } from "@/lib/content";
import { Landmark, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Experience | Court Litigation Timeline",
  description:
    "Chronological courtroom experience of Adv. Arman Ashrafi spanning Assistant Legal Aid Defense Counsel (LADCS) appointment at DLSA Saran, criminal trial defense, and Patna High Court litigation.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <PageHero
        title="Professional Experience"
        subtitle="A proven history of dedicated advocacy, court trial preparation, and appellate litigation."
        breadcrumb="Experience"
        backgroundImage="/images/hero-court.jpg"
      />

      {/* Main Timeline Section */}
      <section className="py-20 md:py-32 bg-[#F8F5EE] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="CAREER PROGRESSION"
            title="Court Litigation Timeline"
            subtitle="Advancement through disciplined legal research, chamber apprenticeships, and independent practice."
            theme="light"
            align="center"
          />

          <div className="mt-12 md:mt-16">
            <ExperienceTimeline items={lawyerConfig.experience} theme="ivory" />
          </div>
        </div>
      </section>

      {/* Court Appearance & Jurisdictional Scope */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="JURISDICTIONS"
            title="Courts & Tribunals Practiced Before"
            subtitle="Regular appearances before constitutional, appellate, and trial forums."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm hover:shadow-md transition-all">
              <Landmark className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                High Court of Judicature
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                {lawyerConfig.personal.highCourtBench}
              </p>
              <ul className="text-xs text-[#66584F] space-y-1.5 border-t border-[#E5DDD0] pt-3">
                <li>• Extraordinary Writ Petitions (Art. 226)</li>
                <li>• Criminal Appeals & Quashing Petitions</li>
                <li>• Civil First & Second Appeals</li>
              </ul>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm hover:shadow-md transition-all">
              <Scale className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                District & Sessions Courts
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                Civil Court Complex, Saran at Chapra and surrounding territorial divisions.
              </p>
              <ul className="text-xs text-[#66584F] space-y-1.5 border-t border-[#E5DDD0] pt-3">
                <li>• Sessions Trials & Regular Bail Hearings</li>
                <li>• Original Title, Partition & Money Suits</li>
                <li>• Motor Accident & Consumer Forums</li>
              </ul>
            </div>

            <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm hover:shadow-md transition-all">
              <FileText className="w-8 h-8 text-[#9C7348] mb-4" />
              <h3 className="font-serif text-2xl text-[#2A1E17] mb-2">
                Revenue & Regulatory Tribunals
              </h3>
              <p className="text-xs text-[#66584F] leading-relaxed mb-4">
                Revenue Courts, Board of Revenue, and Administrative Authorities.
              </p>
              <ul className="text-xs text-[#66584F] space-y-1.5 border-t border-[#E5DDD0] pt-3">
                <li>• Land Revenue & Mutation Matters</li>
                <li>• Public Service Inquiries & Grievances</li>
                <li>• Statutory Regulatory Representations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F8F5EE] text-[#2A1E17] text-center border-t border-[#E5DDD0]">
        <div className="container-custom flex flex-col items-center">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2A1E17] mb-4">
            Discuss Case Strategy Before the Appropriate Court
          </h3>
          <p className="text-xs text-[#66584F] mb-6 max-w-xl">
            Early consultation ensures procedural compliance and helps determine whether writ, trial, or settlement avenues provide the optimum legal remedy.
          </p>
          <Button href="/contact" variant="primary" size="md">
            CONNECT WITH CHAMBERS
          </Button>
        </div>
      </section>
    </div>
  );
}
