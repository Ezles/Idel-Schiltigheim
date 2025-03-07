"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PlanDuSiteContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mainPages = [
    {
      name: "Accueil",
      path: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "À propos",
      path: "/about",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "FAQ",
      path: "/faq",
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  const legalPages = [
    {
      name: "Mentions Légales",
      path: "/mentions-legales",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      name: "Politique de Confidentialité",
      path: "/politique-confidentialite",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      name: "Plan du Site",
      path: "/plan-du-site",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    },
  ];

  if (!isMounted) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-12 pt-32">
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Plan du <span className="text-gray-900 dark:text-gray-100 font-medium">Site</span>
            </h1>
            <div className="h-px w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Retrouvez facilement toutes les pages de notre site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Pages Principales
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Chargement du contenu...</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Informations Légales
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>Chargement du contenu...</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12 pt-32">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Plan du <span className="text-gray-900 dark:text-gray-100 font-medium">Site</span>
          </h1>
          <div className="h-px w-20 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Retrouvez facilement toutes les pages de notre site.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Pages Principales
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {mainPages.map((page, index) => (
                  <li
                    key={`main-page-${index}`}
                    className="transition-transform duration-200 hover:translate-x-1"
                  >
                    <Link
                      href={page.path}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={page.icon}
                        />
                      </svg>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Informations Légales
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {legalPages.map((page, index) => (
                  <li
                    key={`legal-page-${index}`}
                    className="transition-transform duration-200 hover:translate-x-1"
                  >
                    <Link
                      href={page.path}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={page.icon}
                        />
                      </svg>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
