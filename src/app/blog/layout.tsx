import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Nagpur Real Estate Insights",
  description:
    "Read location guides, buyer education, and market commentary focused on residential real estate in Nagpur.",
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="blog-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ])}
      />
      {children}
    </>
  );
}
