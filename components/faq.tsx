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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 70 } }
  };

  const faqItems = [
    {
      question: "Comment prendre rendez-vous avec un infirmier ?",
      answer: "Vous pouvez prendre rendez-vous par téléphone au 07 66 72 07 66 ou en utilisant notre formulaire de contact. Nous vous répondrons dans les plus brefs délais pour convenir d'un rendez-vous adapté à vos besoins.",
      icon: <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
    },
    {
      question: "Quels types de soins proposez-vous ?",
      answer: "Nous proposons une large gamme de soins infirmiers : injections, pansements, perfusions, soins post-opératoires, prélèvements sanguins, surveillance de diabète, soins d'hygiène, etc. Nous adaptons nos services aux besoins spécifiques de chaque patient.",
      icon: <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
    },
    {
      question: "Intervenez-vous à domicile ?",
      answer: "Oui, nous intervenons à domicile 7j/7 dans Schiltigheim et ses environs. Nous nous déplaçons chez vous pour tous types de soins sur prescription médicale.",
      icon: <Home className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
    }
  ];

  if (!isMounted) {
    return (
      <section id="faq" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800/70 w-full mt-8 sm:mt-12 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-2 sm:mb-4">
              <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Questions Fréquentes
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-blue-500 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6">
              Retrouvez les réponses aux questions les plus fréquemment posées
              sur nos services et notre fonctionnement.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div
              className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`faq-${index}`}
                    value={`item-${index + 1}`}
                    className={`${index < faqItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : 'border-b-0'} px-4 sm:px-6`}
                  >
                    <AccordionTrigger className="text-sm sm:text-base text-gray-800 dark:text-gray-200 py-3 sm:py-5 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                      <div className="flex items-center">
                        <span className="mr-2 sm:mr-3 flex-shrink-0">{item.icon}</span>
                        <span className="text-left">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 pb-3 sm:pb-5 pl-6 sm:pl-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-all duration-300 group"
            >
              <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-0.5">
                Voir toutes les questions
              </span>
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800/70 w-full mt-8 sm:mt-12 md:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium">FAQ</span>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Questions Fréquentes
          </motion.h2>
          <motion.div 
            className="h-1 w-16 sm:w-24 bg-blue-500 mx-auto mb-3 sm:mb-4"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Retrouvez les réponses aux questions les plus fréquemment posées
            sur nos services et notre fonctionnement.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            variants={itemVariants}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index + 1}`}
                  className={`${index < faqItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : 'border-b-0'} px-4 sm:px-6`}
                >
                  <AccordionTrigger className="text-sm sm:text-base text-gray-800 dark:text-gray-200 py-3 sm:py-5 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                    <div className="flex items-center">
                      <span className="mr-2 sm:mr-3 flex-shrink-0">{item.icon}</span>
                      <span className="text-left">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 pb-3 sm:pb-5 pl-6 sm:pl-8">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-all duration-300 group"
          >
            <span className="border-b border-transparent group-hover:border-blue-600 dark:group-hover:border-blue-400 pb-0.5">
              Voir toutes les questions
            </span>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
