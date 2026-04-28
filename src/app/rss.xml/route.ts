import { getAllBlogPosts, renderBlogPostHtml } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { buildXmlResponse, escapeForXml } from "@/lib/xml";

export async function GET() {
  const items = getAllBlogPosts()
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);

      return `
    <item>
      <title>${escapeForXml(post.title)}</title>
      <link>${escapeForXml(url)}</link>
      <guid isPermaLink="true">${escapeForXml(url)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeForXml(post.description)}</description>
      <content:encoded><![CDATA[${renderBlogPostHtml(post)}]]></content:encoded>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeForXml(siteConfig.siteName)}</title>
    <link>${escapeForXml(siteConfig.url)}</link>
    <description>${escapeForXml(siteConfig.description)}</description>
    <language>${siteConfig.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return buildXmlResponse(xml, {
    "X-Robots-Tag": "noindex, follow",
  });
}
