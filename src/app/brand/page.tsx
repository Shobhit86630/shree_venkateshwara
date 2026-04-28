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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
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
                  <span className="block text-4xl font-heading font-bold uppercase tracking-tighter mb-2">25+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">Experience (since 1999)</span>
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
          <div className="flex flex-col gap-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-red mb-6 block">Our Leadership</span>
                <h2 className="text-6xl md:text-[8rem] font-heading font-bold tracking-tighter uppercase leading-[0.95]">
                  The <br /> Visionaries
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-dark-grey leading-loose">
                  Driven by structural honesty and architectural integrity, our leadership team ensures that every Shree Venkateshwara project remains a benchmark of luxury in Nagpur.
                </p>
              </div>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 max-w-6xl mx-auto w-full">
              {[
                { 
                  name: "Sandeep Pendke", 
                  role: "Founder & Managing Director", 
                  img: "/Sandeep Pendke.png",
                  bio: "A visionary with over 25 years of experience in structural engineering and real estate development."
                },
                { 
                  name: "Raakesh Singh", 
                  role: "Co-Founder & Director", 
                  img: "/Raakesh Singh.png",
                  bio: "Expert in project management and operations, ensuring the highest standards of construction quality."
                }
              ].map((founder, i) => (
                <div key={i} className="group cursor-default relative overflow-hidden">
                  <div className="relative aspect-[4/5] transition-all duration-700">
                    <Image 
                      src={founder.img} 
                      alt={founder.name} 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                    
                    {/* Overlapping Text Content */}
                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col gap-6 translate-y-12 group-hover:translate-y-0 transition-all duration-700 ease-out">
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white leading-[0.95]">
                          {founder.name.split(' ').map((word, idx) => (
                            <span key={idx} className="block">{word}</span>
                          ))}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red pb-1">0{i+1}</span>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{founder.role}</p>
                        <p className="text-[11px] font-medium uppercase tracking-widest text-white/70 leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          {founder.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
