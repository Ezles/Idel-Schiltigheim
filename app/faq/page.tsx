import FAQContent from "@/components/faq-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Cabinet Infirmier de Hautepierre",
  description:
    "Questions fréquemment posées au Cabinet Infirmier de Hautepierre à Strasbourg",
};

export default function FAQ() {
  return <FAQContent />;
}
