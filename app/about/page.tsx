import AboutContent from "@/components/about-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Cabinet Infirmier de Hautepierre",
  description: "Découvrez notre équipe d'infirmiers à Hautepierre, Strasbourg",
};

export default function About() {
  return <AboutContent />;
}
