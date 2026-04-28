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

const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const ongoingImages = [
    "/image.png",
    "/image copy 4.png",
    "/image copy 2.png",
    "/image copy 3.png"
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-2 md:px-5 pb-12 md:pb-24 max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full aspect-[16/9] md:aspect-[16/9] overflow-hidden bg-brand-grey mb-8 md:mb-16"
          >
            <Image 
              src="/ChatGPT Image Apr 22, 2026, 01_41_11 PM.png" 
              alt="Shree Venkateshwara Luxury 3BHK Residential Apartment in Nagpur" 
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-[8rem] font-heading font-bold max-w-4xl leading-[0.9] tracking-tighter uppercase mb-8 md:mb-0"
            >
              Nagpur&apos;s New <br className="hidden md:block" /> Standard of <br className="hidden md:block" /> 3BHK Luxury.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-8 md:gap-12 max-w-sm"
            >
              <p className="text-[13px] font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                Specializing in boutique 3BHK residences, Shree Venkateshwara is a leading name in Nagpur real estate, bringing architectural integrity and modern minimalist design to the heart of Maharashtra.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-6">
                  <div className="h-[1px] w-12 bg-brand-red"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red">100+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-[1px] w-12 bg-zinc-200"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey">Experience Since 1999</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="px-2 md:px-5 py-16 md:py-32 max-w-[1400px] mx-auto border-t border-zinc-100">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-4 block">Currently Building</span>
              <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-[0.9]">
                Ongoing <br /> Excellence
              </h2>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-2 cursor-pointer">View Timeline</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ProjectSlider images={ongoingImages} />
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 transition-all duration-500 mt-12 md:mt-20"
          >
              <div>
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4">
                  K50 Vyankatesh <br className="hidden md:block" /> Apartments
                </h3>
                <p className="text-[10px] uppercase font-bold text-brand-red tracking-widest">
                  Bharat Nagar, Nagpur • Expected Possession: April 2026
                </p>
              </div>
              <div className="max-w-md">
                <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose mb-6">
                  A boutique collection of premium 3BHK residences featuring automatic high-speed lifts, gated security, and 24/7 water supply. Architecturally designed for modern urban living in Bharat Nagar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-zinc-50 px-4 py-2 border border-zinc-100">Gated Entry</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-zinc-50 px-4 py-2 border border-zinc-100">High-Speed Lifts</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-zinc-50 px-4 py-2 border border-zinc-100">Car Parking</span>
                </div>
              </div>
            </motion.div>
        </section>

        {/* The Govindam Series (Upcoming) */}
        <section className="px-3 md:px-5 py-16 md:py-32 border-t border-zinc-100 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 gap-12 md:gap-24"
            >
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-6 md:mb-8 block font-sans">Strategic Expansion</span>
                <h2 className="text-4xl md:text-[6rem] font-heading font-bold tracking-tighter uppercase leading-[1.05] md:leading-[1] mb-10 md:mb-12">
                  The Govindam <br /> Collection.
                </h2>
                <p className="text-[13px] md:text-sm font-medium uppercase tracking-widest md:tracking-[0.2em] text-brand-dark-grey max-w-md leading-relaxed md:leading-loose">
                  Our upcoming signature series represents the evolution of luxury in Nagpur. Each Govindam project is a curated architectural statement, built on the legacy of trust.
                </p>
              </div>
              <div className="relative group self-start lg:self-center">
                <div className="absolute -inset-4 bg-zinc-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-700 -z-10"></div>
                <Image 
                  src="/Govindam.png" 
                  alt="Govindam 72 Logo" 
                  width={400}
                  height={200}
                  style={{ clipPath: 'inset(2% 2% 2% 2%)' }}
                  className="w-48 md:w-96 object-contain mix-blend-multiply opacity-80 md:opacity-100 transition-all md:mb-20 -ml-4 duration-700"
                />
                <div className="mt-4 text-[8px] font-bold uppercase tracking-[0.4em] text-brand-red text-left lg:text-right">Authentic Series Mark</div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border-y border-zinc-100"
            >
              {[
                { name: "Pande Layout", series: "Series I", loc: "West Nagpur", type: "Elite Boutique" },
                { name: "Lakshmi Nagar", series: "Series II", loc: "Prime Residential", type: "Luxury 3BHK" },
                { name: "Govindam III", series: "Series III", loc: "Nagpur", type: "Bespoke Residences" }
              ].map((project, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-white p-8 md:p-16 hover:bg-zinc-50 transition-all duration-500 group flex flex-col min-h-[320px] md:min-h-[450px]"
                >
                  <div className="flex justify-between items-start mb-16 md:mb-20">
                    <span className="text-brand-red text-xs font-bold font-heading tracking-tighter">0{i+1}</span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-black transition-colors">{project.series}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter leading-none mb-4 md:mb-6 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                      Govindam <br /> {project.name}
                    </h3>
                    <div className="space-y-4">
                      <div className="w-8 md:w-12 h-[1px] bg-zinc-100 group-hover:w-full group-hover:bg-brand-red transition-all duration-700"></div>
                      <div className="flex justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        <span>{project.loc}</span>
                        <span className="text-zinc-300 group-hover:text-brand-red transition-colors">{project.type}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="px-2 md:px-5 py-20 md:py-36 border-t border-zinc-100">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <motion.div 
              {...fadeInUp}
              className="flex-1 order-2 md:order-1"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-8 block">Our Legacy</span>
              <h2 className="text-5xl md:text-[7.5rem] font-heading font-bold uppercase tracking-tighter leading-[1] mb-8 md:mb-12">
                100+ <br className="hidden md:block" /> Projects. <br className="hidden md:block" /> Zero <br className="hidden md:block" /> Compromise.
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-dark-grey max-w-md leading-loose">
                Since 1999, Shree Venkateshwara has been synonymous with trust in Nagpur. With over 25 years of experience and 100+ completed projects, we remain committed to 3BHK luxury and architectural excellence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex-1 relative aspect-[4/5] w-full order-1 md:order-2 overflow-hidden mb-8 md:mb-0"
            >
              <Image 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Architectural Detail of Shree Venkateshwara Properties in Nagpur" 
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Estimate Section */}
        <motion.section 
          {...fadeInUp}
          className="px-2 md:px-5 py-16 md:py-24 bg-zinc-50"
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <h2 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-[0.9]">
              Begin Your <br /> Nagpur <br /> Transition.
            </h2>
            <div className="flex flex-col gap-8 md:gap-12">
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey">
                Register your interest for upcoming 3BHK residences or request a private viewing of K-50.
              </p>
              <div className="flex border-b border-black pb-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 bg-transparent py-2 outline-none text-[10px] font-bold tracking-[0.3em] placeholder:text-black/20 w-full"
                />
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-brand-red transition-colors cursor-pointer shrink-0">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
