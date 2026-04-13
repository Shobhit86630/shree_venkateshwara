import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main className="flex-1 px-8 py-20 max-w-[1400px] mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter uppercase leading-none mb-12">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey">
              For sales, enquiries or project collaborations, reach out to our team. We aim to respond within 48 hours.
            </p>

            <div className="p-6 bg-zinc-50 border border-zinc-100">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">Head Office</h3>
              <p className="text-sm">Shree Venkateshwara Ventures</p>
              <p className="text-sm">123 Example Road, City, State</p>
              <p className="text-sm">Phone: +91 98765 43210</p>
              <p className="text-sm">Email: hello@svv.example</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
