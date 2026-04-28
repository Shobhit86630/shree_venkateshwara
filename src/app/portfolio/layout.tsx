import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Residential Projects in Nagpur",
  description:
    "Explore completed and signature residential projects by Shree Venkateshwara across Nagpur micro-markets.",
  path: "/portfolio",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="portfolio-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/portfolio" },
        ])}
      />
      {children}
    </>
  );
}
