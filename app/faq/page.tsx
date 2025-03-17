import FAQContent from "@/components/faq-content";
import FAQSchema from "@/components/faq-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | Cabinet Infirmier Marina RIVIÈRE",
  description:
    "Réponses aux questions fréquemment posées sur les soins infirmiers à domicile, les prises de rendez-vous, les remboursements et les services proposés par notre cabinet à Schiltigheim. Disponible du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30.",
  keywords:
    "FAQ, questions fréquentes, soins infirmiers, Schiltigheim, remboursement, prise de rendez-vous",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Questions fréquentes | Cabinet Infirmier Marina RIVIÈRE",
    description:
      "Réponses aux questions fréquemment posées sur les soins infirmiers à domicile, les prises de rendez-vous, les remboursements et les services proposés par notre cabinet à Schiltigheim. Disponible du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30.",
    url: "https://cabinet-mriviere.fr/faq",
    type: "website",
  },
};

export default function FAQ() {
  return (
    <>
      <FAQSchema />
      <FAQContent />
    </>
  );
}
