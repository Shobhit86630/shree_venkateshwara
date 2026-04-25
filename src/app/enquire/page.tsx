import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Enquire() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-1 px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-12">
              Start Your <br /> Enquiry 
            </h1>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose mb-16 max-w-sm">
              Our executive handlers are available for private consultations regarding residential acquisitions in Nagpur&apos;s most sought-after locations.
            </p>
              <div className="flex flex-col gap-10 border-l-2 border-brand-red pl-8 md:pl-10">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">Primary Office</span>
                  <span className="text-sm font-heading font-bold uppercase tracking-widest leading-relaxed">
                    15, 2nd Floor, NKY Tower, <br /> Ajni Square, Wardha Road, <br /> Nagpur - 440015
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">Email</span>
                  <span className="text-sm font-heading font-bold uppercase tracking-widest">venturesshreevenkateshwara@gmail.com</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">Contact</span>
                  <span className="text-sm font-heading font-bold uppercase tracking-widest">+91 9145669964 / +91 9850815881</span>
                </div>
              </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-20">
            <form className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em]">Full Name</label>
                <input type="text" className="bg-transparent outline-none text-xl font-heading font-bold uppercase tracking-tighter" placeholder="YOUR NAME" />
              </div>
              <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em]">Email Address</label>
                <input type="email" className="bg-transparent outline-none text-xl font-heading font-bold uppercase tracking-tighter" placeholder="EMAIL@EXAMPLE.COM" />
              </div>
              <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em]">Project Interests</label>
                <select className="bg-transparent outline-none text-sm font-bold uppercase tracking-widest appearance-none cursor-pointer">
                    <option>K50 VYANKATESH APARTMENTS</option>
                    <option>METROFLAX ESTET</option>
                    <option>TROPICANA</option>
                    <option>SHRIRAMM APARTMENT</option>
                    <option>UPCOMING TRANSITIONS</option>
                </select>
              </div>
              <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em]">Message</label>
                <textarea className="bg-transparent outline-none text-sm font-bold uppercase tracking-widest min-h-[100px] resize-none" placeholder="HOW CAN WE ASSIST?"></textarea>
              </div>
              <button className="bg-black text-white py-6 px-12 text-xs font-bold uppercase tracking-[0.4em] hover:bg-brand-red transition-all cursor-pointer">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
