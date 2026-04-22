import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto border-b border-zinc-100">
          <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-12">
            Privacy <br /> Policy.
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-sm">
            Last Updated: April 2026
          </p>
        </section>

        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1000px] mx-auto">
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">01 — Data Collection</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                Shree Venkateshwara Real Estate collects information that you provide directly to us when you inquire about our properties, register for updates, or communicate with us. This may include your name, email address, phone number, and preferences regarding our luxury 3BHK residences in Nagpur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">02 — Use of Information</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you about upcoming projects like K-50 and Metroflax Estet, and to provide the personalized concierge experience you expect from our brand.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">03 — Data Security</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. Your privacy is paramount to our integrity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">04 — Contact Us</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                If you have any questions about this Privacy Policy, please contact our concierge team at info@shreevenkateshwara.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
