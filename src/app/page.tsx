import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-8 pb-20 max-w-[1400px] mx-auto">
          <div className="relative w-full aspect-[21/9] overflow-hidden bg-brand-grey">
            <Image 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80" 
              alt="Luxury Apartment" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[1s]"
              priority
            />
          </div>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-16">
            <h1 className="text-6xl md:text-[7rem] font-heading font-bold max-w-4xl leading-[0.9] tracking-tighter uppercase">
              The Standard <br /> of Luxury Living
            </h1>
            <div className="flex flex-col gap-10 max-w-sm mt-4">
              <p className="text-[13px] font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                Experience unparalleled residential excellence with Shree Venkateshwara&apos;s curated collection of modern homes.
              </p>
              <button className="bg-brand-red text-white py-5 px-12 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black transition-all w-fit cursor-pointer">
                Explore Properties
              </button>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="px-8 py-32 max-w-[1400px] mx-auto border-t border-zinc-100">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter uppercase leading-none mb-4">
              Featured Collections
            </h2>
            <div className="w-20 h-1 bg-brand-red"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-grey mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={i === 1 ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" : 
                         i === 2 ? "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" : 
                                   "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&w=800&q=80"}
                    alt="Property" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-heading font-bold uppercase tracking-tighter">
                      {i === 1 && "The Obsidian Estate"}
                      {i === 2 && "Azure Heights"}
                      {i === 3 && "Ivory Sanctuary"}
                    </h3>
                    <span className="text-sm font-bold">$1.2M+</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold text-brand-dark-grey tracking-widest">Premium Residences • 2024</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal About */}
        <section className="px-8 py-40 bg-zinc-50">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-8">Crafting Legacies</span>
            <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-[0.9] max-w-4xl mb-12">
              Architectural <br /> Integrity. Human <br /> Connection.
            </h2>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-dark-grey max-w-2xl leading-loose mb-16">
              Founded on the principles of trust and transparency, Shree Venkateshwara provides a refined real estate experience for discerning buyers seeking modern, minimalist living spaces.
            </p>
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden grayscale brightness-90">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
                alt="Interior" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Estimate Section */}
        <section className="px-8 py-40 border-b border-zinc-100 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-[0.9]">
              Begin Your <br /> Transition To <br /> Modernity.
            </h2>
            <div className="flex flex-col gap-10">
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey">
                Request a boutique consultation for your next property acquisition or divestment.
              </p>
              <div className="flex border-b border-black pb-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 bg-transparent py-2 outline-none text-[10px] font-bold tracking-[0.3em] placeholder:text-black/20"
                />
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-brand-red transition-colors cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
