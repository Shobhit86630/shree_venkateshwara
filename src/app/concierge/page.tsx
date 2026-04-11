import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Concierge() {
  const services = [
    { title: "Bespoke Design", desc: "Collaborate with our lead architects to customize the final finishes of your future sanctuary." },
    { title: "Investment Strategy", desc: "Expert guidance on residential portfolio growth and high-yield property acquisitions." },
    { title: "Lighthouse Support", desc: "Round-the-clock assistance for maintenance, security, and lifestyle management." },
    { title: "Global Access", desc: "Priority viewing of our upcoming international residential partnerships." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="px-8 py-20 max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              Bespoke <br /> Concierge
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-lg">
              SV Concierge is an exclusive service layer designed to provide our homeowners with a seamless transition into luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 overflow-hidden border border-zinc-100">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-20 hover:bg-zinc-50 transition-colors group">
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red mb-6">Service 0{i+1}</span>
                <h3 className="text-4xl font-heading font-bold uppercase tracking-tighter mb-8 group-hover:translate-x-4 transition-transform leading-[0.9]">{s.title}</h3>
                <p className="text-[13px] font-medium uppercase tracking-widest text-brand-dark-grey leading-loose max-w-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-40 border-t border-zinc-100">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <div className="relative w-full h-[600px] bg-brand-grey grayscale overflow-hidden mb-20">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80" 
                alt="Luxury Concierge" 
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center max-w-3xl">
              Elevating the residential experience beyond expectation.
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
