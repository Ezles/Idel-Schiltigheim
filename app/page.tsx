import ContactSection from "@/components/contact-section";
import FAQ from "@/components/faq";
import FooterSection from "@/components/footer-section";
import HeroLanding from "@/components/hero-landing";
import Navbar from "@/components/navbar-form";
import Prestations from "@/components/prestation-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroLanding />
      <Prestations />
      <FAQ />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
