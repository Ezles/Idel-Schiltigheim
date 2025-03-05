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
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Politique de Confidentialité
            </h1>
            <div className="h-px w-20 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cette politique de confidentialité décrit comment nous collectons,
              utilisons et protégeons vos informations personnelles.
            </p>
          </div>

          <div className="space-y-6">
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
      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Politique de Confidentialité
          </h1>
          <div className="h-px w-20 bg-gray-300 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Cette politique de confidentialité décrit comment nous collectons,
            utilisons et protégeons vos informations personnelles.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Protection des informations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  Nous mettons en œuvre des mesures de sécurité pour préserver
                  la sécurité de vos informations personnelles. Les données
                  personnelles sont conservées dans des systèmes sécurisés et ne
                  sont accessibles qu&apos;aux personnes autorisées.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p className="mb-3">
                  Notre site utilise des cookies pour améliorer votre expérience
                  de navigation. Les cookies sont de petits fichiers stockés sur
                  votre appareil qui nous aident à fournir une meilleure
                  expérience utilisateur. Nous utilisons différents types de
                  cookies :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>
                    <strong>Cookies nécessaires</strong> : Ces cookies sont
                    essentiels au fonctionnement du site et ne peuvent pas être
                    désactivés. Ils permettent d&apos;assurer la sécurité et les
                    fonctionnalités de base du site.
                  </li>
                  <li>
                    <strong>Cookies analytiques</strong> : Ces cookies nous
                    permettent de mesurer le trafic et d&apos;analyser votre
                    comportement pour améliorer notre site. Ils nous aident à
                    comprendre comment les visiteurs interagissent avec notre
                    site.
                  </li>
                  <li>
                    <strong>Cookies marketing</strong> : Ces cookies sont
                    utilisés pour suivre les visiteurs sur les sites web afin
                    d&apos;afficher des publicités pertinentes et
                    personnalisées.
                  </li>
                  <li>
                    <strong>Cookies de préférences</strong> : Ces cookies
                    permettent au site de se souvenir de vos préférences et
                    options, comme la langue ou la région.
                  </li>
                </ul>
                <p className="mb-3">
                  Lors de votre première visite sur notre site, une bannière de
                  consentement aux cookies vous permet de choisir les types de
                  cookies que vous acceptez. Vous pouvez à tout moment modifier
                  vos préférences en matière de cookies en cliquant sur le
                  bouton &quot;Gérer les cookies&quot; en bas de page.
                </p>
                <p className="mb-3">
                  Vos préférences de cookies sont stockées à la fois localement
                  sur votre appareil et dans notre base de données sécurisée.
                  Nous utilisons Supabase, un service de base de données
                  sécurisé, pour stocker vos préférences et, si vous avez
                  accepté les cookies analytiques, des données anonymisées sur
                  votre utilisation du site. Ces données nous aident à améliorer
                  notre site et nos services.
                </p>
                <p className="mb-3">
                  Les données analytiques collectées peuvent inclure :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>Les pages que vous visitez</li>
                  <li>Le temps passé sur chaque page</li>
                  <li>Les liens sur lesquels vous cliquez</li>
                  <li>
                    Votre type d&apos;appareil et la taille de votre écran
                  </li>
                  <li>Votre provenance (référent)</li>
                </ul>
                <p>
                  Vous pouvez également configurer votre navigateur pour refuser
                  tous les cookies ou être alerté lorsque des cookies sont
                  envoyés. Cependant, certaines parties du site peuvent ne pas
                  fonctionner correctement si vous désactivez les cookies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Consentement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  En utilisant notre site, vous consentez à notre politique de
                  confidentialité. Si nous apportons des modifications à cette
                  politique, nous les publierons sur cette page.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Vos droits
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  Conformément à la réglementation en vigueur, vous disposez
                  d&apos;un droit d&apos;accès, de rectification, de suppression
                  et de portabilité de vos données personnelles, ainsi que
                  d&apos;un droit d&apos;opposition et de limitation du
                  traitement. Pour exercer ces droits, veuillez nous contacter
                  par téléphone ou par email.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Conservation et suppression des données
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p className="mb-3">
                  Nous conservons vos données personnelles et analytiques pour
                  une durée limitée :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>
                    <strong>Données de contact</strong> : Les informations
                    soumises via notre formulaire de contact sont conservées
                    pendant 1 an après votre dernière interaction avec nous.
                  </li>
                  <li>
                    <strong>Préférences de cookies</strong> : Vos préférences
                    sont conservées pendant 6 mois, après quoi vous serez invité
                    à renouveler votre consentement.
                  </li>
                  <li>
                    <strong>Données analytiques</strong> : Les données
                    d&apos;utilisation anonymisées sont conservées pendant 12
                    mois pour nous permettre d&apos;analyser les tendances à
                    long terme.
                  </li>
                </ul>
                <p className="mb-3">
                  Vous pouvez à tout moment demander la suppression de vos
                  données en nous contactant. Lorsque vous demandez la
                  suppression de vos données, nous les supprimons de nos
                  systèmes actifs dans un délai de 30 jours. Cependant,
                  certaines informations peuvent être conservées dans nos
                  sauvegardes pendant une période plus longue, mais elles seront
                  isolées et ne seront pas utilisées.
                </p>
                <p>
                  Pour réinitialiser vos préférences de cookies, vous pouvez
                  également utiliser le bouton &quot;Gérer les cookies&quot;
                  présent en bas de chaque page du site.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
