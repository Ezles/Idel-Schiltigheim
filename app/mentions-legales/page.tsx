import MentionsLegalesContent from "@/components/mentions-legales-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Infirmier de Hautepierre",
  description:
    "Mentions légales du Cabinet Infirmier de Hautepierre à Strasbourg",
};

export default function MentionsLegales() {
  return <MentionsLegalesContent />;
}
