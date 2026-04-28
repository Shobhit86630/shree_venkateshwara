export const siteConfig = {
  name: "Shree Venkateshwara",
  siteName: "Shree Venkateshwara Real Estate",
  legalName: "Shree Venkateshwara Ventures",
  description:
    "Premium residential builder in Nagpur focused on boutique 2 BHK and 3 BHK homes, family-first layouts, and high-trust project delivery.",
  defaultTitle:
    "Premium 2 BHK and 3 BHK Flats in Nagpur | Shree Venkateshwara",
  titleTemplate: "%s | Shree Venkateshwara Nagpur",
  locale: "en_IN",
  language: "en-IN",
  country: "IN",
  themeColor: "#111111",
  foundedYear: "1999",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://shreevenkateshwara.com",
  email: "venturesshreevenkateshwara@gmail.com",
  primaryPhone: "+91 9145669964",
  secondaryPhone: "+91 9850815881",
  address: {
    streetAddress: "15, 2nd Floor, NKY Tower, Ajni Square, Wardha Road",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440015",
    addressCountry: "IN",
  },
  serviceAreas: ["Wardha Road", "Manish Nagar", "MIHAN", "Besa", "Beltarodi"],
} as const;

export type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  lastModified: string;
};

export const staticSitePages: SitePage[] = [
  {
    path: "/",
    title: "Home",
    description:
      "Premium 2 BHK and 3 BHK residential flats in Nagpur with ongoing, upcoming, and completed projects.",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: "2026-04-28",
  },
  {
    path: "/brand",
    title: "About",
    description:
      "Learn about the builder legacy, leadership, and design principles behind Shree Venkateshwara.",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-04-28",
  },
  {
    path: "/portfolio",
    title: "Projects",
    description:
      "Browse completed residential projects and signature developments in Nagpur.",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-04-28",
  },
  {
    path: "/concierge",
    title: "Services",
    description:
      "Explore buyer support, design, and residential concierge services for Nagpur homebuyers.",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: "2026-04-28",
  },
  {
    path: "/blog",
    title: "Insights",
    description:
      "Nagpur real-estate insights, location analysis, and homebuyer guidance.",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-04-28",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Get in touch with the builder team for project details, calls, and office visits.",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: "2026-04-28",
  },
  {
    path: "/enquire",
    title: "Enquire",
    description:
      "Submit a qualified inquiry or request a site visit for Nagpur residential projects.",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-04-28",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "Review the website privacy policy and data handling terms.",
    changeFrequency: "yearly",
    priority: 0.2,
    lastModified: "2026-04-28",
  },
  {
    path: "/terms",
    title: "Terms and Conditions",
    description: "Review the website terms and property information disclaimers.",
    changeFrequency: "yearly",
    priority: 0.2,
    lastModified: "2026-04-28",
  },
  {
    path: "/html-sitemap",
    title: "HTML Sitemap",
    description: "Browse a crawlable index of pages and articles on the website.",
    changeFrequency: "monthly",
    priority: 0.3,
    lastModified: "2026-04-28",
  },
];

export const homeFaqs = [
  {
    question: "Which locations in Nagpur do you currently focus on?",
    answer:
      "Our current focus includes Wardha Road, Manish Nagar, MIHAN, Besa, and Beltarodi, with project activity shaped around connectivity, family livability, and long-term demand.",
  },
  {
    question: "Do you offer both ready-to-move and under-construction flats?",
    answer:
      "Yes. We support homebuyers looking for ready-to-move options as well as under-construction residences, depending on project inventory and launch schedules.",
  },
  {
    question: "What flat configurations are prioritized by Shree Venkateshwara?",
    answer:
      "The builder primarily focuses on 2 BHK and 3 BHK residential flats designed for first-time homebuyers, families, and select investor demand.",
  },
  {
    question: "How can a buyer schedule a site visit or make an inquiry?",
    answer:
      "Buyers can contact the sales team directly, submit an inquiry form, or request a site visit from the contact and enquiry pages on the website.",
  },
] as const;
