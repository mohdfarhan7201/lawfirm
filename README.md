# Adv. Arjun Sharma | Luxury Legal Practitioner Portfolio Website

An editorial, institutional digital presence built for **Adv. Arjun Sharma**, practicing before the **High Court of Judicature & District Courts**.

Inspired by luxury legal editorial design:
- **Palette**: Warm Alabaster Canvas (`#F8F5EE`), Pure White Card Panels (`#FFFFFF`), Hairline Sand Borders (`#E5DDD0`), Deep Roasted Espresso (`#2A1E17`), and Bronze Accents (`#9C7348`).
- **Typography**: Playfair / Serif Headlines & Clean Editorial Sans-Serif.
- **Motif**: Bronze Lady Justice Statue, Scales of Justice, and Ghost Watermark Typography.

---

## 🏛️ Website Architecture & Pages

- **`/` (Home)**:
  - Cinematic Hero with GSAP word-by-word reveal, background zoom, and scales of justice emblem
  - Editorial About Preview with framed advocate portrait and philosophy quote
  - Court Litigation Statistics with GSAP animated counter
  - Practice Areas preview in high-contrast Warm Ivory
  - Professional Values & 3 Institutional Pillars
  - Career Timeline & Verified Standing highlights
  - Chamber Consultation Call to Action
- **`/about`**: Full professional profile, constitutional philosophy, academic foundation (LL.B. & B.A.), and Bar Council compliance.
- **`/practice-areas`**: Detailed breakdown of 6 core litigation fields (Criminal Defense, Civil & Property, Constitutional Writs, Administrative & Service, Family & Matrimonial, Corporate Advisory).
- **`/experience`**: Chronological court experience timeline with interactive ScrollTrigger progression, and breakdown of appearance forums (High Court, District Courts, Revenue Tribunals).
- **`/achievements`**: Verified bar standing, case milestones, legal outreach seminars, and continuing legal education.
- **`/contact`**: Chamber address, consultation hours, interactive form with client-side validation and API endpoint, styled judicial map, and Bar Council statutory disclaimer.
- **`/_not-found`**: Institutional 404 page with return options.
- **`/sitemap.xml`** & **`/robots.txt`**: Automated search engine optimization.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables & Design Tokens
- **Motion**: GSAP 3.12+ (ScrollTrigger, Timeline, Parallax, Word Reveal, Clip-Path)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (`next/font` with Cormorant Garamond & Manrope)
- **Asset Optimization**: `next/image` with AVIF and WebP support

---

## ⚡ Central Content Configuration

All editable lawyer and chamber information is centralized in a single file:
[`lib/content.ts`](file:///c:/Users/Dell/Desktop/Legal%20firm/lib/content.ts)

You can update:
- Lawyer Name, Title, and Designation
- Court Benches and Bar Council details
- Chambers Address, Phone, Email, and Consultation Hours
- Practice Areas and specific services offered
- Case milestones and statistics
- Career timeline entries and education degrees
- Social media handles

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

To verify and generate the production bundle:

```bash
npm run build
npm run start
```

Deployable directly to **Vercel** with zero additional configuration.
