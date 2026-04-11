import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Brand() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="px-8 py-20 max-w-[1400px] mx-auto">
          <h1 className="text-6xl md:text-[8rem] font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-16">
            The Legacy <br /> of Trust
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-grey grayscale">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Architecture" 
                fill
                className="object-cover"
              />
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

        <section className="px-8 py-32 bg-zinc-50">
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
      </main>
      <Footer />
    </div>
  );
}
