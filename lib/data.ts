export const site = {
  name: "Sam Samson",
  title: "GTM & Revenue Operations",
  location: "San Francisco, CA",
  email: "samjsamson@icloud.com",
  linkedin: "https://www.linkedin.com/in/samjsamson/",
  github: "https://github.com/samjsamson",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#videos", label: "Videos" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "Sam is a Revenue Operations professional based in San Francisco. He specializes in Salesforce automation, outbound prospecting systems, and operational workflows that help revenue teams scale efficiently.",
  "His experience spans sales, RevOps, and business development at Five9, Flare, and MoeGo, where he has built automations, reporting systems, lead routing processes, and AI-powered prospecting tools.",
  "Outside of work, Sam builds software products, creates content, and explores cosmology and symbolic systems.",
] as const;

export const experience = [
  {
    id: "bluebubbler",
    company: "BlueBubbler",
    role: "Founder",
    period: "Jun 2025 — Present",
    bullets: [
      "Built BlueBubbler, a phone number validator that identifies which contacts use iPhone.",
      "Helps sales teams send blue texts to boost reply rates and generate pipeline.",
      "Built with Cursor, GitHub, and Vercel.",
    ],
    link: "https://www.bluebubbler.co/",
  },
  {
    id: "five9",
    company: "Five9",
    role: "Enterprise BDR",
    period: "Jul 2025 — Present",
    bullets: [
      "Engaged VP and Director-level executives to drive pipeline on $300K ACV deals.",
      "Built Salesforce reports and workflow automations improving prospecting efficiency.",
      "Analyzed intent data and engagement signals to prioritize high-value accounts.",
    ],
    link: null,
  },
  {
    id: "flare",
    company: "Flare",
    role: "Revenue Operations",
    period: "2020 — 2023",
    bullets: [
      "Built and scaled lead generation and routing workflows driving 80+ attorney placements per month.",
      "Supported a sales team of 10 AEs.",
      "Designed Salesforce dashboards and Tableau reports tracking pipeline, ROI, and campaign effectiveness.",
      "Scraped, enriched, and maintained 100K+ prospect records.",
    ],
    link: null,
  },
  {
    id: "moego",
    company: "MoeGo",
    role: "Business Development & GTM Operations",
    period: "Sep 2024 — May 2025",
    bullets: [
      "Generated an average of 10 qualified meetings per month through outbound campaigns.",
      "Built outbound prospecting workflows including LinkedIn sourcing, account research, and ICP development.",
      "Maintained CRM data quality and supported pipeline generation through lead enrichment and territory management.",
    ],
    images: [
      {
        src: "/images/moego-mrg-report.jpeg",
        alt: "MoeGo MRG + Upcoming Salesforce report",
      },
      {
        src: "/images/moego-closed-won.jpeg",
        alt: "MoeGo Closed Won Monthly Subscriptions chart",
      },
    ] as const,
  },
] as const;

export const projects = [
  {
    id: "mass-lead-updater",
    title: "Mass Lead Updater + PSO Creation",
    description:
      "Created Mass Lead Updater and leveraged Salesforce Inspector Reloaded to automate lead data entry and mass PSO creation via CSV imports, cutting manual prep time significantly.",
  },
  {
    id: "bdr-ownership",
    title: "BDR Ownership Automation",
    description:
      "Automated BDR ownership updates for 100+ accounts using SOQL queries, saving hours of manual Salesforce work.",
  },
  {
    id: "gpt-ranking",
    title: "GPT Prospect Ranking System",
    description:
      "Built a GPT-based prospect ranking system that analyzes LinkedIn profiles and prioritizes leads by fit.",
  },
  {
    id: "phone-report",
    title: "Phone & Mobile Report Layout",
    description:
      "Created a report layout to speed up BDR dials by displaying PSO contacts with office and mobile phone lines.",
  },
  {
    id: "phone-cleanup",
    title: "Salesforce Phone Number Cleanup",
    description:
      "Removed (+1) from 10k+ Salesforce phone numbers for faster dialing using SQL lookup and data import.",
  },
  {
    id: "territory-reassignment",
    title: "Territory Account Reassignment",
    description:
      "Reassigned 300+ Mid-Atlantic Territory accounts with blank BDR fields, mapping ownership to BDRs using Salesforce Data Import Wizard.",
  },
  {
    id: "hammerspoon",
    title: "Hammerspoon Hotkeys Guide",
    description:
      "Created a hotkeys guide using Hammerspoon to speed up logging dispositions for high-volume BDRs, saving hours per week.",
  },
  {
    id: "bad-number",
    title: "Bad Number CRM Cleanup Proposal",
    description:
      "Identified 500+ wrong-number dials in March and proposed Salesforce automation to remove bad numbers from the CRM to reduce wasted dialing.",
  },
] as const;

export const skills = [
  "Salesforce",
  "SQL",
  "Tableau",
  "HubSpot",
  "Zapier",
  "n8n",
  "Clay",
  "Apollo",
  "Outreach",
  "6sense",
  "SOQL",
  "Cursor",
  "GitHub",
  "Vercel",
  "GTM Operations",
  "RevOps",
  "CRM Automation",
  "Lead Enrichment",
  "Dashboarding",
] as const;

export const education = {
  school: "University of Oregon",
  degree: "B.S. Economics",
} as const;

export const videos = [
  {
    id: "ai-prospecting",
    title: "AI-Powered Prospecting",
    description:
      "Leveraging AI to analyze LinkedIn profiles and identify high-fit prospects that closely match Five9's ideal customer profile, dramatically accelerating prospect research and saving several hours of manual work each week.",
    src: "/videos/ai-prospecting.mp4",
  },
  {
    id: "automated-crm-data-entry",
    title: "Automated CRM Data Entry",
    description:
      "Using custom macro scripts to automate repetitive Salesforce tasks, reducing manual data entry and accelerating CRM workflow execution.",
    src: "/videos/automated-crm-data-entry.mp4",
  },
] as const;
