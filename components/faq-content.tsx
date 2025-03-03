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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Comment prendre rendez-vous avec un infirmier ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Vous pouvez prendre rendez-vous par téléphone au 03 88 00 00
                    00 ou en utilisant notre formulaire de contact en ligne.
                    Nous vous répondrons dans les plus brefs délais pour
                    confirmer votre rendez-vous.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Quels sont vos horaires d&apos;ouverture ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Notre cabinet est ouvert du lundi au vendredi de 8h à 19h et
                    le samedi de 9h à 12h. Pour les soins à domicile, nous
                    intervenons 7j/7, y compris les jours fériés, selon les
                    besoins des patients.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Quels types de soins proposez-vous ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Nous proposons une large gamme de soins infirmiers :
                    injections, pansements, perfusions, soins post-opératoires,
                    prélèvements sanguins, surveillance de diabète, soins
                    d&apos;hygiène, etc. Nous adaptons nos services aux besoins
                    spécifiques de chaque patient.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-4"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Les soins sont-ils pris en charge par l&apos;Assurance
                    Maladie ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Oui, tous nos soins prescrits par un médecin sont pris en
                    charge par l&apos;Assurance Maladie. Nous pratiquons le
                    tiers payant, ce qui signifie que vous n&apos;avez pas à
                    avancer les frais. Nous nous occupons directement des
                    démarches administratives avec votre caisse d&apos;assurance
                    maladie.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-5"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Faut-il une prescription médicale pour tous les soins ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Une prescription médicale est nécessaire pour la plupart des
                    soins, notamment pour bénéficier d&apos;une prise en charge
                    par l&apos;Assurance Maladie. Cependant, certains actes
                    comme les conseils de prévention ou la surveillance de
                    paramètres vitaux peuvent être réalisés sans ordonnance,
                    mais ne seront pas remboursés.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
                  value="item-6"
                  className="border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors duration-300">
                    Quelle est la zone géographique couverte pour les soins à
                    domicile ?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm pt-2">
                    Nous intervenons principalement dans le quartier de
                    Hautepierre et ses environs, couvrant une grande partie de
                    l&apos;ouest de Strasbourg. Pour savoir si vous êtes dans
                    notre zone d&apos;intervention, n&apos;hésitez pas à nous
                    contacter par téléphone.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </Card>
        </motion.div>
      </main>
      <FooterSection />
    </>
  );
}
