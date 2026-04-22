import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Concierge() {
  const services = [
    { title: "Bespoke Design", desc: "Collaborate with our lead architects to customize the final finishes of your future sanctuary." },
    { title: "Investment Strategy", desc: "Expert guidance on residential portfolio growth and high-yield property acquisitions in Nagpur." },
    { title: "Lighthouse Support", desc: "Round-the-clock assistance for maintenance, security, and lifestyle management." },
    { title: "Family Legacy", desc: "Priority access and loyalty programs for families who have grown with the SV brand over the years." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-1">
        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-12">
              Bespoke <br /> Concierge
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-lg leading-relaxed">
              SV Concierge is an exclusive service layer designed to provide our homeowners with a seamless transition into luxury. From Nagpur to the global standard, we manage every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 overflow-hidden border border-zinc-100">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-12 md:p-20 hover:bg-zinc-50 transition-colors group">
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red mb-6 uppercase">Service 0{i+1}</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tighter mb-8 group-hover:translate-x-4 transition-transform leading-[0.9]">{s.title}</h3>
                <p className="text-[13px] font-medium uppercase tracking-widest text-brand-dark-grey leading-loose max-w-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-2 md:px-5 py-24 md:py-40 border-t border-zinc-100">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <div className="relative w-full aspect-[16/9] md:h-[600px] bg-brand-grey overflow-hidden mb-16 md:mb-20">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80" 
                alt="Luxury Concierge" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-center max-w-3xl leading-[0.9]">
              Elevating the residential experience beyond expectation.
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
