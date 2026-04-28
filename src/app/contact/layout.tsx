import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Contact the Builder",
  description:
    "Contact Shree Venkateshwara for project details, office visits, and qualified residential inquiries in Nagpur.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="contact-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
