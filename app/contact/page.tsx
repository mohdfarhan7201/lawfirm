import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { lawyerConfig } from "@/lib/content";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get In Touch | Chamber Consultation & Legal Inquiries",
  description:
    "Contact Adv. Arman Ashrafi for professional legal consultation, criminal trial defense, bail assessment, and legal aid representation in Saran (Chapra) and Patna.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <PageHero
        title="Get In Touch"
        subtitle="Schedule a consultation or reach out regarding High Court & District Court proceedings."
        breadcrumb="Contact"
        backgroundImage="/images/court-building.jpg"
      />

      {/* Main Contact Section: Details + Form */}
      <section className="py-20 md:py-32 bg-[#F8F5EE] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 flex flex-col">
              <SectionHeading
                eyebrow={lawyerConfig.contact.eyebrow}
                title={lawyerConfig.contact.title}
                subtitle={lawyerConfig.contact.subtitle}
                theme="light"
              />

              <div className="space-y-5 mt-2">
                {/* Chambers Location */}
                <div className="flex items-start gap-4 p-5 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#9C7348]/10 text-[#9C7348] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
                      CHAMBERS ADDRESS
                    </div>
                    <div className="text-sm text-[#2A1E17] font-normal leading-relaxed">
                      {lawyerConfig.contact.address}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 p-5 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#9C7348]/10 text-[#9C7348] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
                      TELEPHONE (OFFICE)
                    </div>
                    <a
                      href={`tel:${lawyerConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="text-sm text-[#2A1E17] font-mono hover:text-[#9C7348] transition-colors"
                    >
                      {lawyerConfig.contact.phone}
                    </a>
                    <div className="text-[10px] text-[#66584F] mt-0.5">
                      Direct chamber line
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 p-5 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#9C7348]/10 text-[#9C7348] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
                      OFFICIAL EMAIL
                    </div>
                    <a
                      href={`mailto:${lawyerConfig.contact.email}`}
                      className="text-sm text-[#2A1E17] hover:text-[#9C7348] transition-colors"
                    >
                      {lawyerConfig.contact.email}
                    </a>
                    <div className="text-[10px] text-[#66584F] mt-0.5">
                      Electronic case communication
                    </div>
                  </div>
                </div>

                {/* Office Consultation Hours */}
                <div className="flex items-start gap-4 p-5 bg-[#FFFFFF] border border-[#E5DDD0] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#9C7348]/10 text-[#9C7348] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C7348] font-bold mb-1">
                      CHAMBERS HOURS
                    </div>
                    <div className="text-sm text-[#2A1E17]">
                      {lawyerConfig.contact.officeHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Accessible Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Styled Location / Map Section */}
      <section className="py-20 bg-[#FFFFFF] text-[#2A1E17] border-b border-[#E5DDD0]">
        <div className="container-custom">
          <SectionHeading
            eyebrow="LOCATION & ACCESS"
            title="Chambers & District Court Vicinity"
            subtitle="Conveniently situated adjacent to the District & Sessions Court complex."
            theme="light"
          />

          <div className="relative w-full h-80 sm:h-96 border border-[#E5DDD0] bg-[#F8F5EE] overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-inner">
            {/* Visual Grid Lines resembling architectural blueprint / map grid */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#9C7348 1px, transparent 1px), radial-gradient(#9C7348 1px, #F8F5EE 1px)",
                backgroundSize: "32px 32px",
                backgroundPosition: "0 0, 16px 16px",
              }}
            />

            <div className="relative z-10 max-w-md bg-[#FFFFFF] p-8 border border-[#E5DDD0] shadow-lg">
              <MapPin className="w-8 h-8 text-[#9C7348] mx-auto mb-3" />
              <div className="font-serif text-2xl text-[#2A1E17] mb-1">
                District Court Complex
              </div>
              <p className="text-xs text-[#66584F] mb-4">
                {lawyerConfig.contact.address}
              </p>
              <div className="text-[11px] text-[#9C7348] uppercase tracking-wider font-bold">
                Direct Chamber Appointments Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Council Compliance Disclaimer Notice */}
      <section className="py-12 bg-[#F8F5EE]">
        <div className="container-custom max-w-4xl">
          <div className="flex items-start gap-3.5 p-6 bg-[#FFFFFF] border border-[#E5DDD0] text-xs text-[#66584F] leading-relaxed shadow-sm">
            <AlertTriangle className="w-5 h-5 text-[#9C7348] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#9C7348] font-bold uppercase tracking-wider block mb-1">
                Statutory Notice (Bar Council of India Rule 36)
              </span>
              <p>{lawyerConfig.contact.notice}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
