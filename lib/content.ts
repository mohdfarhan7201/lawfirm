/**
 * Central Content Configuration
 * Authentic lawyer and practice information for Adv. Arman Ashrafi.
 * Assistant Legal Aid Defense Counsel (LADCS), Saran (Chapra), Bihar.
 */

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: 'Scale' | 'FileText' | 'Landmark' | 'Building' | 'Users' | 'Briefcase';
  services: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  badge?: string;
  achievements?: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  details?: string;
}

export interface AchievementItem {
  id: string;
  number?: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  verified?: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Courtroom & Robes" | "Conferences & Seminars" | "Case Milestones & Press" | "Awards & Felicitations";
  image: string;
  aspect: "portrait" | "landscape" | "square";
  description: string;
  badge: string;
  date: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Adv. Arman Ashrafi — Official Chamber Portrait",
    category: "Courtroom & Robes",
    image: "/images/gallery/portrait-studio.jpg",
    aspect: "portrait",
    badge: "Official Portrait",
    description: "Official executive portrait of Adv. Arman Ashrafi, Assistant Legal Aid Defense Counsel (LADCS) & Advocate practicing in Saran (Chapra) and Patna.",
    date: "2026",
  },
  {
    id: "gal-2",
    title: "Advocate in Formal Courtroom Robes & Bands",
    category: "Courtroom & Robes",
    image: "/images/gallery/advocate-robes.jpg",
    aspect: "portrait",
    badge: "Court Attire",
    description: "Adv. Arman Ashrafi robed in ceremonial advocate gown and white bands for High Court and Sessions trials.",
    date: "2026",
  },
  {
    id: "gal-3",
    title: "Landmark Acquittal: Dowry Harassment Defense",
    category: "Case Milestones & Press",
    image: "/images/gallery/news-acquittal-heychapra.jpg",
    aspect: "portrait",
    badge: "Press Coverage",
    description: "Prominent front-page report in 'Hey Chapra' newspaper detailing the complete honorable acquittal (बाइज्जत बरी) secured by Adv. Arman Ashrafi in Trial 4197/26 before SDJM Sumit Kumar Singh.",
    date: "Court Victory",
  },
  {
    id: "gal-4",
    title: "Trial Court Exoneration — 'Shubh Bhaskar' Feature",
    category: "Case Milestones & Press",
    image: "/images/gallery/news-acquittal-shubhbhaskar.jpg",
    aspect: "portrait",
    badge: "Trial Victory",
    description: "Newspaper report detailing how Adv. Arman Ashrafi's cross-examination exposed fabricated claims, leading the Court to completely acquit the client.",
    date: "Case Record",
  },
  {
    id: "gal-5",
    title: "BSLSA Certificate Presentation by Member Secretary",
    category: "Awards & Felicitations",
    image: "/images/gallery/certificate-presentation-1.jpg",
    aspect: "landscape",
    badge: "State Felicitation",
    description: "Receiving the official Certificate of Participation & Excellence from Ms. Shilpee Soniraj, Member Secretary, Bihar State Legal Services Authority (BSLSA), Patna.",
    date: "BSLSA Patna",
  },
  {
    id: "gal-6",
    title: "Felicitation by High Judicial Dignitaries",
    category: "Awards & Felicitations",
    image: "/images/gallery/certificate-presentation-2.jpg",
    aspect: "landscape",
    badge: "Judicial Recognition",
    description: "Honored on stage by senior judicial officers and Registrar at the BSLSA State Conference Hall in Patna.",
    date: "Patna Summit",
  },
  {
    id: "gal-7",
    title: "Capacity Building Certificate — Legal Aid Counsel",
    category: "Awards & Felicitations",
    image: "/images/gallery/bslsa-certificate-holding.jpg",
    aspect: "portrait",
    badge: "Certified Counsel",
    description: "Adv. Arman Ashrafi holding the formal certificate of completion in Trial Advocacy and Defense Counsel training.",
    date: "DLSA / BSLSA",
  },
  {
    id: "gal-8",
    title: "State Legal Aid Dignitary Conclave",
    category: "Awards & Felicitations",
    image: "/images/gallery/felicitation-dignitaries.jpg",
    aspect: "landscape",
    badge: "Commendation",
    description: "Felicitation ceremony recognizing dedicated commitment to legal defense and trial advocacy for indigent citizens.",
    date: "State Event",
  },
  {
    id: "gal-9",
    title: "Addressing the Legal Fraternity at the Podium",
    category: "Conferences & Seminars",
    image: "/images/gallery/seminar-speech.jpg",
    aspect: "portrait",
    badge: "Keynote Address",
    description: "Adv. Arman Ashrafi addressing judicial delegates and advocates on trial defense tactics and criminal justice delivery mechanisms.",
    date: "Legal Symposium",
  },
  {
    id: "gal-10",
    title: "BSLSA State Training-cum-Sensitization Programme",
    category: "Conferences & Seminars",
    image: "/images/gallery/bslsa-program-standee.jpg",
    aspect: "portrait",
    badge: "State Delegation",
    description: "Representing DLSA Saran at the state-level capacity building symposium organized by Bihar State Legal Services Authority.",
    date: "BSLSA Patna",
  },
  {
    id: "gal-11",
    title: "Official State Delegation of Defense Counsels",
    category: "Conferences & Seminars",
    image: "/images/gallery/bslsa-group-delegation.jpg",
    aspect: "landscape",
    badge: "Statewide Assembly",
    description: "Official group delegation photograph of Legal Aid Defense Counsels from across Bihar with judicial dignitaries and BSLSA leadership.",
    date: "BSLSA Patna",
  },
  {
    id: "gal-12",
    title: "Intensive Judicial & Procedural Masterclass",
    category: "Conferences & Seminars",
    image: "/images/gallery/training-portrait.jpg",
    aspect: "portrait",
    badge: "CLE Masterclass",
    description: "Engaging in specialized tactical legal aid defense training and witness examination masterclasses with senior jurists.",
    date: "State Training",
  },
  {
    id: "gal-13",
    title: "Official Delegate — State Legal Aid Forum",
    category: "Courtroom & Robes",
    image: "/images/gallery/event-portrait.jpg",
    aspect: "portrait",
    badge: "Delegate",
    description: "Adv. Arman Ashrafi at the conference summit representing the Saran (Chapra) legal aid defense bar.",
    date: "State Summit",
  },
  {
    id: "gal-14",
    title: "Chamber Strategy & Briefing Session",
    category: "Courtroom & Robes",
    image: "/images/gallery/counsel-session.jpg",
    aspect: "portrait",
    badge: "Case Strategy",
    description: "Adv. Arman Ashrafi reviewing case briefs, procedural documents, and defense strategies.",
    date: "Chambers",
  },
];

