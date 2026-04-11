import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const properties = [
    { title: "The Obsidian Estate", price: "$1.2M", loc: "Mumbai", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
    { title: "Azure Heights", price: "$2.4M", loc: "Pune", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
    { title: "Ivory Sanctuary", price: "$3.5M", loc: "Goa", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
    { title: "The Onyx Villa", price: "$1.8M", loc: "Bengaluru", img: "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f" },
    { title: "Marble Manor", price: "$4.1M", loc: "Hyderabad", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { title: "Zenith Residencies", price: "$5.0M", loc: "Chennai", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1 px-8 py-20 max-w-[1400px] mx-auto w-full">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-8">
            Curated <br /> Portfolio
          </h1>
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-sm">
            Discover our collection of ultra-luxury residential properties across India&apos;s most sought-after locations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {properties.map((prop, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-grey mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={`${prop.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="border-l-2 border-zinc-100 pl-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter leading-none">{prop.title}</h3>
                  <span className="text-lg font-heading font-bold">{prop.price}</span>
                </div>
                <p className="text-[10px] uppercase font-bold text-brand-dark-grey tracking-widest">{prop.loc} • Residential</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
