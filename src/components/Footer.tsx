"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
} as const;

export default function Footer() {
  return (
    <footer className="bg-white text-black px-2 md:px-5 py-20 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto divide-y divide-zinc-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 pb-20">
          {/* Brand Section - Full width on mobile */}
          <motion.div 
            {...fadeInUp}
            className="col-span-2 md:col-span-1"
          >
            <div className="mb-8">
              <video 
                src="/logo.mp4" 
                autoPlay 
                muted 
                playsInline 
                className="h-16 md:h-28 object-contain mix-blend-multiply"
                poster="/SVV_Logo-removebg-preview (1).png"
              />
            </div>
            <p className="text-[10px] font-bold text-brand-dark-grey tracking-widest leading-loose uppercase max-w-[240px] md:max-w-none">
              Defining the pinnacle of <br className="hidden md:block" /> residential real estate.
            </p>
          </motion.div>
          
          {/* Navigation - 1 column on mobile */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="col-span-1"
          >
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-zinc-400">Navigation</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <Link href="/portfolio" className="hover:text-black transition-colors">Projects</Link>
              <Link href="/concierge" className="hover:text-black transition-colors">Services</Link>
              <Link href="/brand" className="hover:text-black transition-colors">About</Link>
              <Link href="/blog" className="hover:text-black transition-colors">Insights</Link>
            </div>
          </motion.div>
          
          {/* Contact - 1 column on mobile */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="col-span-1"
          >
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-zinc-400">Contact</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey leading-relaxed">
              <div>
                <span className="block text-[8px] text-zinc-400 mb-1">Email</span>
                <a href="mailto:venturesshreevenkateshwara@gmail.com" className="underline hover:text-brand-red transition-colors block break-words">venturesshreevenkateshwara@gmail.com</a>
              </div>
              <div>
                <span className="block text-[8px] text-zinc-400 mb-1">Contact</span>
                <span>+91 9145669964 <br /> +91 9850815881</span>
              </div>
              <div>
                <span className="block text-[8px] text-zinc-400 mb-1">Office</span>
                <p>15, 2nd Floor, NKY Tower, Ajni Square, Wardha Road, Nagpur - 440015</p>
              </div>
            </div>
          </motion.div>
          
          {/* Legal - Full width or auto span */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="col-span-2 md:col-span-1"
          >
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-zinc-400">Legal</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-black transition-colors">Terms of Use</Link>
              <Link href="/html-sitemap" className="hover:text-black transition-colors">HTML Sitemap</Link>
              <a href="/rss.xml" className="hover:text-black transition-colors">RSS Feed</a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-dark-grey leading-relaxed">
            © 2024 Shree Venkateshwara <br className="md:hidden" /> Real Estate • Nagpur
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[9px] uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-brand-red transition-colors">Instagram</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
