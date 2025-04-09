"use client";

import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
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
      <footer className="bg-gradient-to-b from-blue-50/80 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-20 pb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full -mt-[450px] -mr-[350px] opacity-70 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full -mb-[450px] -ml-[350px] opacity-70 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            {/* Logo et informations */}
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-block">
                <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      Cabinet Infirmier
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Marina RIVIÈRE
                    </p>
                  </div>
                </div>
              </Link>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Des soins infirmiers professionnels et attentionnés, à domicile
                ou au cabinet. Notre équipe est à votre service pour tous vos besoins
                en soins médicaux et paramédicaux.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    130 route de Bischwiller, 67300 Schiltigheim
                  </p>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Link
                    href="tel:+33766720766"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mt-1"
                  >
                    07 66 72 07 66
                  </Link>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <EnvelopeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Link
                    href="mailto:contact@cabinet-mriviere.fr"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mt-1"
                  >
                    contact@cabinet-mriviere.fr
                  </Link>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Du lundi au dimanche, weekends et jours fériés inclus,<br /> de 6h à 18h30
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-5 pb-2 border-b border-gray-200 dark:border-gray-800 inline-block">
                Navigation
              </h3>
              <ul className="space-y-3 pt-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Légal */}
            <div className="md:col-span-3">
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-5 pb-2 border-b border-gray-200 dark:border-gray-800 inline-block">
                Informations Légales
              </h3>
              <ul className="space-y-3 pt-2">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-confidentialite"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-du-site"
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                    Plan du Site
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="inline-flex items-center">
                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  © {currentYear} Cabinet Infirmier Marina RIVIÈRE. Tous droits
                  réservés.
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
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
      className="bg-gradient-to-b from-blue-50/80 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-20 pb-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full -mt-[450px] -mr-[350px] opacity-70 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full -mb-[450px] -ml-[350px] opacity-70 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Logo et informations */}
          <motion.div
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="inline-block">
              <motion.div 
                className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Cabinet Infirmier
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Marina RIVIÈRE
                  </p>
                </div>
              </motion.div>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Des soins infirmiers professionnels et attentionnés, à domicile
              ou au cabinet. Notre équipe est à votre service pour tous vos besoins
              en soins médicaux et paramédicaux.
            </p>

            <div className="space-y-4 pt-2">
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  130 route de Bischwiller, 67300 Schiltigheim
                </p>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <Link
                  href="tel:+33766720766"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mt-1"
                >
                  07 66 72 07 66
                </Link>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <EnvelopeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <Link
                  href="mailto:contact@cabinet-mriviere.fr"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mt-1"
                >
                  contact@cabinet-mriviere.fr
                </Link>
              </motion.div>

              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Du lundi au dimanche, weekends et jours fériés inclus,<br /> de 6h à 18h30
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="md:col-span-3 md:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-5 pb-2 border-b border-gray-200 dark:border-gray-800 inline-block">
              Navigation
            </h3>
            <ul className="space-y-3 pt-2">
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  Accueil
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  À propos
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  Contact
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  FAQ
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Légal */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-5 pb-2 border-b border-gray-200 dark:border-gray-800 inline-block">
              Informations Légales
            </h3>
            <ul className="space-y-3 pt-2">
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  Mentions Légales
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  Confidentialité
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/plan-du-site"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2.5 group-hover:scale-125 transition-transform duration-300"></span>
                  Plan du Site
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="inline-flex items-center">
              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                © {currentYear} Cabinet Infirmier Marina RIVIÈRE. Tous droits
                réservés.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={resetCookiePreferences}
            >
              Gérer les cookies
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
