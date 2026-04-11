import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-10 max-w-[1400px] mx-auto w-full">
      <Link href="/" className="text-2xl font-heading font-bold tracking-tighter uppercase leading-none border-l-2 border-brand-red pl-4">
        Shree <br /> Venkateshwara
      </Link>
      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark-grey">
        <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
        <Link href="/brand" className="hover:text-black transition-colors">The Brand</Link>
        <Link href="/concierge" className="hover:text-black transition-colors">Concierge</Link>
        <Link href="/enquire" className="hover:text-black transition-colors border-b border-black pb-1">Enquire</Link>
      </div>
    </nav>
  );
}
