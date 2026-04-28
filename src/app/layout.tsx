import { Outfit, Antonio } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { rootMetadata, rootViewport } from "@/lib/seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebSiteSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${outfit.variable} ${antonio.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          id="site-organization-schema"
          data={[
            createOrganizationSchema(),
            createLocalBusinessSchema(),
            createWebSiteSchema(),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
