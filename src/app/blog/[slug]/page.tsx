import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <>
      <JsonLd
        id="blog-article-schema"
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          createArticleSchema(post),
        ]}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
