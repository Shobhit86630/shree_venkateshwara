import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Homebuyer Services and Concierge",
  description:
    "Explore design support, buyer guidance, and premium residential concierge services for Nagpur homebuyers.",
  path: "/concierge",
});

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="concierge-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/concierge" },
        ])}
      />
      {children}
    </>
  );
}
