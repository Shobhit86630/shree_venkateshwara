import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Visionaries & Brand Legacy",
  description: "Learn about the architectural integrity and legacy of Shree Venkateshwara. Nagpur's trusted name in luxury residential development since 1999.",
  keywords: ["Shree Venkateshwara History", "Nagpur Real Estate Developers", "Luxury Architecture Nagpur"],
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
