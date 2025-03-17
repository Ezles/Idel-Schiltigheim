import ContactPageContent from "@/components/contact-page-content";
import ContactSchema from "@/components/contact-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cabinet Infirmier Marina RIVIÈRE",
  description:
    "Contactez notre équipe d'infirmiers à Schiltigheim par téléphone au 07 66 72 07 66 ou via notre formulaire en ligne. Prise de rendez-vous rapide pour tous types de soins infirmiers. Disponible du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30.",
  keywords:
    "contact infirmier, rendez-vous infirmier, téléphone infirmier, Schiltigheim, soins à domicile, prise de rendez-vous",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Cabinet Infirmier Marina RIVIÈRE",
    description:
      "Contactez notre équipe d'infirmiers à Schiltigheim par téléphone au 07 66 72 07 66 ou via notre formulaire en ligne. Prise de rendez-vous rapide pour tous types de soins infirmiers. Disponible du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30.",
    url: "https://cabinet-mriviere.fr/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <ContactSchema />
      <ContactPageContent />
    </>
  );
}
