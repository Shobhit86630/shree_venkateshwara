import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Concierge Services | Luxury Living Nagpur",
  description: "SV Concierge provides exclusive services for homeowners in Nagpur, including bespoke design, investment strategy, and family legacy programs.",
  keywords: ["Luxury Concierge Nagpur", "Real Estate Services Nagpur", "Bespoke Home Design Nagpur"],
};

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
