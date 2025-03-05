"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AboutContent() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Notre{" "}
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Cabinet
            </span>
          </h1>
          <div className="w-20 h-1 bg-gray-400 mb-8"></div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-gray-200 dark:border-gray-800">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      Fondé en 2015, notre cabinet infirmier situé à
                      Schiltigheim est composé d&apos;une équipe de
                      professionnels qualifiés et passionnés par leur métier.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      Nous intervenons aussi bien à notre cabinet qu&apos;à
                      domicile pour vous offrir des soins de qualité dans un
                      cadre rassurant et bienveillant.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Notre priorité est votre bien-être et votre santé. Nous
                      mettons tout en œuvre pour vous accompagner dans votre
                      parcours de soins avec professionnalisme et humanité.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="absolute inset-0 border-l border-gray-200 dark:border-gray-700"></div>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-16 h-16 text-gray-400 dark:text-gray-500"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </motion.svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Nos{" "}
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gray-400 mb-8"></div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100 border-l-2 border-gray-400 pl-3">
                    Soins à domicile
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Injections, pansements, perfusions, soins post-opératoires,
                    surveillance de traitement
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100 border-l-2 border-gray-400 pl-3">
                    Soins au cabinet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Prélèvements sanguins, vaccinations, soins de plaies,
                    ablation de fils
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100 border-l-2 border-gray-400 pl-3">
                    Soins spécifiques
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Soins palliatifs, diabétologie, stomathérapie,
                    chimiothérapie à domicile
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100 border-l-2 border-gray-400 pl-3">
                    Accompagnement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Éducation thérapeutique, aide à la prise de médicaments,
                    conseils en santé
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Notre{" "}
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Équipe
            </span>
          </h2>
          <div className="w-20 h-1 bg-gray-400 mb-8"></div>

          <motion.div
            className="flex justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xs"
            >
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300 p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </motion.svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Marina Rivière
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Infirmière en Chef
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
      <FooterSection />
    </>
  );
}
