import ContactPageContent from "@/components/contact-page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cabinet Infirmier de Hautepierre",
  description:
    "Contactez notre équipe d'infirmiers à Hautepierre, Strasbourg par téléphone ou email pour prendre rendez-vous ou obtenir des informations.",
};

export default function Contact() {
  return <ContactPageContent />;
}
