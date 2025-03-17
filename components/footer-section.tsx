"use client";

import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { resetCookiePreferences } from "./cookie-consent";
import { Button } from "./ui/button";

const FooterSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  if (!isMounted) {
    return (
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Logo et informations */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <Image
                  src="/images/logo_cabinet_schiltigheim.png"
                  alt="Cabinet Infirmier Marina RIVIÈRE"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Cabinet Infirmier
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    de Schiltigheim
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Des soins infirmiers professionnels et attentionnés, à domicile
                ou au cabinet. Notre équipe est à votre service 7j/7.
              </p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    130 route de Bischwiller, 67300 Schiltigheim
                  </p>
                </div>

                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <Link
                    href="tel:+33766720766"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    07 66 72 07 66
                  </Link>
                </div>

                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <Link
                    href="mailto:contact@cabinet-mriviere.fr"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    contact@cabinet-mriviere.fr
                  </Link>
                </div>

                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Du lundi au dimanche, weekends et jours fériés inclus, de 6h
                    à 18h30
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-1 border-b border-gray-200 dark:border-gray-800">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Légal */}
            <div className="md:col-span-3">
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-1 border-b border-gray-200 dark:border-gray-800">
                Informations Légales
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-confidentialite"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-du-site"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                    Plan du Site
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
                © {currentYear} Cabinet Infirmier Marina RIVIÈRE. Tous droits
                réservés.
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={resetCookiePreferences}
              >
                Gérer les cookies
              </Button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo et informations */}
          <motion.div
            className="md:col-span-5 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center">
              <Image
                src="/images/logo_cabinet_schiltigheim.png"
                alt="Cabinet Infirmier Marina RIVIÈRE"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  Cabinet Infirmier
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  de Schiltigheim
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Des soins infirmiers professionnels et attentionnés, à domicile ou
              au cabinet. Notre équipe est à votre service 7j/7.
            </p>

            <div className="space-y-2">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  130 route de Bischwiller, 67300 Schiltigheim
                </p>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <Link
                  href="tel:+33766720766"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  07 66 72 07 66
                </Link>
              </div>

              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <Link
                  href="mailto:contact@cabinet-mriviere.fr"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  contact@cabinet-mriviere.fr
                </Link>
              </div>

              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Du lundi au dimanche, weekends et jours fériés inclus, de 6h à
                  18h30
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="md:col-span-3 md:col-start-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-1 border-b border-gray-200 dark:border-gray-800">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  Accueil
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  À propos
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Légal */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4 pb-1 border-b border-gray-200 dark:border-gray-800">
              Informations Légales
            </h3>
            <ul className="space-y-2">
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  Mentions Légales
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  Confidentialité
                </Link>
              </li>
              <li className="hover:translate-x-1 transition-transform duration-200">
                <Link
                  href="/plan-du-site"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                >
                  <span className="h-1 w-1 bg-blue-500 rounded-full mr-2"></span>
                  Plan du Site
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
              © {currentYear} Cabinet Infirmier Marina RIVIÈRE. Tous droits
              réservés.
            </p>
            <div className="hover:scale-105 transition-transform duration-200">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={resetCookiePreferences}
              >
                Gérer les cookies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
