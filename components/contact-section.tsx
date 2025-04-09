"use client";

import { Button } from "@/components/ui/button";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />,
      title: "Téléphone",
      content: "07 66 72 07 66",
      link: "tel:+33766720766",
      cta: "Appeler"
    },
    {
      icon: <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />,
      title: "Adresse",
      content: "Schiltigheim, Bas-Rhin",
      link: "https://maps.app.goo.gl/PWhBNS17rkCLAXgeA",
      cta: "Voir la carte"
    },
    {
      icon: <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />,
      title: "Horaires",
      content: "7j/7, de 6h à 18h30",
      link: "/about",
      cta: "En savoir plus"
    }
  ];

  if (!isMounted) {
    return (
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Contactez-nous
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-3 sm:mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              N&apos;hésitez pas à nous contacter pour toute question concernant nos services de soins infirmiers.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 sm:-mt-24 md:-mt-32 -mr-20 sm:-mr-24 md:-mr-32 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-20 sm:-mb-24 md:-mb-32 -ml-20 sm:-ml-24 md:-ml-32 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">Besoin d&apos;informations ?</h3>
                <p className="mb-6 sm:mb-8 text-blue-50 max-w-lg mx-auto text-center text-sm sm:text-base">
                  Nos infirmiers diplômés d&apos;État sont à votre écoute et vous accompagnent dans votre parcours de soins.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={`contact-${index}`} className="flex flex-col items-center text-center bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                        {info.icon}
                      </div>
                      <h4 className="font-medium text-white mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-blue-50 mb-1 sm:mb-2 text-xs sm:text-sm">{info.content}</p>
                      <Link 
                        href={info.link} 
                        className="mt-0.5 sm:mt-1 inline-flex items-center text-xs sm:text-sm text-white hover:text-blue-100 transition-colors"
                      >
                        {info.cta}
                        <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="tel:+33766720766">
                    <Button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white hover:bg-gray-100 text-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Appeler maintenant</span>
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-white border-white border-2 hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium hover:scale-105"
                    >
                      <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Formulaire de contact</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
            Contactez-nous
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-3 sm:mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            N&apos;hésitez pas à nous contacter pour toute question concernant nos services de soins infirmiers.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-3xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 -mt-20 sm:-mt-24 md:-mt-32 -mr-20 sm:-mr-24 md:-mr-32 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-20 sm:-mb-24 md:-mb-32 -ml-20 sm:-ml-24 md:-ml-32 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Besoin d&apos;informations ?
              </motion.h3>
              <motion.p 
                className="mb-6 sm:mb-8 text-blue-50 max-w-lg mx-auto text-center text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Nos infirmiers diplômés d&apos;État sont à votre écoute et vous accompagnent dans votre parcours de soins.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={`contact-${index}`} 
                    className="flex flex-col items-center text-center bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                      {info.icon}
                    </div>
                    <h4 className="font-medium text-white mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h4>
                    <p className="text-blue-50 mb-1 sm:mb-2 text-xs sm:text-sm">{info.content}</p>
                    <Link 
                      href={info.link} 
                      className="mt-0.5 sm:mt-1 inline-flex items-center text-xs sm:text-sm text-white hover:text-blue-100 transition-colors"
                    >
                      {info.cta}
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Link href="tel:+33766720766">
                  <Button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white hover:bg-gray-100 text-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Appeler maintenant</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-white border-white border-2 hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base font-medium hover:scale-105"
                  >
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Formulaire de contact</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;