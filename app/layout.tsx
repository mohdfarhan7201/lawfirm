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
  metadataBase: new URL("https://adv-armanashrafi.legal"),
  title: {
    default: lawyerConfig.siteMetadata.title,
    template: `%s | ${lawyerConfig.personal.fullName}`,
  },
  description: lawyerConfig.siteMetadata.description,
  keywords: [
    "Advocate Arman Ashrafi",
    "Assistant Legal Aid Defense Counsel",
    "LADCS DLSA Saran",
    "District Court Chapra",
    "Patna High Court Advocate",
    "Criminal Trial Defense",
    "Section 498A Dowry Defense",
    "Civil Litigation Bihar",
    "BSLSA Patna Legal Aid",
  ],
  authors: [{ name: lawyerConfig.personal.fullName }],
  creator: lawyerConfig.personal.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adv-armanashrafi.legal",
    title: lawyerConfig.siteMetadata.title,
    description: lawyerConfig.siteMetadata.description,
    siteName: lawyerConfig.siteMetadata.siteName,
    images: [
      {
        url: "/images/gallery/portrait-studio.jpg",
        width: 1200,
        height: 800,
        alt: "Adv. Arman Ashrafi - Assistant Legal Aid Defense Counsel",
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
