"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Brand() {
  const images = [
    "/image copy 4.png",
    "/image copy 2.png",
    "/image copy 3.png",
    "/image copy 5.png",
    "/image copy 6.png",
    "/image.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="px-2 md:px-5 py-20 max-w-[1400px] mx-auto">
          <h1 className="text-6xl md:text-[8rem] font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-16">
            The Legacy <br /> of Trust
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-grey">
              {images.map((src, idx) => (
                <div 
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image 
                    src={src} 
                    alt={`SV Branded Architecture ${idx + 1}`} 
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-12">
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter leading-none">
                Born From Vision. <br /> Driven By Integrity.
              </h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                Shree Venkateshwara was founded with a singular purpose: to redefine luxury residential living in India. We believe that a home is more than just square footage—it is an architectural statement and a sanctuary for the soul.
              </p>
              <div className="grid grid-cols-2 gap-10 border-t border-zinc-100 pt-10">
                <div>
                  <span className="block text-4xl font-heading font-bold uppercase tracking-tighter mb-2">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">Years of Excellence</span>
                </div>
                <div>
                  <span className="block text-4xl font-heading font-bold uppercase tracking-tighter mb-2">500+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">Families Served</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-2 md:px-5 py-32 bg-zinc-50">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-10 bg-white border border-zinc-100">
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-6">Innovation</h3>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                We push the boundaries of modern architecture, integrating smart technology with timeless minimalist design.
              </p>
            </div>
            <div className="p-10 bg-white border border-zinc-100">
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-6">Transparency</h3>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                Honesty is our foundation. Every project is built on a legacy of clear communication and ethical practices.
              </p>
            </div>
            <div className="p-10 bg-white border border-zinc-100">
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-6">Quality</h3>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                We use the finest materials and partner with world-renowned architects to ensure every SV home is a masterpiece.
              </p>
            </div>
          </div>
        </section>
        <section className="px-2 md:px-5 py-32 max-w-[1400px] mx-auto border-t border-zinc-100">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase leading-none mb-4">
              The Founders
            </h2>
            <div className="w-20 h-1 bg-brand-red"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-grey transition-all duration-700 mb-8">
                <Image 
                  src="/Sandeep Pendke.png" 
                  alt="Sandeep Pendke" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-2">Sandeep Pendke</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">Founder & Managing Director</p>
              <p className="text-[12px] font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed max-w-md">
                A visionary in Nagpur&apos;s architectural landscape, Sandeep Pendke founded Shree Venkateshwara with a commitment to uncompromising quality and structural honesty. With over 15 years of experience, he leads the brand&apos;s mission to redefine 3BHK luxury through modern minimalist design.
              </p>
            </div>
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-grey transition-all duration-700 mb-8">
                <Image 
                  src="/Raakesh Singh.png" 
                  alt="Raakesh Singh" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-2">Raakesh Singh</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">Co-Founder & Director</p>
              <p className="text-[12px] font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed max-w-md">
                Raakesh Singh brings strategic depth and a customer-centric philosophy to the brand. His focus on transparency and architectural integrity ensures that every project, from K-50 to Metroflax Estet, serves as a true sanctuary for the families who call them home.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
