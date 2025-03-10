import ContactSection from "@/components/contact-section";
import FAQ from "@/components/faq";
import FooterSection from "@/components/footer-section";
import HeroLanding from "@/components/hero-landing";
import Navbar from "@/components/navbar-form";
import Prestations from "@/components/prestation-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabinet Infirmier de Schiltigheim - Soins infirmiers à domicile",
  description:
    "Cabinet infirmier à Schiltigheim proposant des soins à domicile de qualité. Équipe professionnelle disponible 7j/7 pour tous types de soins infirmiers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabinet Infirmier de Schiltigheim - Soins infirmiers à domicile",
    description:
      "Cabinet infirmier à Schiltigheim proposant des soins à domicile de qualité. Équipe professionnelle disponible 7j/7 pour tous types de soins infirmiers.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-32 md:pt-36 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroLanding />
          <Prestations />
          <FAQ />
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
