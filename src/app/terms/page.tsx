import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1400px] mx-auto border-b border-zinc-100">
          <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-12">
            Terms & <br /> Conditions.
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark-grey max-w-sm">
            Last Updated: April 2026
          </p>
        </section>

        <section className="px-2 md:px-5 py-20 md:py-32 max-w-[1000px] mx-auto">
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">01 — Acceptance of Terms</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                By accessing or using the Shree Venkateshwara website, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">02 — Intellectual Property</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                The content on this website, including but not limited to text, graphics, logos, images, and property renders, is the property of Shree Venkateshwara Real Estate and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">03 — Property Information</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                While we strive to provide accurate information regarding our properties (such as K-50 or Tropicana), please note that renders, area calculations, and project timelines are subject to change and should be verified with our sales team.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight mb-6">04 — Limitation of Liability</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-dark-grey leading-loose">
                Shree Venkateshwara shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or for any information obtained through our concierge services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
