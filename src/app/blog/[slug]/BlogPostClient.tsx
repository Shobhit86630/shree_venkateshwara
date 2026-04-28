"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
} as const;

export default function BlogPostClient({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-1 py-20 md:py-32">
        <article className="mx-auto max-w-4xl px-4">
          <header className="mb-16">
            <motion.div {...fadeInUp} className="mb-8">
              <Link
                href="/blog"
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 transition-colors hover:text-black"
              >
                Back to Insights
              </Link>
            </motion.div>
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="mb-8 text-4xl font-heading font-bold uppercase leading-tight tracking-tight md:text-7xl"
            >
              {post.title}
            </motion.h1>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 border-y border-zinc-100 py-6"
            >
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Published
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  {formatBlogDate(post.publishedAt)}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-zinc-100"></div>
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  By
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  {post.authorName}
                </span>
              </div>
            </motion.div>
          </header>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative mb-16 aspect-[21/9] overflow-hidden bg-brand-grey"
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="max-w-none space-y-12"
          >
            <p className="text-lg leading-relaxed text-zinc-600">{post.excerpt}</p>
            {post.sections.map((section, index) => (
              <section key={`${post.slug}-${index}`} className="space-y-5">
                {section.heading ? (
                  <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </motion.div>
        </article>

        {relatedPosts.length > 0 ? (
          <section className="mx-auto mt-24 max-w-[1400px] border-t border-zinc-100 px-4 pt-16 md:mt-32 md:pt-20">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tighter md:text-5xl">
                Related Insights
              </h2>
              <Link
                href="/blog"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark-grey transition-colors hover:text-brand-red"
              >
                View All Articles
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block border border-zinc-100 p-6 transition-colors hover:border-black"
                >
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-zinc-100">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                    {formatBlogDate(relatedPost.publishedAt)}
                  </span>
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight transition-colors group-hover:text-brand-red">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
