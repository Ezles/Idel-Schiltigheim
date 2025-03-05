import FAQContent from "@/components/faq-content";
import FAQSchema from "@/components/faq-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | Cabinet Infirmier de Schiltigheim",
  description:
    "Réponses aux questions fréquemment posées sur les soins infirmiers à domicile, les prises de rendez-vous, les remboursements et les services proposés par notre cabinet à Schiltigheim.",
  keywords:
    "FAQ, questions fréquentes, soins infirmiers, Schiltigheim, remboursement, prise de rendez-vous",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Questions fréquentes | Cabinet Infirmier de Schiltigheim",
    description:
      "Réponses aux questions fréquemment posées sur les soins infirmiers à domicile, les prises de rendez-vous, les remboursements et les services proposés par notre cabinet à Schiltigheim.",
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
