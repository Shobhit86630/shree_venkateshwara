import { absoluteUrl } from "@/lib/seo";
import { staticSitePages } from "@/lib/site";
import { buildSitemapUrlSetXml, buildXmlResponse } from "@/lib/xml";

export async function GET() {
  const xml = buildSitemapUrlSetXml(
    staticSitePages.map((page) => ({
      loc: absoluteUrl(page.path),
      lastmod: `${page.lastModified}T00:00:00.000Z`,
      changefreq: page.changeFrequency,
      priority: page.priority,
    }))
  );

  return buildXmlResponse(xml);
}
