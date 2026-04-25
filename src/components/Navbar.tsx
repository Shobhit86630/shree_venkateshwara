"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-2 md:px-5 py-3 max-w-[1400px] mx-auto w-full">
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

      {/* Desktop links */}
      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark-grey">
        <Link href="/portfolio" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Projects</Link>
        <Link href="/brand" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">About</Link>
        <Link href="/concierge" className="relative hover:text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Services</Link>
        <Link href="/enquire" className="relative text-black transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">Contact</Link>
      </div>

      {/* Mobile hamburger */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none"
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
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/portfolio" onClick={() => setOpen(false)} className="font-bold uppercase tracking-widest">Projects</Link>
            <Link href="/brand" onClick={() => setOpen(false)} className="font-bold uppercase tracking-widest">About</Link>
            <Link href="/concierge" onClick={() => setOpen(false)} className="font-bold uppercase tracking-widest">Services</Link>
            <Link href="/enquire" onClick={() => setOpen(false)} className="font-bold uppercase tracking-widest border-t pt-4">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
