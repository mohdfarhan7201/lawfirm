import Link from "next/link";
import LegalEmblem from "@/components/LegalEmblem";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#F8F5EE] text-[#2A1E17]">
      <div className="mb-6">
        <LegalEmblem size={56} color="#9C7348" />
      </div>

      <span className="text-xs uppercase tracking-[0.3em] text-[#9C7348] font-bold mb-3">
        ERROR 404
      </span>

      <h1 className="font-serif text-5xl md:text-7xl font-normal text-[#2A1E17] mb-4">
        Page Not Found
      </h1>

      <p className="text-sm md:text-base text-[#66584F] max-w-md mb-8 leading-relaxed font-light">
        The legal brief, document, or route you are attempting to access does not exist or has been relocated within the registry.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button href="/" variant="primary" size="md">
          RETURN TO HOME
        </Button>
        <Button href="/contact" variant="secondary" size="md">
          CONTACT CHAMBERS
        </Button>
      </div>
    </div>
  );
}
