import LegalSchema from "@/components/legal-schema";
import PolitiqueConfidentialiteContent from "@/components/politique-confidentialite-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cabinet Infirmier de Schiltigheim",
  description:
    "Politique de confidentialité du Cabinet Infirmier de Schiltigheim. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.",
  keywords:
    "politique de confidentialité, protection des données, RGPD, vie privée, données personnelles, cabinet infirmier, Schiltigheim",
  alternates: {
    canonical: "/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de Confidentialité | Cabinet Infirmier de Schiltigheim",
    description:
      "Politique de confidentialité du Cabinet Infirmier de Schiltigheim. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.",
    url: "https://cabinet-mriviere.fr/politique-confidentialite",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <LegalSchema
        type="Politique de confidentialité"
        title="Politique de Confidentialité | Cabinet Infirmier de Schiltigheim"
        url="https://cabinet-mriviere.fr/politique-confidentialite"
      />
      <PolitiqueConfidentialiteContent />
    </>
  );
}
