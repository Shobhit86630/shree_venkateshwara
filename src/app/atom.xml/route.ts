import { getAllBlogPosts, renderBlogPostHtml } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { buildXmlResponse, escapeForXml } from "@/lib/xml";

export async function GET() {
  const updated = getAllBlogPosts()[0]?.updatedAt ?? new Date().toISOString();
  const entries = getAllBlogPosts()
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);

      return `
  <entry>
    <title>${escapeForXml(post.title)}</title>
    <id>${escapeForXml(url)}</id>
    <link href="${escapeForXml(url)}" />
    <updated>${post.updatedAt}</updated>
    <published>${post.publishedAt}</published>
    <summary>${escapeForXml(post.description)}</summary>
    <content type="html"><![CDATA[${renderBlogPostHtml(post)}]]></content>
  </entry>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeForXml(siteConfig.siteName)}</title>
  <id>${escapeForXml(siteConfig.url)}</id>
  <link href="${escapeForXml(siteConfig.url)}" />
  <link href="${escapeForXml(absoluteUrl("/atom.xml"))}" rel="self" />
  <updated>${updated}</updated>
  <subtitle>${escapeForXml(siteConfig.description)}</subtitle>${entries}
</feed>`;

  return buildXmlResponse(xml, {
    "X-Robots-Tag": "noindex, follow",
  });
}