export const lawyerConfig = {
  personal: {
    title: "Adv.",
    firstName: "Arman",
    lastName: "Ashrafi",
    fullName: "Adv. Arman Ashrafi",
    designation: "Assistant Legal Aid Defense Counsel (LADCS) & Advocate",
    courts: "District & Sessions Court, Saran at Chapra | High Court Matters",
    barCouncil: "Bar Council of Bihar",
    registrationNumber: "BR/XXXX/XXXX",
    experienceYears: "6+",
    phone: "+91 98765 43210",
    email: "arman.ashrafi@email.com",
    location: "Chapra (Saran), Bihar",
    courtChambers: "Civil Court Complex, Saran at Chapra, Bihar - 841301",
    highCourtBench: "Patna High Court & District Legal Services Authority (DLSA)",
  },

  hero: {
    eyebrow: "JUSTICE | LEGAL AID | CRIMINAL DEFENSE",
    heading: "Adv. Arman Ashrafi",
    subtitle: "Assistant Legal Aid Defense Counsel (LADCS) | Saran & Patna High Court",
    description:
      "Committed to defending constitutional liberties, delivering principled trial advocacy, and ensuring robust legal representation across Sessions, Magistrate, and High Court litigation.",
    primaryCta: {
      label: "EXPLORE PRACTICE AREAS",
      href: "/practice-areas",
    },
    secondaryCta: {
      label: "VIEW PHOTO GALLERY",
      href: "/gallery",
    },
    practicingBeforeBadge: "Assistant Legal Aid Defense Counsel | DLSA Saran & District Court",
  },

  quote: {
    text: "Access to justice is not a privilege; it is a fundamental constitutional guarantee. Every client deserves fearless, principled courtroom defense.",
    author: "Adv. Arman Ashrafi",
    context: "On trial defense ethics, legal aid mandate, and constitutional safeguards",
  },

  about: {
    previewText:
      "I am Adv. Arman Ashrafi, an active litigation advocate and appointed Assistant Legal Aid Defense Counsel (LADCS) under the District Legal Services Authority (DLSA), Saran at Chapra, Bihar. Practicing across the District & Sessions Court and High Court matters, my core focus is delivering fearless criminal trial defense, constitutional advocacy, and dedicated legal aid to ensure equal justice under the law.",
    fullProfile: [
      "I am Adv. Arman Ashrafi, an advocate dedicated to the rule of law and constitutional access to justice, serving as Assistant Legal Aid Defense Counsel (LADCS) with the District Legal Services Authority (DLSA), Saran (Chapra), Bihar.",
      "My litigation practice centers on criminal trial defense, regular & anticipatory bail, cross-examinations, matrimonial disputes, and statutory appeals before the Sessions Courts and Patna High Court.",
      "A cornerstone of my career has been standing up for justice in contentious trials — notably securing the complete, honorable acquittal (बाइज्जत बरी) of Chandan Kumar Singh in Trial Case 4197/26 (under Section 498A IPC) before the Court of SDJM Sumit Kumar Singh, widely documented in regional press.",
      "Having completed specialized Capacity Building & Training-cum-Sensitization with the Bihar State Legal Services Authority (BSLSA) in Patna, I bring strategic research, trial discipline, and unwavering integrity to every case entrusted to my counsel."
    ],
    philosophies: [
      {
        title: "Fearless Defense",
        description: "Upholding the constitutional presumption of innocence with aggressive, evidence-backed advocacy.",
      },
      {
        title: "Institutional Integrity",
        description: "Transparent, honest client counsel grounded in procedural precision and court decorum.",
      },
      {
        title: "Constitutional Equality",
        description: "Championing legal aid for underprivileged and undertrial citizens under DLSA & NALSA mandates.",
      },
      {
        title: "Forensic Precision",
        description: "Detailed scrutiny of FIRs, case diaries, witness depositions, and charge sheets.",
      },
      {
        title: "Result-Driven Advocacy",
        description: "Clear strategic roadmap from remand and bail hearings to final trial acquittal and appeals.",
      },
    ],
  },

  stats: [
    {
      value: 6,
      suffix: "+",
      label: "Years of Court Practice",
      description: "Dedicated trial defense & legal aid litigation",
    },
    {
      value: 250,
      suffix: "+",
      label: "Cases & Hearings Handled",
      description: "Across Sessions, SDJM & High Court matters",
    },
    {
      value: 100,
      suffix: "%",
      label: "Commitment to Justice",
      description: "Diligent representation for every citizen",
    },
  ] as StatItem[],

  practiceAreas: [
    {
      id: "criminal-law",
      number: "01",
      title: "Criminal Law & Trial Defense",
      shortDesc: "Aggressive defense in criminal trials, sessions cases, bail, and cross-examinations.",
      description:
        "Comprehensive courtroom defense across all stages of criminal proceedings — from FIR scrutiny and anticipatory bail to trial cross-examination, final arguments, and statutory appeals before Sessions Courts and the Patna High Court.",
      iconName: "Scale",
      services: [
        "Anticipatory & Regular Bail Hearings",
        "Sessions Trials & Magistrate Court Defense",
        "Section 498A IPC & Matrimonial Offense Defense",
        "Quashing Petitions (Section 482 CrPC / BNSS)",
        "Appeals & Revisions before High Court",
        "NDPS, Arms Act & Special Statute Trials",
      ],
    },
    {
      id: "civil-law",
      number: "02",
      title: "Civil & Property Disputes",
      shortDesc: "Title suits, partition matters, land revenue, contracts and injunctions.",
      description:
        "Strategic dispute resolution and civil litigation handling ancestral land partitions, title declaration, temporary injunctions, and recovery proceedings.",
      iconName: "FileText",
      services: [
        "Title, Partition & Possession Suits",
        "Temporary & Permanent Injunctions",
        "Land Revenue, Mutation & Registry Disputes",
        "Breach of Contract & Specific Performance",
        "Money Recovery & Execution Petitions",
        "Consumer Protection Litigation",
      ],
    },
    {
      id: "constitutional-law",
      number: "03",
      title: "Constitutional & Writ Jurisdiction",
      shortDesc: "Fundamental rights enforcement, police excess redress, and writ petitions.",
      description:
        "Invoking extraordinary writ remedies before the Patna High Court under Article 226 of the Constitution of India for enforcement of fundamental liberties, arbitrary state actions, and custodial protections.",
      iconName: "Landmark",
      services: [
        "Writ of Habeas Corpus & Illegal Detention",
        "Writ of Mandamus for Administrative Inaction",
        "Writ of Certiorari for Quashing Illegal Orders",
        "Protection of Fundamental Freedoms",
        "Public Interest Litigation (PIL)",
      ],
    },
    {
      id: "administrative-law",
      number: "04",
      title: "Legal Aid & Pro Bono Defense",
      shortDesc: "Statutory legal aid under DLSA / BSLSA for underprivileged undertrials.",
      description:
        "Institutional criminal defense counsel services provided under District Legal Services Authority (DLSA) Saran, ensuring that lack of financial resources never impedes equal access to justice.",
      iconName: "Building",
      services: [
        "LADCS Undertrial & Pre-Trial Representation",
        "Bail & Remand Defense for Indigent Accused",
        "Victim Compensation Scheme Assistance",
        "Lok Adalat & Pre-litigation Dispute Redressal",
        "Prison Legal Aid Clinics & Rights Counseling",
      ],
    },
    {
      id: "family-law",
      number: "05",
      title: "Matrimonial & Family Law",
      shortDesc: "Divorce, maintenance claims, child custody, and domestic disputes.",
      description:
        "Balanced and empathetic counsel handling complex matrimonial conflicts, Section 125 CrPC maintenance claims, Domestic Violence Act proceedings, and custody petitions.",
      iconName: "Users",
      services: [
        "Maintenance & Alimony Claims (Sec 125 CrPC)",
        "Domestic Violence (DV Act) Proceedings",
        "Mutual Consent & Contested Divorce",
        "Child Custody & Guardianship Petitions",
        "Pre-litigation Matrimonial Mediation",
      ],
    },
    {
      id: "corporate-law",
      number: "06",
      title: "Commercial & Statutory Advisory",
      shortDesc: "Business agreements, partnership deeds, and statutory compliance.",
      description:
        "Legal advisory for local enterprises, traders, commercial contract drafting, partnership dispute settlements, and regulatory compliance.",
      iconName: "Briefcase",
      services: [
        "Commercial Deeds & Partnership Agreements",
        "Vendor & Employment Contract Drafting",
        "Cheque Bounce Litigation (Section 138 NI Act)",
        "Arbitration & Conciliation Proceedings",
        "Pre-litigation Settlement & Mediation",
      ],
    },
  ] as PracticeArea[],

  experience: [
    {
      id: "exp-1",
      period: "2022 – Present",
      role: "Assistant Legal Aid Defense Counsel (LADCS)",
      organization: "District Legal Services Authority (DLSA), Saran at Chapra, Bihar",
      description:
        "Statutory appointment to provide institutional criminal trial defense for undertrials and marginalized citizens under the NALSA & BSLSA legal defense counsel framework. Handling trial courts, sessions arguments, and remand proceedings.",
      badge: "Statutory Appointment",
      achievements: [
        "Secured complete honorable acquittal (बाइज्जत बरी) in complex Trial Case 4197/26 (Sec 498A IPC)",
        "Conducted extensive cross-examinations and witness scrutinies in Sessions & Magistrate Courts",
        "Representing indigent undertrials across Saran district to protect constitutional fair trial guarantees",
      ],
    },
    {
      id: "exp-2",
      period: "2018 – Present",
      role: "Advocate & Litigation Practitioner",
      organization: "District & Sessions Court, Saran at Chapra & Patna High Court Matters",
      description:
        "Independent practice representing clients in criminal trials, civil title disputes, bail hearings, matrimonial litigation, and writ petitions with strategic preparation and courtroom decorum.",
      badge: "Active Practice",
      achievements: [
        "Argued numerous successful bail applications and stay motions across trial courts",
        "Drafted pleadings, plaints, written statements, and revision petitions",
        "Specialized cross-examination skills exposing inconsistencies in prosecution cases",
      ],
    },
    {
      id: "exp-3",
      period: "2023 – 2024",
      role: "BSLSA Capacity Building & Legal Aid Delegate",
      organization: "Bihar State Legal Services Authority (BSLSA), Patna",
      description:
        "Nominated for the intensive Training-cum-Sensitization Programme for Legal Aid Defense Counsels at Conference Hall, BSLSA Patna. Felicitated with Certificate of Participation by Member Secretary Ms. Shilpee Soniraj and Registrar Ms. Anupama.",
      badge: "State Recognition",
      achievements: [
        "Comprehensive training in criminal trial advocacy, evidence appreciation, and victim compensation",
        "Felicitated by senior judicial leadership and State Legal Services dignitaries",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "LL.B. — Bachelor of Laws",
      field: "Criminal Law, Evidence & Constitutional Jurisprudence",
      institution: "Renowned University / Faculty of Law",
      year: "2018",
      details: "Comprehensive training in Indian Penal Code, Criminal Procedure, Evidence Act, and Civil Procedure.",
    },
    {
      degree: "B.A. — Bachelor of Arts",
      field: "Political Science & Humanities",
      institution: "University of Excellence",
      year: "2015",
      details: "In-depth study of Indian Constitutional Governance, Public Administration, and Legal History.",
    },
  ] as EducationItem[],

  achievements: [
    {
      id: "ach-1",
      number: "Acquittal",
      title: "Complete Honorable Acquittal in Dowry Harassment Trial",
      category: "Landmark Trial Victory",
      description:
        "Secured complete honorable exoneration (बाइज्जत बरी) for Chandan Kumar Singh in Trial Case 4197/26 (Section 498A IPC) before SDJM Sumit Kumar Singh. Highlighted in 'Hey Chapra' and 'Shubh Bhaskar'.",
      verified: true,
    },
    {
      id: "ach-2",
      number: "LADCS",
      title: "Assistant Legal Aid Defense Counsel Appointment",
      category: "Public Service",
      description:
        "Empaneled under District Legal Services Authority (DLSA), Saran at Chapra to provide robust criminal trial defense for undertrials and underprivileged citizens.",
      verified: true,
    },
    {
      id: "ach-3",
      number: "BSLSA",
      title: "State Level Capacity Building Certification",
      category: "Professional Honors",
      description:
        "Awarded Certificate of Participation by Member Secretary Ms. Shilpee Soniraj at the BSLSA State Conference Hall in Patna.",
      verified: true,
    },
    {
      id: "ach-4",
      number: "Enrolled",
      title: "Bar Council of Bihar & Saran District Bar",
      category: "Professional Standing",
      description:
        "Enrolled advocate entitled to practice across Indian courts under the Advocates Act, 1961.",
      verified: true,
    },
  ] as AchievementItem[],

  values: {
    title: "Principled. Fearless. Dedicated to Justice.",
    description:
      "Combining deep trial experience, procedural mastery, and institutional legal aid dedication, I strive to deliver robust legal protection and strategic representation for every citizen.",
    pillars: [
      {
        title: "Forensic Case Scrutiny",
        desc: "Every trial defense is built on meticulous examination of the charge sheet, witness testimonies, and statutory discrepancies.",
      },
      {
        title: "Uncompromising Integrity",
        desc: "Honest, realistic legal counsel with zero deceptive guarantees, adhering to the highest ethical traditions of the Bar.",
      },
      {
        title: "Public Service Commitment",
        desc: "Active defense counsel mandate under DLSA ensuring that economic hardship never deprives a person of a spirited defense.",
      },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Schedule A Legal Consultation",
    subtitle:
      "For criminal defense assessment, bail hearings, civil litigation advisory, or legal aid inquiries, please reach out via phone, email, or visit the chamber at the Civil Court Complex.",
    phone: "+91 98765 43210",
    email: "arman.ashrafi@email.com",
    address: "Civil Court Complex, Saran at Chapra, Bihar - 841301",
    officeHours: "Monday to Saturday: 10:00 AM – 6:30 PM (Prior appointment recommended)",
    notice:
      "Disclaimer: In compliance with the rules of the Bar Council of India, this portfolio does not solicit clients or advertise services. Communication via this website does not automatically establish an advocate-client relationship until formally agreed upon.",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/",
    twitter: "https://twitter.com/",
  },

  siteMetadata: {
    siteName: "Adv. Arman Ashrafi | Assistant Legal Aid Defense Counsel & Advocate",
    title: "Adv. Arman Ashrafi | LADCS Saran | District & High Court Litigation",
    description:
      "Official portfolio of Adv. Arman Ashrafi, Assistant Legal Aid Defense Counsel (LADCS) at DLSA Saran, practicing before District & Sessions Court, Saran at Chapra and Patna High Court.",
    url: "https://adv-armanashrafi.legal",
  },
};
