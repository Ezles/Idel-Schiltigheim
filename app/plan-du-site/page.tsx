import PlanDuSiteContent from "@/components/plan-du-site-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du Site | Cabinet Infirmier de Hautepierre",
  description: "Plan du site du Cabinet Infirmier de Hautepierre à Strasbourg",
};

export default function PlanDuSite() {
  return <PlanDuSiteContent />;
}
