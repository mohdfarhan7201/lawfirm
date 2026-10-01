import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import { lawyerConfig } from "@/lib/content";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adv-arjunsharma.legal"),
  title: {
    default: lawyerConfig.siteMetadata.title,
    template: `%s | ${lawyerConfig.personal.fullName}`,
  },
  description: lawyerConfig.siteMetadata.description,
  keywords: [
    "Advocate Arjun Sharma",
    "Legal Practitioner",
    "High Court Advocate",
    "District Court Gorakhpur",
    "Criminal Defense Lawyer",
    "Civil Litigation",
    "Constitutional Writs",
    "Legal Counsel Uttar Pradesh",
  ],
  authors: [{ name: lawyerConfig.personal.fullName }],
  creator: lawyerConfig.personal.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adv-arjunsharma.legal",
    title: lawyerConfig.siteMetadata.title,
    description: lawyerConfig.siteMetadata.description,
    siteName: lawyerConfig.siteMetadata.siteName,
    images: [
      {
        url: "/images/hero-court.jpg",
        width: 1200,
        height: 630,
        alt: "Adv. Arjun Sharma - Legal Practitioner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: lawyerConfig.siteMetadata.title,
    description: lawyerConfig.siteMetadata.description,
    images: ["/images/hero-court.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F5EE] text-[#2A1E17] font-sans overflow-x-hidden">
        {/* Global Progress Bar */}
        <ScrollProgress />

        {/* Subtle Custom Desktop Cursor */}
        <CustomCursor />

        {/* Sticky Luminous Ivory Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 w-full">{children}</main>

        {/* Clean, Simple & Institutional Legal Footer */}
        <Footer />
      </body>
    </html>
  );
}
