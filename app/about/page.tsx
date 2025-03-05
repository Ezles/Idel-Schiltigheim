import AboutContent from "@/components/about-content";
import AboutSchema from "@/components/about-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Cabinet Infirmier de Schiltigheim",
  description:
    "Découvrez notre équipe d'infirmiers qualifiés à Schiltigheim. Notre cabinet propose des soins à domicile personnalisés avec une approche humaine et professionnelle.",
  keywords:
    "infirmiers Schiltigheim, équipe médicale, soins infirmiers, cabinet infirmier, professionnels de santé, Schiltigheim",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À Propos | Cabinet Infirmier de Schiltigheim",
    description:
      "Découvrez notre équipe d'infirmiers qualifiés à Schiltigheim. Notre cabinet propose des soins à domicile personnalisés avec une approche humaine et professionnelle.",
    url: "https://cabinet-mriviere.fr/about",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <AboutSchema />
      <AboutContent />
    </>
  );
}
