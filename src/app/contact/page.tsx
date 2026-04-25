import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-1 px-2 md:px-5 py-24 md:py-48 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          <div className="lg:col-span-12 xl:col-span-5">
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-16">
              Connect <br /> with SV.
            </h1>
            
            <div className="space-y-20">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey leading-relaxed max-w-sm">
                Whether you&apos;re looking for a new residence in Nagpur or seeking an architectural partnership, we are ready to assist.
              </p>

              <div className="space-y-12">
                <div className="border-l-2 border-brand-red pl-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red mb-4">The Office</h3>
                  <p className="text-2xl font-heading font-bold uppercase tracking-tight leading-snug">
                    15, 2nd Floor, NKY Tower, <br /> 
                    Ajni Square, Wardha Road, <br /> 
                    Nagpur - 440015
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-8">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">Call</h3>
                    <p className="text-sm font-bold tracking-widest">+91 9145669964</p>
                    <p className="text-sm font-bold tracking-widest">+91 9850815881</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">Write</h3>
                    <a href="mailto:venturesshreevenkateshwara@gmail.com" className="text-sm font-bold tracking-widest underline break-words block">venturesshreevenkateshwara@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="pl-8 pt-12 border-t border-zinc-100 flex gap-8">
                <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-brand-red transition-colors">Instagram</a>
                <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-brand-red transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 xl:block hidden border-r border-zinc-100 h-full min-h-[500px]"></div>

          <div className="lg:col-span-12 xl:col-span-6 lg:pt-0 pt-16">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
