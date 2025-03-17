"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function AboutContent() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12 pt-28 md:pt-32">
        <motion.section
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Notre{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Cabinet
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mb-8"></div>

          <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Fondé en 2015, notre cabinet infirmier situé à Schiltigheim
                    est composé d&apos;une équipe de professionnels qualifiés et
                    passionnés par leur métier.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Nous intervenons aussi bien à notre cabinet qu&apos;à
                    domicile pour vous offrir des soins de qualité dans un cadre
                    rassurant et bienveillant.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Notre priorité est votre bien-être et votre santé. Nous
                    mettons tout en œuvre pour vous accompagner dans votre
                    parcours de soins avec professionnalisme et humanité.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 text-gray-400 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Notre{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Équipe
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300 max-w-xs">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-400 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Marina RIVIÈRE
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Titulaire
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300 max-w-xs">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-400 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Evelyne BAPTIS
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Remplaçante
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Nos{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Valeurs
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Professionnalisme
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nous nous engageons à fournir des soins de haute qualité, en
                  respectant les protocoles et en nous tenant informés des
                  dernières avancées médicales.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Bienveillance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Chaque patient est unique. Nous prenons le temps
                  d&apos;écouter, de comprendre et d&apos;adapter notre approche
                  à vos besoins spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Disponibilité
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Notre équipe est disponible du lundi au dimanche, weekends et
                  jours fériés inclus, de 6h à 18h30 pour répondre à vos besoins
                  de soins, avec des interventions à domicile adaptées à votre
                  emploi du temps.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>
      <FooterSection />
    </>
  );
}
