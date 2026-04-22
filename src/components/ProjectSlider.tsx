"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectSliderProps {
  images: string[];
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative group overflow-hidden">
      <div className="relative aspect-video md:aspect-[16/9] overflow-hidden bg-brand-grey mb-8 md:mb-16 transition-all duration-[1.5s]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Project Image ${index + 1}`}
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 md:bottom-24 right-8 md:right-12 flex gap-4 z-10">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute top-8 right-8 md:right-12 text-white font-heading font-bold text-sm tracking-widest z-10">
        {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}
