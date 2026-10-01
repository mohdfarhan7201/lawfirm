"use client";

import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { registerGSAP, prefersReducedMotion } from "@/lib/animations";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (prefersReducedMotion()) return;

    if (formCardRef.current) {
      gsap.fromTo(
        formCardRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formCardRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select or enter the legal subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Brief description of the matter is required.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters of detail.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to transmit message. Please try calling directly.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={formCardRef} className="bg-[#FFFFFF] border border-[#E5DDD0] p-8 sm:p-10 shadow-sm relative text-[#2A1E17]">
      <h3 className="font-serif text-2xl md:text-3xl text-[#2A1E17] font-bold mb-2">
        Schedule A Consultation
      </h3>
      <p className="text-xs text-[#66584F] mb-8 leading-relaxed">
        Take the first step toward resolving your legal matter with confidence. Submissions are handled under strict advocate-client confidentiality.
      </p>

      {submitted ? (
        <div className="p-8 bg-[#F8F5EE] border border-[#E5DDD0] text-center flex flex-col items-center">
          <CheckCircle2 className="w-12 h-12 text-[#9C7348] mb-4" />
          <h4 className="font-serif text-2xl text-[#2A1E17] mb-2 font-bold">
            Appointment Request Received
          </h4>
          <p className="text-xs text-[#66584F] leading-relaxed max-w-md mb-6">
            Thank you for reaching out. Adv. Arjun Sharma’s chambers will review your procedural inquiry and contact you shortly regarding consultation availability.
          </p>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            SEND ANOTHER MESSAGE
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#2A1E17] font-semibold mb-2"
            >
              First & Last Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g. Rahul Verma"
              className="w-full bg-[#F8F5EE] border border-[#E5DDD0] text-sm text-[#2A1E17] px-4 py-3 placeholder:text-[#8A7B70] focus:border-[#2A1E17] focus:outline-none transition-colors"
            />
            {errors.name && (
              <p className="text-red-500 text-[11px] mt-1.5">{errors.name}</p>
            )}
          </div>

          {/* Two-Column: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#2A1E17] font-semibold mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@domain.com"
                className="w-full bg-[#F8F5EE] border border-[#E5DDD0] text-sm text-[#2A1E17] px-4 py-3 placeholder:text-[#8A7B70] focus:border-[#2A1E17] focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1.5">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#2A1E17] font-semibold mb-2"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full bg-[#F8F5EE] border border-[#E5DDD0] text-sm text-[#2A1E17] px-4 py-3 placeholder:text-[#8A7B70] focus:border-[#2A1E17] focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-red-500 text-[11px] mt-1.5">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Matter / Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#2A1E17] font-semibold mb-2"
            >
              Select Legal Service / Matter *
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full bg-[#F8F5EE] border border-[#E5DDD0] text-sm text-[#2A1E17] px-4 py-3 focus:border-[#2A1E17] focus:outline-none transition-colors"
            >
              <option value="">Select Category of Legal Matter</option>
              <option value="Criminal Defense / Bail">Criminal Defense / Bail</option>
              <option value="Civil & Property Dispute">Civil & Property Dispute</option>
              <option value="Constitutional Writ Petition">Constitutional Writ Petition</option>
              <option value="Administrative & Service Matter">Administrative & Service Matter</option>
              <option value="Family / Matrimonial Litigation">Family / Matrimonial Litigation</option>
              <option value="Corporate / Commercial Advisory">Corporate / Commercial Advisory</option>
              <option value="Other Consultation">Other Consultation</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-[11px] mt-1.5">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#2A1E17] font-semibold mb-2"
            >
              Brief Description of Matter *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Please summarize the court involved, procedural stage, and nature of relief sought..."
              className="w-full bg-[#F8F5EE] border border-[#E5DDD0] text-sm text-[#2A1E17] px-4 py-3 placeholder:text-[#8A7B70] focus:border-[#2A1E17] focus:outline-none transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-[11px] mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#2A1E17] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#443227] transition-all duration-300 shadow-md group disabled:opacity-50"
            >
              <span>{loading ? "TRANSMITTING INQUIRY..." : "Confirm Your Appointment"}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
