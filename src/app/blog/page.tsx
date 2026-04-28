"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts, formatBlogDate } from "@/lib/blog";
import { createCollectionPageSchema } from "@/lib/structured-data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
} as const;

export default function BlogListing() {
  const blogs = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <JsonLd id="blog-collection-schema" data={createCollectionPageSchema()} />
      <Navbar />
      <main className="flex-1 px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto w-full">
        <header className="mb-20">
          <motion.h1 
            {...fadeInUp}
            className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Insights & <br /> Perspectives
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey max-w-sm"
          >
            Expert analysis on the Nagpur real estate market, architectural trends, and luxury living.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              {...fadeInUp}
              transition={{ delay: 0.1 * idx }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-grey mb-6">
                  <Image 
                    src={blog.image} 
                    alt={blog.imageAlt} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-3 block">
                  {formatBlogDate(blog.publishedAt)}
                </span>
                <h2 className="text-2xl font-heading font-bold uppercase tracking-tight leading-tight group-hover:text-brand-red transition-colors mb-4">
                  {blog.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                  {blog.description}
                </p>
                <div className="mt-6 flex items-center gap-2 group-hover:gap-4 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Read Article</span>
                  <div className="w-8 h-[1px] bg-black"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
