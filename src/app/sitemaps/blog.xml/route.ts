import { absoluteUrl } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";
import { buildSitemapUrlSetXml, buildXmlResponse } from "@/lib/xml";

export async function GET() {
  const xml = buildSitemapUrlSetXml(
    getAllBlogPosts().map((post) => ({
      loc: absoluteUrl(`/blog/${post.slug}`),
      lastmod: post.updatedAt,
      changefreq: "monthly",
      priority: 0.6,
    }))
  );

  return buildXmlResponse(xml);
}
