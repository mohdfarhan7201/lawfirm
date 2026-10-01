import { Metadata } from "next";
import GalleryView from "@/components/GalleryView";
import { lawyerConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photo Gallery & Case Press Archive | Adv. Arman Ashrafi",
  description:
    "Authentic photographic archive of Adv. Arman Ashrafi — Assistant Legal Aid Defense Counsel (LADCS) Saran, courtroom appearances, BSLSA Patna capacity building summit, and regional press victories.",
  openGraph: {
    title: "Photo Gallery & Case Press Archive | Adv. Arman Ashrafi",
    description:
      "Photographic record of court litigation, legal aid conferences, and landmark criminal trial acquittals secured by Adv. Arman Ashrafi.",
    images: [
      {
        url: "/images/gallery/portrait-studio.jpg",
        width: 1200,
        height: 800,
        alt: "Adv. Arman Ashrafi - Legal Aid Defense Counsel",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
