import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: siteConfig.themeColor,
    categories: ["real-estate", "business", "lifestyle"],
    lang: siteConfig.language,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/SVV_Logo-removebg-preview (1).png",
        sizes: "644x387",
        type: "image/png",
      },
    ],
  };
}
