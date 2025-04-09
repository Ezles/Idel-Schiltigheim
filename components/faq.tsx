"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronRight, CalendarCheck, Stethoscope, Home } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FAQ() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqItems = [
    {
      question: "Comment prendre rendez-vous avec un infirmier ?",
      answer: "Vous pouvez prendre rendez-vous par téléphone au 07 66 72 07 66 ou en utilisant notre formulaire de contact. Nous vous répondrons dans les plus brefs délais pour convenir d'un rendez-vous adapté à vos besoins.",
      icon: <CalendarCheck className="h-5 w-5 text-blue-500" />
    },
    {
      question: "Quels types de soins proposez-vous ?",
      answer: "Nous proposons une large gamme de soins infirmiers : injections, pansements, perfusions, soins post-opératoires, prélèvements sanguins, surveillance de diabète, soins d'hygiène, etc. Nous adaptons nos services aux besoins spécifiques de chaque patient.",
      icon: <Stethoscope className="h-5 w-5 text-blue-500" />
    },
    {
      question: "Intervenez-vous à domicile ?",
      answer: "Oui, nous intervenons à domicile 7j/7 dans Schiltigheim et ses environs. Nous nous déplaçons chez vous pour tous types de soins sur prescription médicale.",
      icon: <Home className="h-5 w-5 text-blue-500" />
    }
  ];

  if (!isMounted) {
    return (
      <section id="faq" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800/70 w-full mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
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
                  <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div
              className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`faq-${index}`}
                    value={`item-${index + 1}`}
                    className={`${index < faqItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : 'border-b-0'} px-6`}
                  >
                    <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-5 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5 pl-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800/70 w-full mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">FAQ</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
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
                <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            variants={itemVariants}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index + 1}`}
                  className={`${index < faqItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : 'border-b-0'} px-6`}
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 py-5 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5 pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
