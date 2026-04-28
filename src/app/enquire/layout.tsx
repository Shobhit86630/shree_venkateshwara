import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Book an Inquiry or Site Visit",
  description:
    "Submit a qualified inquiry for ready-to-move or under-construction flats in Nagpur and request a site visit.",
  path: "/enquire",
});

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="enquire-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Enquire", path: "/enquire" },
        ])}
      />
      {children}
    </>
  );
}
