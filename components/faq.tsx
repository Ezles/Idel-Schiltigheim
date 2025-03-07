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
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900 w-full mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Questions Fréquentes
            </h2>
            <div className="h-1 w-24 bg-blue-500"></div>
            <p className="text-gray-600 dark:text-gray-300">
              Retrouvez les réponses aux questions les plus fréquemment posées
              sur nos services et notre fonctionnement.
            </p>
            <div className="pt-4">
              <Link
                href="/faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-all duration-300 group"
              >
                <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-0.5">
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
          </div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-100 dark:border-gray-700 px-6"
              >
                <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  Comment prendre rendez-vous avec un infirmier ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm pb-4">
                  Vous pouvez prendre rendez-vous par téléphone au 07 66 72 07
                  66 ou en utilisant notre formulaire de contact. Nous vous
                  répondrons dans les plus brefs délais pour convenir
                  d&apos;un rendez-vous adapté à vos besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-100 dark:border-gray-700 px-6"
              >
                <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
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

              <AccordionItem value="item-3" className="border-b-0 px-6">
                <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-4 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  Intervenez-vous à domicile ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm pb-4">
                  Oui, nous intervenons à domicile 7j/7 dans Schiltigheim et ses
                  environs. Nous nous déplaçons chez vous pour tous types de
                  soins sur prescription médicale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
