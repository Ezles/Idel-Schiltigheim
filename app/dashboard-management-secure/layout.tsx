import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espace Administration | Cabinet Infirmier Marina RIVIÈRE",
  description:
    "Espace d'administration sécurisé du Cabinet Infirmier Marina RIVIÈRE. Réservé au personnel autorisé.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
