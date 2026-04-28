import type { Metadata } from "next";
import { Outfit, Antonio } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shree Venkateshwara | Premium 3BHK Luxury Residences in Nagpur",
    template: "%s | Shree Venkateshwara Nagpur"
  },
  description: "Nagpur's leading developer specializing in boutique 3BHK luxury residences. Explore premium apartments in Bharat Nagar, Lakshmi Nagar, and West Nagpur with Shree Venkateshwara.",
  keywords: ["Nagpur Real Estate", "Luxury 3BHK Nagpur", "Premium Apartments Nagpur", "Boutique Residences Nagpur", "Real Estate Developers Nagpur", "Shree Venkateshwara", "Luxury Living Nagpur"],
  authors: [{ name: "Shree Venkateshwara" }],
  creator: "Shree Venkateshwara",
  publisher: "Shree Venkateshwara",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shreevenkateshwara.com",
    title: "Shree Venkateshwara | Premium 3BHK Luxury Residences in Nagpur",
    description: "Nagpur's leading developer specializing in boutique 3BHK luxury residences. Architecture-led living since 1999.",
    siteName: "Shree Venkateshwara Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Venkateshwara | Premium 3BHK Luxury Residences in Nagpur",
    description: "Nagpur's leading developer specializing in boutique 3BHK luxury residences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${antonio.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
