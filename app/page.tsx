import ContactSection from "@/components/contact-section";
import FAQ from "@/components/faq";
import FooterSection from "@/components/footer-section";
import HeroLanding from "@/components/hero-landing";
import Navbar from "@/components/navbar-form";
import Prestations from "@/components/prestation-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabinet Infirmier Marina RIVIERE - Soins infirmiers à domicile Schiltigheim",
  description:
    "Cabinet infirmier Marina RIVIERE à Schiltigheim, Bischheim et environs proposant des soins infirmiers à domicile 7j/7. Prise de sang, pansements, perfusions, soins des plaies, surveillance diabète et soins palliatifs. Équipe professionnelle disponible de 6h à 18h30 tous les jours.",
  alternates: {
    canonical: "/",
  },
  keywords: "infirmier Schiltigheim, cabinet infirmier Schiltigheim, soins à domicile, prise de sang, pansements, perfusions, injections, Marina Rivière, 67300, cabinet infirmier, bas-rhin, infirmière, soins des plaies, diabète, Bischheim, Hoenheim, Strasbourg Nord",
  openGraph: {
    title: "Cabinet Infirmier Marina RIVIERE - Soins infirmiers à domicile Schiltigheim",
    description:
      "Cabinet infirmier Marina RIVIERE à Schiltigheim, Bischheim et environs proposant des soins infirmiers à domicile 7j/7. Prise de sang, pansements, perfusions, soins des plaies, surveillance diabète et soins palliatifs. Équipe professionnelle disponible de 6h à 18h30 tous les jours.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-12 md:pt-16 flex flex-col items-center w-full">
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
