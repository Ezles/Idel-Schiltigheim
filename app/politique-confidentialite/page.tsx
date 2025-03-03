import PolitiqueConfidentialiteContent from "@/components/politique-confidentialite-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cabinet Infirmier de Hautepierre",
  description:
    "Politique de confidentialité du Cabinet Infirmier de Hautepierre à Strasbourg",
};

export default function PolitiqueConfidentialite() {
  return <PolitiqueConfidentialiteContent />;
}
