import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury 3BHK Portfolio | Completed Projects in Nagpur",
  description: "Explore our collection of completed boutique 3BHK residences in Nagpur, including Shriramm Apartment, Metroflax Estet, and Tropicana.",
  keywords: ["Nagpur Luxury Portfolio", "Completed Projects Nagpur", "3BHK Apartments Nagpur", "Real Estate Showcase Nagpur"],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
