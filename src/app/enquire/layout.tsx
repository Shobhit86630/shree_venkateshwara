import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquire Now | Contact Shree Venkateshwara Nagpur",
  description: "Register your interest for upcoming 3BHK luxury residences in Nagpur or request a private viewing. Start your enquiry with Shree Venkateshwara.",
  keywords: ["Contact Real Estate Nagpur", "Enquiry Luxury 3BHK", "Property Consultation Nagpur"],
};

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
