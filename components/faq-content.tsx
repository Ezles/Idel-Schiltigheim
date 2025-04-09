"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuestionMarkCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FAQContent() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Catégoriser les questions pour une meilleure organisation
  const faqItems = [
    {
      question: "Comment prendre rendez-vous avec un infirmier ?",
      answer:
        "Vous pouvez prendre rendez-vous par téléphone au 07 66 72 07 66 ou en utilisant notre formulaire de contact en ligne. Nous vous répondrons dans les plus brefs délais pour confirmer votre rendez-vous.",
      category: "rdv",
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer:
        "Notre cabinet est ouvert du lundi au dimanche, weekends et jours fériés inclus, de 6h à 18h30. Nos infirmiers sont disponibles pour des soins à domicile sur ces mêmes horaires.",
      category: "rdv",
    },
    {
      question: "Quels types de soins proposez-vous ?",
      answer:
        "Nous proposons une large gamme de soins infirmiers : injections, pansements, perfusions, soins post-opératoires, prélèvements sanguins, surveillance de diabète, soins d'hygiène, etc. Nous adaptons nos services aux besoins spécifiques de chaque patient.",
      category: "soins",
    },
    {
      question: "Les soins sont-ils pris en charge par l'Assurance Maladie ?",
      answer:
        "Oui, tous nos soins prescrits par un médecin sont pris en charge par l'Assurance Maladie. Nous pratiquons le tiers payant, ce qui signifie que vous n'avez pas à avancer les frais. Nous nous occupons directement des démarches administratives avec votre caisse d'assurance maladie.",
      category: "admin",
    },
    {
      question: "Faut-il une prescription médicale pour tous les soins ?",
      answer:
        "Une prescription médicale est nécessaire pour la plupart des soins, notamment pour bénéficier d'une prise en charge par l'Assurance Maladie. Cependant, certains actes comme les conseils de prévention ou la surveillance de paramètres vitaux peuvent être réalisés sans ordonnance, mais ne seront pas remboursés.",
      category: "admin",
    },
    {
      question:
        "Quelle est la zone géographique couverte pour les soins à domicile ?",
      answer:
        "Nous intervenons principalement à Schiltigheim et dans les communes environnantes : Bischheim, Hoenheim. Pour toute demande en dehors de cette zone, n'hésitez pas à nous contacter pour vérifier notre disponibilité.",
      category: "rdv",
    },
    {
      question: "Comment se déroule la première visite à domicile ?",
      answer:
        "Lors de la première visite, nous prenons le temps de faire connaissance, d'évaluer vos besoins et de mettre en place un plan de soins adapté. Nous vous demandons de préparer votre carte vitale, votre carte de mutuelle, votre ordonnance et votre dossier médical si vous en avez un. Cette première rencontre est essentielle pour établir une relation de confiance.",
      category: "soins",
    },
    {
      question: "Proposez-vous des soins d'urgence ?",
      answer:
        "Nous ne sommes pas un service d'urgence. En cas d'urgence médicale, veuillez contacter le SAMU (15) ou les pompiers (18). Cependant, pour nos patients réguliers, nous faisons notre possible pour répondre rapidement aux besoins urgents non vitaux dans la mesure de nos disponibilités.",
      category: "soins",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes les questions" },
    { id: "rdv", name: "Rendez-vous & Horaires" },
    { id: "soins", name: "Soins & Services" },
    { id: "admin", name: "Administratif" },
  ];

  const filteredFaqs = activeTab === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeTab);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  if (!isMounted) {
    return (
      <>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12 pt-28 md:pt-32 sm:px-12 lg:px-16 relative">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
              Questions Fréquentes
            </h1>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Retrouvez les réponses aux questions les plus fréquemment posées
              sur nos services.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
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
      <main className="max-w-5xl mx-auto px-6 py-12 pt-28 md:pt-32 sm:px-12 lg:px-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-28 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
            Questions Fréquentes
          </h1>
          <div className="h-1 w-20 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Retrouvez les réponses aux questions les plus fréquemment posées sur
            nos services.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div 
          className="mb-8 overflow-x-auto scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 grid grid-cols-1 md:grid-cols-1 gap-6"
        >
          {filteredFaqs.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
                    <QuestionMarkCircleIcon className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-blue-50/50 dark:bg-gray-800/50 px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
                    <div className="pl-9">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Vous avez d&apos;autres questions ?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            N&apos;hésitez pas à nous contacter. Notre équipe est disponible pour répondre à toutes vos interrogations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
            <a
              href="tel:0766720766"
              className="inline-flex items-center px-6 py-3 bg-transparent text-white border border-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              07 66 72 07 66
            </a>
          </div>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
