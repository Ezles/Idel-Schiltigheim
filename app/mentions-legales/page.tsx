import LegalSchema from "@/components/legal-schema";
import MentionsLegalesContent from "@/components/mentions-legales-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Infirmier de Schiltigheim",
  description:
    "Mentions légales du Cabinet Infirmier de Schiltigheim. Informations juridiques, conditions d'utilisation et responsabilités concernant notre site web et nos services.",
  keywords:
    "mentions légales, informations juridiques, cabinet infirmier, Schiltigheim, conditions d'utilisation",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions Légales | Cabinet Infirmier de Schiltigheim",
    description:
      "Mentions légales du Cabinet Infirmier de Schiltigheim. Informations juridiques, conditions d'utilisation et responsabilités concernant notre site web et nos services.",
    url: "https://cabinet-mriviere.fr/mentions-legales",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegales() {
  return (
    <>
      <LegalSchema
        type="Mentions légales"
        title="Mentions Légales | Cabinet Infirmier de Schiltigheim"
        url="https://cabinet-mriviere.fr/mentions-legales"
      />
      <MentionsLegalesContent />
    </>
  );
}
