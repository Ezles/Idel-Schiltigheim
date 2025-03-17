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
        "Notre cabinet est ouvert du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30. Nos infirmiers sont disponibles pour des soins à domicile sur ces mêmes horaires.",
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
        "Nous intervenons principalement à Schiltigheim et dans les communes environnantes : Bischheim, Hoenheim. Pour toute demande en dehors de cette zone, n'hésitez pas à nous contacter pour vérifier notre disponibilité.",
    },
    {
      question: "Comment se déroule la première visite à domicile ?",
      answer:
        "Lors de la première visite, nous prenons le temps de faire connaissance, d'évaluer vos besoins et de mettre en place un plan de soins adapté. Nous vous demandons de préparer votre carte vitale, votre carte de mutuelle, votre ordonnance et votre dossier médical si vous en avez un. Cette première rencontre est essentielle pour établir une relation de confiance.",
    },
    {
      question: "Proposez-vous des soins d'urgence ?",
      answer:
        "Nous ne sommes pas un service d'urgence. En cas d'urgence médicale, veuillez contacter le SAMU (15) ou les pompiers (18). Cependant, pour nos patients réguliers, nous faisons notre possible pour répondre rapidement aux besoins urgents non vitaux dans la mesure de nos disponibilités.",
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
        <main className="max-w-4xl mx-auto px-6 py-12 pt-32">
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Questions{" "}
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                Fréquentes
              </span>
            </h1>
            <div className="h-px w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Retrouvez les réponses aux questions les plus fréquemment posées
              sur nos services.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
              <div className="p-6">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Chargement des questions...
                </p>
              </div>
            </Card>
          </div>
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
      <main className="max-w-4xl mx-auto px-6 py-12 pt-32">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Questions{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Fréquentes
            </span>
          </h1>
          <div className="h-px w-20 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Retrouvez les réponses aux questions les plus fréquemment posées sur
            nos services.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 py-4 px-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 px-6 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Vous avez d&apos;autres questions ? N&apos;hésitez pas à nous
              contacter.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </motion.div>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
