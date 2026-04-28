import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts, formatBlogDate } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { staticSitePages } from "@/lib/site";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "HTML Sitemap",
  description:
    "A crawlable directory of pages, project resources, and insight articles published on the website.",
  path: "/html-sitemap",
});

export default function HtmlSitemapPage() {
  const blogPosts = getAllBlogPosts();
  const sitePages = staticSitePages.filter((page) => page.path !== "/html-sitemap");

  return (
    <div className="flex min-h-screen flex-col bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <JsonLd
        id="html-sitemap-breadcrumb-schema"
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "HTML Sitemap", path: "/html-sitemap" },
        ])}
      />
      <Navbar />
      <main className="flex-1 px-2 py-20 md:px-5 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="mb-8 text-5xl font-heading font-bold uppercase tracking-tighter md:text-8xl">
            HTML Sitemap
          </h1>
          <p className="mb-16 max-w-2xl text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark-grey leading-loose">
            This page is the human-readable crawl map for the website. It supports
            internal discovery, orphan-page prevention, and quick QA against the XML
            sitemap set.
          </p>

          <div className="grid gap-px bg-zinc-100 md:grid-cols-2">
            <section className="bg-white p-8 md:p-12">
              <h2 className="mb-8 text-3xl font-heading font-bold uppercase tracking-tighter">
                Core Pages
              </h2>
              <ul className="space-y-6">
                {sitePages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={page.path}
                      className="block border-b border-zinc-100 pb-6 transition-colors hover:text-brand-red"
                    >
                      <span className="block text-lg font-heading font-bold uppercase tracking-tight">
                        {page.title}
                      </span>
                      <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark-grey leading-loose">
                        {page.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-8 md:p-12">
              <h2 className="mb-8 text-3xl font-heading font-bold uppercase tracking-tighter">
                Insight Articles
              </h2>
              <ul className="space-y-6">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block border-b border-zinc-100 pb-6 transition-colors hover:text-brand-red"
                    >
                      <span className="block text-lg font-heading font-bold uppercase tracking-tight">
                        {post.title}
                      </span>
                      <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark-grey">
                        Published {formatBlogDate(post.publishedAt)}
                      </span>
                      <span className="mt-3 block text-sm font-medium leading-relaxed text-brand-dark-grey">
                        {post.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
