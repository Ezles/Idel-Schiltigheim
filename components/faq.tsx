"use client";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Questions Fréquentes
            </h2>
            <div className="h-px w-20 bg-gray-300"></div>
            <p className="text-gray-600 dark:text-gray-300">
              Retrouvez les réponses aux questions les plus fréquemment posées
              sur nos services et notre fonctionnement.
            </p>
            <div className="pt-4">
              <Link
                href="/faq"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium transition-all duration-300 group"
              >
                <span className="border-b border-transparent group-hover:border-gray-700 dark:group-hover:border-gray-300 pb-0.5">
                  Voir toutes les questions
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-100 dark:border-gray-700 px-6"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300">
                    Comment prendre rendez-vous avec un infirmier ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm pb-4">
                    Vous pouvez prendre rendez-vous par téléphone au 06 65 28 48
                    32 ou en utilisant notre formulaire de contact. Nous vous
                    répondrons dans les plus brefs délais pour convenir
                    d&apos;un rendez-vous adapté à vos besoins.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-100 dark:border-gray-700 px-6"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300">
                    Quels types de soins proposez-vous ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm pb-4">
                    Nous proposons une large gamme de soins infirmiers :
                    injections, pansements, perfusions, soins post-opératoires,
                    prélèvements sanguins, surveillance de diabète, soins
                    d&apos;hygiène, etc. Nous adaptons nos services aux besoins
                    spécifiques de chaque patient.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AccordionItem value="item-3" className="border-b-0 px-6">
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300">
                    Intervenez-vous à domicile ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm pb-4">
                    Oui, nous proposons des soins à domicile dans tout le
                    quartier de Hautepierre et ses environs. N&apos;hésitez pas
                    à nous contacter pour vérifier si votre adresse est dans
                    notre zone d&apos;intervention.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
