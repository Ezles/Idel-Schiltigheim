"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FAQContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqItems = [
    {
      question: "Comment prendre rendez-vous avec un infirmier ?",
      answer:
        "Vous pouvez prendre rendez-vous par téléphone au 07 66 72 07 66 ou en utilisant notre formulaire de contact en ligne. Nous vous répondrons dans les plus brefs délais pour confirmer votre rendez-vous.",
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer:
        "Notre cabinet est ouvert du lundi au vendredi de 8h à 19h et le samedi de 9h à 17h. Pour les soins à domicile, nous intervenons 7j/7, y compris les jours fériés, selon les besoins des patients.",
    },
    {
      question: "Quels types de soins proposez-vous ?",
      answer:
        "Nous proposons une large gamme de soins infirmiers : injections, pansements, perfusions, soins post-opératoires, prélèvements sanguins, surveillance de diabète, soins d'hygiène, etc. Nous adaptons nos services aux besoins spécifiques de chaque patient.",
    },
    {
      question: "Les soins sont-ils pris en charge par l'Assurance Maladie ?",
      answer:
        "Oui, tous nos soins prescrits par un médecin sont pris en charge par l'Assurance Maladie. Nous pratiquons le tiers payant, ce qui signifie que vous n'avez pas à avancer les frais. Nous nous occupons directement des démarches administratives avec votre caisse d'assurance maladie.",
    },
    {
      question: "Faut-il une prescription médicale pour tous les soins ?",
      answer:
        "Une prescription médicale est nécessaire pour la plupart des soins, notamment pour bénéficier d'une prise en charge par l'Assurance Maladie. Cependant, certains actes comme les conseils de prévention ou la surveillance de paramètres vitaux peuvent être réalisés sans ordonnance, mais ne seront pas remboursés.",
    },
    {
      question:
        "Quelle est la zone géographique couverte pour les soins à domicile ?",
      answer:
        "Nous intervenons principalement dans le quartier de Schiltigheim et ses environs, couvrant une grande partie de la périphérie nord de Strasbourg. Pour savoir si vous êtes dans notre zone d'intervention, n'hésitez pas à nous contacter par téléphone.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  if (!isMounted) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Questions Fréquemment Posées
            </h1>
            <div className="h-px w-20 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Retrouvez les réponses aux questions les plus fréquentes
              concernant nos services.
            </p>
          </div>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Chargement des questions...
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Chargement des réponses...
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </main>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Questions Fréquemment Posées
          </h1>
          <div className="h-px w-20 bg-gray-300 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Retrouvez les réponses aux questions les plus fréquentes concernant
            nos services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={`faq-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </Card>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
