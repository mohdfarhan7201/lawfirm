import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { lawyerConfig } from "@/lib/content";
import { Scale, Shield, CheckCircle, GraduationCap, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Adv. Arman Ashrafi | LADCS & Legal Practitioner",
  description:
    "Learn about Adv. Arman Ashrafi's background, Assistant Legal Aid Defense Counsel (LADCS) appointment, courtroom litigation, and criminal defense milestones in Saran and Patna High Court.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <PageHero
        title="About Advocate Arman Ashrafi"
        subtitle="Assistant Legal Aid Defense Counsel (LADCS), criminal defense advocate, and dedicated defender of constitutional rights."
        breadcrumb="About"
        backgroundImage="/images/court-building.jpg"
      />

      {/* Main Profile Editorial Section */}
      <section className="py-20 md:py-32 bg-[#F8F5EE] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Framed Portrait & Standing Box */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="aspect-[3/4] relative border border-[#E5DDD0] shadow-sm bg-[#FFFFFF] overflow-hidden p-2">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/lawyer.jpg"
                      alt={lawyerConfig.personal.fullName}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="mt-6 p-6 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm text-left">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
                    COURT AFFILIATION & BAR STANDING
                  </div>
                  <div className="font-serif text-lg text-[#2A1E17] mb-1">
                    {lawyerConfig.personal.courts}
                  </div>
                  <div className="text-xs text-[#66584F]">
                    Enrolled with {lawyerConfig.personal.barCouncil}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-7 flex flex-col">
              <SectionHeading
                eyebrow="PROFESSIONAL PROFILE"
                title="Dedicated Advocate & Counsel"
                subtitle="Committed to rigorous legal preparation, transparent advisory, and unwavering courtroom defense."
                theme="light"
              />

              <div className="space-y-5 text-sm md:text-base text-[#66584F] leading-relaxed font-light mb-10">
                {lawyerConfig.about.fullProfile.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quote Block */}
              <div className="border-l-2 border-[#9C7348] pl-6 py-3 my-4 bg-[#FFFFFF] border border-[#E5DDD0]">
                <p className="font-serif italic text-lg md:text-xl text-[#2A1E17] mb-2">
                  &ldquo;{lawyerConfig.quote.text}&rdquo;
                </p>
                <span className="text-xs uppercase tracking-[0.16em] text-[#9C7348] font-bold">
                  — {lawyerConfig.personal.fullName}
                </span>
              </div>

              <div className="pt-6">
                <Button href="/contact" variant="primary" size="md">
                  SCHEDULE A CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy Section */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="CORE TENETS"
            title="Professional Philosophy"
            subtitle="The fundamental principles guiding every legal strategy, draft, and appearance."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {lawyerConfig.about.philosophies.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-[#F8F5EE] border border-[#E5DDD0] hover:border-[#9C7348] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-serif text-[#9C7348] font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg text-[#2A1E17] mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66584F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Academic Credentials */}
      <section className="py-20 md:py-28 bg-[#F8F5EE] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="ACADEMIC FOUNDATION"
            title="Legal & University Education"
            subtitle="Groundwork in constitutional theory, jurisprudence, and procedural law."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lawyerConfig.education.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 bg-[#FFFFFF] border border-[#E5DDD0] hover:border-[#9C7348] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#9C7348] font-bold">
                      {edu.year}
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#9C7348]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#2A1E17] mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#66584F] mb-3">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-[#66584F] leading-relaxed">
                    {edu.field}
                  </div>
                </div>

                {edu.details && (
                  <div className="mt-4 pt-4 border-t border-[#E5DDD0] text-[11px] text-[#66584F]/80">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bar Enrolment & Compliance Notice */}
      <section className="py-16 bg-[#FFFFFF] border-t border-[#E5DDD0]">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Scale className="w-8 h-8 text-[#9C7348] shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#9C7348] font-bold">
                STATUTORY COMPLIANCE & ETHICAL BAR CODE
              </div>
              <p className="text-xs text-[#66584F] max-w-xl mt-1">
                Practicing under the Advocates Act, 1961. Committed to maintaining statutory lawyer-client privilege, trial decorum, and fairness before the courts.
              </p>
            </div>
          </div>

          <Button href="/contact" variant="primary" size="md">
            REQUEST CONSULTATION
          </Button>
        </div>
      </section>
    </div>
  );
}
