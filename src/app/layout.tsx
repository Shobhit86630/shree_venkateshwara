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
  title: "Shree Venkateshwara | Premium Residential Properties",
  description: "Luxury minimalist residential living by Shree Venkateshwara.",
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
