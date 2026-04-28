"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-[100] flex items-center justify-between px-2 md:px-5 py-3 max-w-[1400px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <Link href="/" className="flex items-center gap-4">
          <video 
            src="/logo.mp4" 
            autoPlay 
            muted 
            playsInline 
            className="h-12 md:h-18 object-contain mix-blend-multiply"
            poster="/SVV_Logo-removebg-preview (1).png"
          />
          <span className="sr-only">Home</span>
        </Link>
      </motion.div>

      {/* Desktop links */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], staggerChildren: 0.1 }}
        className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark-grey"
      >
        <Link href="/portfolio" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Projects</Link>
        <Link href="/brand" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">About</Link>
        <Link href="/blog" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Insights</Link>
        <Link href="/concierge" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Services</Link>
        <Link href="/enquire" className="relative text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Contact</Link>
      </motion.div>

      {/* Mobile hamburger */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none z-50"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-2xl z-40 min-h-screen pt-20"
          >
            <div className="flex flex-col gap-8 p-10">
              <Link href="/portfolio" onClick={() => setOpen(false)} className="text-3xl font-heading font-bold uppercase tracking-tighter">Projects</Link>
              <Link href="/brand" onClick={() => setOpen(false)} className="text-3xl font-heading font-bold uppercase tracking-tighter">About</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="text-3xl font-heading font-bold uppercase tracking-tighter">Insights</Link>
              <Link href="/concierge" onClick={() => setOpen(false)} className="text-3xl font-heading font-bold uppercase tracking-tighter">Services</Link>
              <Link href="/enquire" onClick={() => setOpen(false)} className="text-3xl font-heading font-bold uppercase tracking-tighter text-brand-red">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
