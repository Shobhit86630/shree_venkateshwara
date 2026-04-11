export default function Footer() {
  return (
    <footer className="bg-white text-black px-8 py-20 border-t border-zinc-100">
      <div className="max-w-[1400px] mx-auto divide-y divide-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-heading font-bold tracking-tighter uppercase mb-6">Shree Venkateshwara</div>
            <p className="text-[10px] font-bold text-brand-dark-grey tracking-widest leading-loose uppercase">
              Defining the pinnacle of <br /> residential real estate.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Navigation</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="/portfolio" className="hover:text-black">Portfolio</a>
              <a href="/concierge" className="hover:text-black">Concierge</a>
              <a href="/brand" className="hover:text-black">The Brand</a>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Contact</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="mailto:info@shreevenkateshwara.com" className="underline">info@shreevenkateshwara.com</a>
              <span>+91 80 1234 5678</span>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Legal</h5>
            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-dark-grey">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Use</a>
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-dark-grey">
            © 2024 Shree Venkateshwara Real Estate
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-bold">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
