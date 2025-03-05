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
      <HeroLanding />
      <Prestations />
      <FAQ />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
