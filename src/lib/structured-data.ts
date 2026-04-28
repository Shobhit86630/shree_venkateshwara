import { absoluteUrl } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ResidentialProjectSchemaInput = {
  name: string;
  path: string;
  description: string;
  image: string;
  availability?: string;
  priceCurrency?: string;
  price?: string;
  addressLocality: string;
  addressRegion?: string;
};

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.siteName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.primaryPhone,
    foundingDate: siteConfig.foundedYear,
    logo: absoluteUrl("/SVV_Logo-removebg-preview (1).png"),
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.primaryPhone,
        email: siteConfig.email,
        availableLanguage: ["English", "Hindi", "Marathi"],
        areaServed: "IN",
      },
    ],
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.siteName,
    url: siteConfig.url,
    telephone: siteConfig.primaryPhone,
    email: siteConfig.email,
    image: absoluteUrl("/ChatGPT Image Apr 22, 2026, 01_41_11 PM.png"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    areaServed: siteConfig.serviceAreas,
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

export function createCollectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/blog")}#collection`,
    url: absoluteUrl("/blog"),
    name: "Nagpur Real Estate Insights",
    description:
      "Market analysis, location guides, and homebuyer articles related to residential real estate in Nagpur.",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
  };
}

export function createFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createResidentialProjectSchema({
  name,
  path,
  description,
  image,
  availability = "https://schema.org/PreOrder",
  priceCurrency = "INR",
  price,
  addressLocality,
  addressRegion = "Maharashtra",
}: ResidentialProjectSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: [absoluteUrl(image)],
    url: absoluteUrl(path),
    brand: {
      "@id": `${siteConfig.url}#organization`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency,
      availability,
      ...(price ? { price } : {}),
      url: absoluteUrl(path),
      seller: {
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality,
          addressRegion,
          addressCountry: "IN",
        },
      },
    },
  };
}
