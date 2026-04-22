export default function Footer() {
  return (
    <footer className="bg-white text-black px-2 md:px-5 py-20 border-t border-zinc-100">
      <div className="max-w-[1400px] mx-auto divide-y divide-zinc-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 pb-20 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 md:col-span-1">
            <div className="mb-6">
              <video 
                src="/logo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="h-10 md:h-18 object-contain"
                poster="/SVV_Logo-removebg-preview (1).png"
              />
            </div>
            <p className="text-[10px] font-bold text-brand-dark-grey tracking-widest leading-loose uppercase max-w-[200px] sm:max-w-none">
              Defining the pinnacle of <br className="hidden sm:block" /> residential real estate.
            </p>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8">Navigation</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="/portfolio" className="hover:text-black transition-colors">Portfolio</a>
              <a href="/concierge" className="hover:text-black transition-colors">Concierge</a>
              <a href="/brand" className="hover:text-black transition-colors">The Brand</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8">Contact</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="mailto:info@shreevenkateshwara.com" className="underline hover:text-brand-red transition-colors">info@shreevenkateshwara.com</a>
              <span>+91 80 1234 5678</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8">Legal</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-dark-grey text-center md:text-left">
            © 2024 Shree Venkateshwara Real Estate • Nagpur
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-brand-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-red transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-red transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
