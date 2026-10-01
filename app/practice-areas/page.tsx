import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import Button from "@/components/Button";
import { lawyerConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas | Criminal Defense, Bail & Civil Disputes",
  description:
    "Explore the areas of legal practice represented by Adv. Arman Ashrafi, including Criminal Trial Defense, Section 498A Dowry Defense, Civil & Property Suits, Legal Aid, and Matrimonial Law.",
};

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <PageHero
        title="Practice Areas"
        subtitle="Focused legal expertise for complex matters across High Court and District Court jurisdictions."
        breadcrumb="Practice Areas"
        backgroundImage="/images/scales-of-justice.jpg"
      />

      {/* Intro Editorial */}
      <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E5DDD0]">
        <div className="container-custom max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9C7348] font-bold">
            LEGAL JURISDICTIONS & LITIGATION SCOPE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2A1E17] font-normal mt-3 mb-6">
            Principled Representation in Trial and Appellate Courts
          </h2>
          <p className="text-sm md:text-base text-[#66584F] leading-relaxed font-light">
            Every legal matter requires an individualized balance of procedural precision, statutory command, and tactical litigation strategy. Review the primary practice domains handled below.
          </p>
        </div>
      </section>

      {/* Detailed Grid with Full Services Breakdown */}
      <section className="py-20 md:py-32 bg-[#F8F5EE] text-[#2A1E17]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="PORTFOLIO OF SERVICES"
            title="Comprehensive Legal Representation"
            subtitle="Detailed scope of court defense, advisory, petition drafting, and appellate advocacy."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyerConfig.practiceAreas.map((area) => (
              <div key={area.id} id={area.id} className="scroll-mt-28">
                <PracticeAreaCard
                  area={area}
                  theme="ivory"
                  showServices={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Consultation CTA */}
      <section className="py-20 bg-[#FFFFFF] border-t border-[#E5DDD0] text-center">
        <div className="container-custom max-w-3xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-3">
            NEED ADVISORY ON A SPECIALIZED MATTER?
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#2A1E17] mb-6">
            Discuss Your Specific Court Procedure
          </h3>
          <p className="text-sm text-[#66584F] mb-8 leading-relaxed">
            If your legal question involves multiple jurisdictions or preliminary legal queries, schedule a chamber consultation for an honest evaluation of merit.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            BOOK A CASE ASSESSMENT
          </Button>
        </div>
      </section>
    </div>
  );
}
