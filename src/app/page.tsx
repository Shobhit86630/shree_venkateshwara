import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 md:px-12 pb-16 md:pb-32 max-w-[1400px] mx-auto">
          <div className="relative w-full aspect-[16/9] md:aspect-[16/9] overflow-hidden bg-brand-grey mb-12 md:mb-24">
            <Image 
              src="/ChatGPT Image Apr 22, 2026, 01_41_11 PM.png" 
              alt="Nagpur Luxury 3BHK" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-[1s]"
              priority
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
            <h1 className="text-5xl md:text-[8rem] font-heading font-bold max-w-4xl leading-[0.9] tracking-tighter uppercase mb-8 md:mb-0">
              Nagpur&apos;s New <br className="hidden md:block" /> Standard of <br className="hidden md:block" /> 3BHK Luxury.
            </h1>
            <div className="flex flex-col gap-8 md:gap-12 max-w-sm">
              <p className="text-[13px] font-medium uppercase tracking-widest text-brand-dark-grey leading-relaxed">
                Specializing in boutique 3BHK residences, Shree Venkateshwara brings architectural integrity and modern minimalist design to the heart of Nagpur.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-brand-red"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red">100+ Projects Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="px-4 md:px-12 py-20 md:py-40 max-w-[1400px] mx-auto border-t border-zinc-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-4 block">Currently Building</span>
              <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-[0.9]">
                Ongoing <br /> Excellence
              </h2>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-2 cursor-pointer pb-2">View Timeline</div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden bg-brand-grey mb-8 md:mb-16 grayscale group-hover:grayscale-0 transition-all duration-[1.5s]">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
                alt="K-50 Venkatesh Apartments" 
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              <div>
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-4">
                  K-50 Venkatesh <br className="hidden md:block" /> Apartments
                </h3>
                <p className="text-[10px] uppercase font-bold text-brand-red tracking-widest">Premium 3BHK Residences • Nagpur</p>
              </div>
              <p className="max-w-md text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                Setting a new benchmark for structural elegance and functional minimalism. K-50 is the pinnacle of our current architectural journey.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="px-4 md:px-12 py-20 md:py-40 border-t border-zinc-100">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-4 block">The Future</span>
              <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-[0.9]">
                Upcoming <br /> Transitions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1px md:bg-zinc-100">
              {[
                { name: "Govindam Pande Layout", loc: "West Nagpur" },
                { name: "Govindam II Lakshmi Nagar", loc: "Prime Residential" },
                { name: "Narendar Nagar", loc: "South Nagpur" }
              ].map((project, i) => (
                <div key={i} className="bg-white p-8 md:p-12 hover:bg-zinc-50 transition-colors group md:border-none border border-zinc-100">
                  <div className="text-brand-red text-xs font-bold mb-8 md:mb-12">0{i+1} —</div>
                  <h4 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tighter mb-6 md:mb-8 leading-none group-hover:text-brand-red transition-colors min-h-[2.5em] md:min-h-0">
                    {project.name}
                  </h4>
                  <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
                    {project.loc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="px-4 md:px-12 py-20 md:py-40 border-t border-zinc-100">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <div className="flex-1 order-2 md:order-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-6 md:mb-8 block">Our Legacy</span>
              <h2 className="text-4xl md:text-[6rem] font-heading font-bold uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
                100+ <br className="hidden md:block" /> Projects. <br className="hidden md:block" /> Zero <br className="hidden md:block" /> Compromise.
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-dark-grey max-w-md leading-loose">
                For over a decade, Shree Venkateshwara has been synonymous with trust in Nagpur. Each of our 100+ completed projects is a testament to our commitment to 3BHK luxury and architectural excellence.
              </p>
            </div>
            <div className="flex-1 relative aspect-square w-full order-1 md:order-2 overflow-hidden grayscale mb-8 md:mb-0">
              <Image 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
                alt="Architecture Detail" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Estimate Section */}
        <section className="px-4 md:px-12 py-20 md:py-40 bg-zinc-50">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <h2 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-[0.9]">
              Begin Your <br /> Nagpur <br /> Transition.
            </h2>
            <div className="flex flex-col gap-8 md:gap-12">
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey">
                Register your interest for upcoming 3BHK residences or request a private viewing of K-50.
              </p>
              <div className="flex border-b border-black pb-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 bg-transparent py-2 outline-none text-[10px] font-bold tracking-[0.3em] placeholder:text-black/20 w-full"
                />
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-brand-red transition-colors cursor-pointer shrink-0">
                  Continue
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
