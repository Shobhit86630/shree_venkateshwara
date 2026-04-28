export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  authorName: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rise-of-wardha-road",
    title: "The Rise of Wardha Road: Nagpur's Most Desired Corridor",
    excerpt:
      "Explore why Wardha Road has become the gold standard for luxury living and connectivity in 2026.",
    description:
      "A location analysis of Wardha Road covering connectivity, buyer demand, and why it continues to attract premium residential attention in Nagpur.",
    publishedAt: "2026-04-24T00:00:00.000Z",
    updatedAt: "2026-04-24T00:00:00.000Z",
    image: "/image copy 4.png",
    imageAlt: "Residential skyline and corridor growth on Wardha Road in Nagpur",
    authorName: "SV Perspectives",
    sections: [
      {
        paragraphs: [
          "Wardha Road has long been the backbone of Nagpur's southern expansion, but in 2026 it has become much more than a connector. It now functions as one of the city's strongest residential demand corridors for families and upwardly mobile buyers.",
        ],
      },
      {
        heading: "The Connectivity Advantage",
        paragraphs: [
          "Its appeal starts with connectivity. Buyers looking for everyday convenience value faster access to the airport, employment nodes, schools, hospitals, and major arterial roads.",
          "That combination reduces commute friction and supports stronger long-term desirability for both end users and investors.",
        ],
      },
      {
        heading: "Why Demand Keeps Compounding",
        paragraphs: [
          "As MIHAN and related business activity mature, demand for better planned housing around connected micro-markets continues to rise. That demand increasingly favors quality construction, practical layouts, and builders with local delivery credibility.",
          "For buyers evaluating the next several years, Wardha Road remains a strong balance of accessibility, family utility, and appreciation potential.",
        ],
      },
    ],
  },
  {
    slug: "boutique-vs-townships",
    title: "Boutique Luxury vs. Massive Townships: Choosing Your Sanctuary",
    excerpt:
      "Why savvy homebuyers are choosing private, high-integrity projects over crowded mega-townships.",
    description:
      "A practical comparison between boutique residential projects and large townships for families evaluating privacy, quality, and everyday livability.",
    publishedAt: "2026-04-20T00:00:00.000Z",
    updatedAt: "2026-04-20T00:00:00.000Z",
    image: "/image copy 2.png",
    imageAlt: "Boutique apartment project versus large township living",
    authorName: "SV Perspectives",
    sections: [
      {
        paragraphs: [
          "For many homebuyers, the question is no longer just how many amenities a project advertises. The better question is whether the project creates a calm, usable, and durable living experience for the family over time.",
        ],
      },
      {
        heading: "Privacy Matters",
        paragraphs: [
          "Massive townships can deliver scale, but that scale often comes with density, noise, and reduced personal space. Boutique housing typically offers a more controlled resident environment and a stronger sense of ownership.",
          "That matters for families who prioritize quieter circulation, smaller resident communities, and more predictable day-to-day maintenance standards.",
        ],
      },
      {
        heading: "Quality Has Fewer Layers",
        paragraphs: [
          "Smaller premium projects also make construction quality easier to inspect and maintain. When the builder focuses on fewer residences, design decisions, finishes, and buyer communication tend to stay tighter.",
          "For end users, that can translate into better livability than a larger project with broader but more diluted promises.",
        ],
      },
    ],
  },
  {
    slug: "mihan-job-engine-investment",
    title: "Nagpur Real Estate 2026: The MIHAN Job Engine",
    excerpt:
      "How the expansion of IT and logistics hubs is driving renewed residential demand in Nagpur.",
    description:
      "An investor and end-user view of how MIHAN-driven employment is influencing residential demand, pricing, and location selection across Nagpur.",
    publishedAt: "2026-04-15T00:00:00.000Z",
    updatedAt: "2026-04-15T00:00:00.000Z",
    image: "/image copy 3.png",
    imageAlt: "Residential investment growth driven by MIHAN employment in Nagpur",
    authorName: "SV Perspectives",
    sections: [
      {
        paragraphs: [
          "MIHAN remains one of the clearest structural demand drivers in the Nagpur property market. Employment concentration changes not only where people work, but where they prefer to live, commute, and invest.",
        ],
      },
      {
        heading: "The Employment Effect",
        paragraphs: [
          "As IT, logistics, and supporting commercial activity deepen around MIHAN, housing demand tends to follow the same path. Families want shorter travel times and investors want corridors with a durable tenant and resale story.",
          "That makes nearby and connected residential locations more resilient than markets driven only by speculative buzz.",
        ],
      },
      {
        heading: "Which Micro-Markets Benefit",
        paragraphs: [
          "Connected areas such as Wardha Road, Besa, and Beltarodi often benefit when buyers want a blend of access, value, and community infrastructure.",
          "For practical investors, the important filter is not hype. It is whether the location has repeat demand from actual occupiers over multiple market cycles.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0
  );
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function renderBlogPostHtml(post: BlogPost) {
  return post.sections
    .map((section) => {
      const heading = section.heading ? `<h2>${escapeHtml(section.heading)}</h2>` : "";
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");

      return `${heading}${paragraphs}`;
    })
    .join("");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
