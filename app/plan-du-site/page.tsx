import LegalSchema from "@/components/legal-schema";
import PlanDuSiteContent from "@/components/plan-du-site-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du Site | Cabinet Infirmier de Schiltigheim",
  description:
    "Consultez le plan du site du Cabinet Infirmier de Schiltigheim pour naviguer facilement et trouver toutes les informations sur nos services de soins infirmiers à domicile.",
  keywords:
    "plan du site, navigation, cabinet infirmier, Schiltigheim, soins infirmiers",
  alternates: {
    canonical: "/plan-du-site",
  },
  openGraph: {
    title: "Plan du Site | Cabinet Infirmier de Schiltigheim",
    description:
      "Consultez le plan du site du Cabinet Infirmier de Schiltigheim pour naviguer facilement et trouver toutes les informations sur nos services de soins infirmiers à domicile.",
    url: "https://cabinet-mriviere.fr/plan-du-site",
  },
};

export default function PlanDuSite() {
  return (
    <>
      <LegalSchema
        type="Plan du site"
        title="Plan du Site | Cabinet Infirmier de Schiltigheim"
        url="https://cabinet-mriviere.fr/plan-du-site"
      />
      <PlanDuSiteContent />
    </>
  );
}
