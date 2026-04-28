"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectSlider from "@/components/ProjectSlider";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

export default function Portfolio() {
  const completedProjects = [
        {
      name: "Shriramm Apartment",
      loc: "Surendranagar, Nagpur",
      images: [
        "/image copy 5.png",
        "/image copy 6.png",
        
      ],
      desc: "Premium boutique housing in the heart of Surendranagar, defined by clean lines and architectural integrity."
    },
    {
      name: "Metroflax Estet",
      loc: "Besa, Nagpur",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
      ],
      desc: "An architectural landmark in Besa, featuring expansive 3BHK residences with high-end finishes and modern structural elegance."
    },
    {
      name: "Tropicana",
      loc: "Hingna, Nagpur",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80"
      ],
      desc: "Resort-style living in Hingna. Tropicana emphasizes open spaces and lush landscape integration for a tranquil urban sanctuary."
    },

  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto">
          <motion.h1 
            {...fadeInUp}
            className="text-6xl md:text-[8rem] font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-12"
          >
            The Living <br /> Portfolio
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-zinc-100 pt-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-sm">
              Explore our legacy of 100+ completed projects since 1999—where architectural honesty meets modern luxury.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-12 bg-zinc-200"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark-grey underline underline-offset-8">Filter by Location</span>
            </div>
          </motion.div>
        </section>

        {/* Projects List */}
        <div className="flex flex-col">
          {completedProjects.map((project, i) => (
            <motion.section 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
              className="px-2 md:px-5 py-24 md:py-40 border-t border-zinc-100 first:border-none"
            >
              <div className="max-w-[1400px] mx-auto overflow-visible">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-4 block">Completed Project 0{i+1}</span>
                    <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-[0.9]">
                      {project.name}
                    </h2>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-2">{project.loc}</div>
                </div>

                <ProjectSlider images={project.images} />

                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-24 mt-12 md:mt-20">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-red">Verified Luxury Residence</p>
                  <p className="max-w-2xl text-base md:text-lg font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Legacy CTA */}
        <motion.section 
          {...fadeInUp}
          className="px-2 md:px-5 py-32 bg-zinc-50 border-t border-zinc-100"
        >
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter leading-none mb-12">
              Join the Legacy.
            </h2>
            <a href="/enquire" className="inline-block px-12 py-6 bg-black text-white text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-brand-red transition-colors duration-500">
              Inquire Now
            </a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
