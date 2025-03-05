import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import AnalyticsTracker from "@/components/analytics-tracker";
import CookieConsent from "@/components/cookie-consent";
import SchemaOrg from "@/components/schema-org";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabinet Infirmier de Schiltigheim - Soins à domicile",
  description:
    "Cabinet infirmier à Schiltigheim proposant des soins à domicile de qualité. Prise de rendez-vous facile, équipe professionnelle et disponible 7j/7.",
  keywords:
    "infirmier, soins à domicile, Schiltigheim, cabinet infirmier, soins infirmiers, prise de sang, pansements, injections",
  authors: [{ name: "Cabinet Infirmier de Schiltigheim" }],
  creator: "Cabinet Infirmier de Schiltigheim",
  publisher: "Cabinet Infirmier de Schiltigheim",
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
    title: "Cabinet Infirmier de Schiltigheim - Soins à domicile",
    description:
      "Cabinet infirmier à Schiltigheim proposant des soins à domicile de qualité. Prise de rendez-vous facile, équipe professionnelle et disponible 7j/7.",
    url: "https://cabinet-mriviere.fr",
    siteName: "Cabinet Infirmier de Schiltigheim",
    images: [
      {
        url: "/images/logo_cabinet_schiltigheim.png",
        width: 800,
        height: 600,
        alt: "Logo Cabinet Infirmier de Schiltigheim",
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
