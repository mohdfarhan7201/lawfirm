/**
 * Central Content Configuration
 * All editable lawyer and firm information is managed here.
 * Anyone can modify details without altering UI components.
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

export const lawyerConfig = {
  personal: {
    title: "Adv.",
    firstName: "Arjun",
    lastName: "Sharma",
    fullName: "Adv. Arjun Sharma",
    designation: "Legal Practitioner",
    courts: "High Court & District Court",
    barCouncil: "Bar Council of Uttar Pradesh",
    registrationNumber: "UP/XXXX/XXXX", // Sample placeholder registration
    experienceYears: "5+",
    phone: "+91 98765 43210", // Sample placeholder
    email: "arjun.sharma@email.com", // Sample placeholder
    location: "Gorakhpur, Uttar Pradesh",
    courtChambers: "Chamber No. 42, Lawyers' Enclave, District Court Complex, Gorakhpur, UP",
    highCourtBench: "High Court of Judicature at Allahabad (Lucknow & Prayagraj Benches)",
  },

  hero: {
    eyebrow: "JUSTICE | LAW | PUBLIC SERVICE",
    heading: "Adv. Arjun Sharma",
    subtitle: "Legal Practitioner | High Court & District Court",
    description:
      "Committed to upholding justice, protecting constitutional rights, and providing honest, strategic, and result-oriented legal counsel.",
    primaryCta: {
      label: "VIEW PRACTICE AREAS",
      href: "/practice-areas",
    },
    secondaryCta: {
      label: "CONTACT ME",
      href: "/contact",
    },
    practicingBeforeBadge: "Practicing Before High Court & District Courts",
  },

  quote: {
    text: "Law is not just a profession, it is a service to society.",
    author: "Adv. Arjun Sharma",
    context: "On the duty of legal advocacy and constitutional ethics",
  },

  about: {
    previewText:
      "I am Adv. Arjun Sharma, a dedicated legal professional with a strong commitment to justice, fairness, and the rule of law. Practicing at the High Court and District Courts, I offer strategic legal counsel and ethical representation across complex civil, criminal, and constitutional matters.",
    fullProfile: [
      "I am Adv. Arjun Sharma, a dedicated legal practitioner committed to providing thoughtful legal representation and practical legal solutions.",
      "With a litigation practice centered before the High Court of Judicature and District Courts, my work encompasses constitutional writs, civil disputes, criminal trials, and appellate advocacy. I prioritize legal precision, strategic foresight, and meticulous procedural adherence in every matter entrusted to me.",
      "Rooted in institutional integrity and constitutional tenets, my objective is to ensure that clients receive transparent guidance, steadfast advocacy, and genuine access to justice."
    ],
    philosophies: [
      {
        title: "Justice",
        description: "Upholding constitutional values and the rule of law with unwavering fidelity.",
      },
      {
        title: "Integrity",
        description: "Ethical, honest, and transparent counsel free of unfounded promises.",
      },
      {
        title: "Confidentiality",
        description: "Absolute discretion and statutory attorney-client privilege maintained at all times.",
      },
      {
        title: "Professionalism",
        description: "Rigorous case preparation, procedural precision, and court decorum.",
      },
      {
        title: "Client-Centered Advocacy",
        description: "Direct communication, personalized strategy, and clear articulation of legal options.",
      },
    ],
  },

  stats: [
    {
      value: 5,
      suffix: "+",
      label: "Years of Experience",
      description: "Dedicated court litigation & advisory",
    },
    {
      value: 100,
      suffix: "+",
      label: "Cases Handled",
      description: "Across High Court & District Courts",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Based on transparent and diligent representation",
    },
  ] as StatItem[],

  practiceAreas: [
    {
      id: "criminal-law",
      number: "01",
      title: "Criminal Law",
      shortDesc: "Defense and representation in criminal matters, bail, trial and appeals.",
      description:
        "Comprehensive representation across criminal proceedings from preliminary investigations and bail hearings to trial defense and statutory appeals before the High Court and Sessions Courts.",
      iconName: "Scale",
      services: [
        "Anticipatory & Regular Bail Applications",
        "Criminal Trials & Sessions Defense",
        "Appeals & Revisions before High Court",
        "Quashing Petitions (Section 482 CrPC / BNSS)",
        "White Collar & Financial Offenses",
        "FIR Consultation & Pre-trial Advisory",
      ],
    },
    {
      id: "civil-law",
      number: "02",
      title: "Civil Law",
      shortDesc: "Property disputes, contracts, family matters, consumer cases and more.",
      description:
        "Strategic dispute resolution and litigation handling contentious property conflicts, contractual breach remedies, injunctions, and recovery proceedings.",
      iconName: "FileText",
      services: [
        "Title, Partition & Possession Suits",
        "Breach of Contract & Specific Performance",
        "Temporary & Permanent Injunctions",
        "Money Recovery & Execution Petitions",
        "Consumer Protection Litigation",
        "Land Revenue & Mutation Matters",
      ],
    },
    {
      id: "constitutional-law",
      number: "03",
      title: "Constitutional Law",
      shortDesc: "Fundamental rights, public interest litigation and constitutional matters.",
      description:
        "Invoking extraordinary writ jurisdictions under Articles 226 and 32 of the Constitution of India for enforcement of fundamental freedoms and administrative redress.",
      iconName: "Landmark",
      services: [
        "Writ Petitions (Mandamus, Certiorari, Habeas Corpus)",
        "Fundamental Rights Enforcement",
        "Public Interest Litigation (PIL)",
        "Challenge to Arbitrary Executive Actions",
        "Judicial Review of Administrative Orders",
      ],
    },
    {
      id: "administrative-law",
      number: "04",
      title: "Administrative Law",
      shortDesc: "Service matters, government litigation and regulatory compliance.",
      description:
        "Advocacy before Administrative Tribunals and the High Court concerning public employment disputes, disciplinary inquiries, pensions, and statutory compliance.",
      iconName: "Building",
      services: [
        "Service & Public Employment Disputes",
        "Departmental Disciplinary Proceedings",
        "Pensions, Seniority & Promotion Disputes",
        "Statutory Authority & Regulatory Review",
        "Government Tender & Procurement Disputes",
      ],
    },
    {
      id: "family-law",
      number: "05",
      title: "Family Law",
      shortDesc: "Marriage, divorce, maintenance, child custody and family disputes.",
      description:
        "Sensitive, balanced legal counsel dealing with matrimonial matters, mutual and contested divorce proceedings, custody arrangements, and domestic settlement agreements.",
      iconName: "Users",
      services: [
        "Mutual Consent & Contested Divorce",
        "Maintenance & Alimony Claims (Section 125)",
        "Child Custody & Guardianship Petitions",
        "Domestic Violence Act Proceedings",
        "Family Settlement & Inheritance Agreements",
      ],
    },
    {
      id: "corporate-law",
      number: "06",
      title: "Corporate Law",
      shortDesc: "Business contracts, agreements, legal advisory and corporate matters.",
      description:
        "General legal advisory for enterprises, commercial contract drafting, commercial dispute settlement, and regulatory compliance guidance.",
      iconName: "Briefcase",
      services: [
        "Commercial Contracts & Master Service Agreements",
        "Partnership Deeds & Corporate Governance",
        "Vendor & Employment Agreement Structuring",
        "Legal Due Diligence & Statutory Audits",
        "Negotiation & Pre-litigation Mediation",
      ],
    },
  ] as PracticeArea[],

  experience: [
    {
      id: "exp-1",
      period: "2020 – Present",
      role: "Legal Practitioner",
      organization: "High Court of Judicature & District Courts",
      description:
        "Independent practice representing individual and corporate clients in civil, criminal, and constitutional matters with an unyielding focus on legal equity and fair outcomes.",
      badge: "Current Practice",
      achievements: [
        "Argued multiple writ petitions and statutory appeals before the High Court",
        "Secured critical relief in complex property injunctions and bail petitions",
        "Drafted pleadings for civil trials and constitutional challenges",
      ],
    },
    {
      id: "exp-2",
      period: "2017 – 2020",
      role: "Junior Advocate",
      organization: "Chambers of Senior Advocates, District Court, Gorakhpur",
      description:
        "Assisted leading senior advocates in extensive case preparation, statutory research, witness examination planning, and regular court proceedings.",
      badge: "Apprenticeship",
      achievements: [
        "Managed daily cause lists and prepared case briefs for over 250 trial matters",
        "Conducted thorough precedents research using SCC, AIR, and Manupatra",
        "Assisted during high-stakes sessions arguments and civil interrogatories",
      ],
    },
    {
      id: "exp-3",
      period: "2016 – 2017",
      role: "Legal Intern",
      organization: "District & Sessions Court",
      description:
        "Gained direct, practical exposure to court filing procedures, registry protocols, legal drafting, and client briefing sessions.",
      badge: "Foundational",
      achievements: [
        "Acquired foundational mastery over procedural laws (CPC, CrPC, Evidence Act)",
        "Drafted notices, affidavits, vakalatnamas, and simple plaints",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "LL.B. — Bachelor of Laws",
      field: "Constitutional & Procedural Law",
      institution: "Faculty of Law, Renowned State University",
      year: "2016",
      details: "First Class with Distinction; active participant in Moot Court Society.",
    },
    {
      degree: "B.A. — Bachelor of Arts",
      field: "Political Science & Public Administration",
      institution: "Faculty of Arts, University of Excellence",
      year: "2013",
      details: "Graduated with honors; specialized in Indian Constitutional Framework.",
    },
  ] as EducationItem[],

  achievements: [
    {
      id: "ach-1",
      number: "100+",
      title: "Successfully Handled Matters",
      category: "Court Litigation",
      description:
        "Represented clients across diverse trial and appellate litigation with rigorous preparation and principled advocacy.",
      verified: true,
    },
    {
      id: "ach-2",
      number: "Member",
      title: "Bar Council of Uttar Pradesh",
      category: "Professional Standing",
      description:
        "Duly enrolled advocate entitled to practice across Indian courts under the Advocates Act, 1961.",
      verified: true,
    },
    {
      id: "ach-3",
      number: "Conducted",
      title: "Legal Workshops & Seminars",
      category: "Public Outreach & Continuing Legal Education",
      description:
        "Regular participant and guest speaker at bar association seminars on trial procedures, constitutional remedies, and citizen rights.",
      verified: true,
    },
    {
      id: "ach-4",
      number: "Empaneled",
      title: "Legal Aid & Pro Bono Counseling",
      category: "Public Service",
      description:
        "Dedicated allocation of monthly hours providing pro bono legal guidance to underprivileged litigants.",
      verified: true,
    },
  ] as AchievementItem[],

  values: {
    title: "Dedicated. Experienced. Result-Oriented.",
    description:
      "With a strong legal foundation and practical courtroom experience, I strive to deliver professional representation and thoughtful legal solutions with integrity, professionalism, and a deep understanding of the law.",
    pillars: [
      {
        title: "Rigorous Legal Research",
        desc: "Every argument is grounded in binding statutory provisions and up-to-date judicial precedents.",
      },
      {
        title: "Uncompromising Ethics",
        desc: "Clear legal advice without false guarantees or misleading assurances, adhering to the highest standards of the Bar.",
      },
      {
        title: "Strategic Advocacy",
        desc: "Tailoring procedural tactics and substantive claims to the unique dynamics of each court and bench.",
      },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's Discuss Your Legal Matter",
    subtitle:
      "For legal consultation, case assessment, or procedural inquiries, please reach out via phone, email, or by scheduling an in-person chamber consultation.",
    phone: "+91 98765 43210",
    email: "arjun.sharma@email.com",
    address: "Chamber No. 42, Lawyers' Enclave, District Court Complex, Gorakhpur, Uttar Pradesh - 273001",
    officeHours: "Monday to Saturday: 10:00 AM – 7:00 PM (Prior appointment recommended)",
    notice:
      "Disclaimer: In compliance with the rules of the Bar Council of India, this portfolio does not solicit clients or advertise services. Communication via this form does not automatically establish an advocate-client relationship until formally agreed upon.",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/",
    twitter: "https://twitter.com/",
    // Only links with actual URLs will be shown
  },

  siteMetadata: {
    siteName: "Adv. Arjun Sharma | Legal Practitioner",
    title: "Adv. Arjun Sharma | Legal Practitioner | High Court & District Court",
    description:
      "Professional portfolio of Adv. Arjun Sharma, legal practitioner providing thoughtful legal consultation and strategic representation across civil, criminal, and constitutional matters.",
    url: "https://adv-arjunsharma.legal",
  },
};
