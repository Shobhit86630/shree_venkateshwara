import { absoluteUrl } from "@/lib/seo";
import { buildSitemapIndexXml, buildXmlResponse } from "@/lib/xml";

export async function GET() {
  const xml = buildSitemapIndexXml([
    {
      loc: absoluteUrl("/sitemaps/pages.xml"),
      lastmod: "2026-04-28",
    },
    {
      loc: absoluteUrl("/sitemaps/blog.xml"),
      lastmod: "2026-04-28",
    },
  ]);

  return buildXmlResponse(xml);
}
