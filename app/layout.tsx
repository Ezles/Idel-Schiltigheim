import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import AnalyticsTracker from "@/components/analytics-tracker";
import CookieConsent from "@/components/cookie-consent";
import SchemaOrg from "@/components/schema-org";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabinet Infirmier Marina RIVIÈRE - Soins à domicile Schiltigheim",
  description:
    "Cabinet infirmier Marina RIVIÈRE à Schiltigheim proposant des soins infirmiers à domicile de qualité et prélèvements sanguins. Équipe professionnelle disponible 7j/7, weekends et jours fériés inclus, de 6h à 18h30. Secteur Schiltigheim, Bischheim, Hoenheim et Strasbourg Nord.",
  keywords:
    "infirmier, soins à domicile, Schiltigheim, cabinet infirmier, soins infirmiers, prise de sang, pansements, injections, infirmière Schiltigheim, infirmier Schiltigheim, cabinet infirmier Schiltigheim, soins infirmiers Schiltigheim, soins à domicile Schiltigheim, infirmier 67300, cabinet Marina Rivière, prélèvements sanguins, perfusions, soins des plaies, chimiothérapie à domicile, soin palliatif, diabète, Bischheim, Hoenheim, Strasbourg Nord, bas-rhin, 67",
  authors: [{ name: "Cabinet Infirmier Marina RIVIÈRE" }],
  creator: "Cabinet Infirmier Marina RIVIÈRE",
  publisher: "Cabinet Infirmier Marina RIVIÈRE",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://cabinet-mriviere.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabinet Infirmier Marina RIVIÈRE - Soins à domicile Schiltigheim",
    description:
      "Cabinet infirmier Marina RIVIÈRE à Schiltigheim proposant des soins infirmiers à domicile de qualité et prélèvements sanguins. Équipe professionnelle disponible 7j/7, weekends et jours fériés inclus, de 6h à 18h30. Secteur Schiltigheim, Bischheim, Hoenheim et Strasbourg Nord.",
    url: "https://cabinet-mriviere.fr",
    siteName: "Cabinet Infirmier Marina RIVIÈRE",
    images: [
      {
        url: "/images/logo_cabinet_schiltigheim.png",
        width: 800,
        height: 600,
        alt: "Logo Cabinet Infirmier Marina RIVIÈRE",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <SchemaOrg />
      </head>
      <body className="antialiased bg-[#f5f6fa] dark:bg-inherit">
        <Providers>
          <Toaster />
          {children}
          <CookieConsent />
          <AnalyticsTracker />
        </Providers>
      </body>
    </html>
  );
}
