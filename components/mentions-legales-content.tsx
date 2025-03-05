"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MentionsLegalesContent() {
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
              Mentions Légales
            </h1>
            <div className="h-px w-20 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Informations légales concernant le Cabinet Infirmier de
              Schiltigheim et l&apos;utilisation de ce site web.
            </p>
          </div>

          <div className="space-y-6">
            {/* Cards without animations */}
            {[
              "Éditeur du site",
              "Hébergement",
              "Propriété intellectuelle",
              "Responsabilité",
              "Protection des données personnelles",
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
            Mentions Légales
          </h1>
          <div className="h-px w-20 bg-gray-300 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Informations légales concernant le Cabinet Infirmier de Schiltigheim
            et l&apos;utilisation de ce site web.
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
                  Éditeur du site
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  <strong>Cabinet Infirmier de Schiltigheim</strong>
                  <br />
                  130 route de Bischwiller
                  <br />
                  67300 Schiltigheim
                  <br />
                  Téléphone : 07 66 72 07 66
                  <br />
                  SIRET : 514 183 185 00040
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
                  Hébergement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  Ce site est hébergé par Vercel Inc.
                  <br />
                  440 N Barranca Ave #4133
                  <br />
                  Covina, CA 91723
                  <br />
                  États-Unis
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
                  Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                  etc.) est protégé par les lois relatives à la propriété
                  intellectuelle. Toute reproduction ou représentation, totale
                  ou partielle, de ce site ou de son contenu, par quelque
                  procédé que ce soit, sans autorisation expresse, est interdite
                  et constituerait une contrefaçon.
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
                  Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  Le Cabinet Infirmier de Schiltigheim s&apos;efforce
                  d&apos;assurer l&apos;exactitude et la mise à jour des
                  informations diffusées sur ce site. Toutefois, il ne peut
                  garantir l&apos;exactitude, la précision ou
                  l&apos;exhaustivité des informations mises à disposition sur
                  ce site. En conséquence, le Cabinet Infirmier de Schiltigheim
                  décline toute responsabilité pour les éventuelles
                  imprécisions, inexactitudes ou omissions portant sur des
                  informations disponibles sur ce site.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                  Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6
                  janvier 1978 modifiée, vous disposez d&apos;un droit
                  d&apos;accès, de modification, de rectification et de
                  suppression des données vous concernant. Pour exercer ce
                  droit, veuillez nous contacter par téléphone ou par email.
                  Pour plus d&apos;informations sur la façon dont nous traitons
                  vos données, veuillez consulter notre politique de
                  confidentialité.
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
