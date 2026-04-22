import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main className="flex-1 px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto w-full">
        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase leading-[0.9] mb-12">
          Get In <br /> Touch.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-12">
            <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose max-w-sm">
              For sales, enquiries, or project collaborations regarding our Nagpur portfolio, reach out to our team.
            </p>

            <div className="p-8 md:p-12 bg-zinc-50 border border-zinc-100">
              <h3 className="text-2xl font-heading font-bold uppercase tracking-tight mb-8">Nagpur Office</h3>
              <div className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-zinc-600">
                <div>
                    <span className="block text-brand-red mb-1">Address</span>
                    <p className="text-black">15, 2nd Floor, NKY Tower, <br /> Ajni Square, Wardha Road, <br /> Nagpur - 440015</p>
                </div>
                <div>
                    <span className="block text-brand-red mb-1">Phones</span>
                    <p className="text-black">+91 9145669964 <br /> +91 9850815881</p>
                </div>
                <div>
                    <span className="block text-brand-red mb-1">Email</span>
                    <p className="text-black underline">venturesshreevenkateshwara@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
