"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PolitiqueConfidentialiteContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-xl sm:text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Politique de Confidentialité
            </h1>
            <div className="h-px w-20 bg-gray-300 mb-4 sm:mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cette politique de confidentialité décrit comment nous collectons,
              utilisons et protégeons vos informations personnelles.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Cards without animations */}
            {[
              "Collecte des informations",
              "Utilisation des informations",
              "Protection des informations",
              "Cookies",
              "Consentement",
              "Vos droits",
            ].map((title, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden"
              >
                <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                  <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                  <p>Chargement du contenu...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl sm:text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Politique de Confidentialité
          </h1>
          <div className="h-px w-20 bg-gray-300 mb-4 sm:mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Cette politique de confidentialité décrit comment nous collectons,
            utilisons et protégeons vos informations personnelles.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Collecte des informations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Le Cabinet Infirmier de Schiltigheim collecte des informations
                lorsque vous utilisez notre formulaire de contact. Les
                informations recueillies incluent votre nom, adresse e-mail et
                numéro de téléphone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Utilisation des informations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Les informations que nous collectons sont utilisées uniquement
                pour vous contacter en réponse à votre demande. Nous ne
                partageons pas vos informations personnelles avec des tiers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Protection des informations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour
                préserver la sécurité de vos informations personnelles. Nous
                utilisons des protocoles de cryptage pour protéger les
                informations sensibles transmises en ligne.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience.
                Les cookies sont de petits fichiers qu&apos;un site ou son
                prestataire de services transfère sur le disque dur de votre
                ordinateur par l&apos;intermédiaire de votre navigateur Web.
              </p>
              <p className="mt-2">
                Nous utilisons des cookies pour comprendre et enregistrer vos
                préférences pour vos futures visites et compiler des données
                agrégées sur le trafic du site afin d&apos;offrir une meilleure
                expérience du site à l&apos;avenir.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Consentement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                En utilisant notre site, vous consentez à notre politique de
                confidentialité.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Vos droits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants concernant vos données
                personnelles :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification de vos données personnelles</li>
                <li>Droit à l&apos;effacement de vos données personnelles</li>
                <li>
                  Droit à la limitation du traitement de vos données personnelles
                </li>
                <li>
                  Droit à la portabilité de vos données personnelles
                </li>
                <li>
                  Droit d&apos;opposition au traitement de vos données
                  personnelles
                </li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, veuillez nous contacter via notre
                formulaire de contact ou par e-mail à l&apos;adresse indiquée
                dans les mentions légales.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
