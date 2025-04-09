"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Home, 
  Syringe, 
  Activity, 
  Clipboard, 
  Pill 
} from "lucide-react";
import { useEffect, useState } from "react";

const Prestations = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const prestations = [
    {
      title: "Pansements et Soins des Plaies",
      description: "Réalisation de pansements simples ou complexes, gestion des plaies chroniques ou aiguës pour une cicatrisation optimale.",
      icon: <Clipboard className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      title: "Maintien à Domicile",
      description: "Accompagnement des personnes âgées ou dépendantes pour assurer leur bien-être tout en restant chez elles.",
      icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      title: "Perfusions et Injections",
      description: "Pose de perfusions, administration d'injections intraveineuses, intramusculaires ou sous-cutanées selon les prescriptions.",
      icon: <Syringe className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      title: "Maladies Chroniques",
      description: "Suivi des patients atteints de diabète, hypertension, ou autres pathologies chroniques pour un contrôle régulier.",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      title: "Soins Palliatifs",
      description: "Accompagnement des patients en fin de vie et soutien de leur entourage avec des soins personnalisés et respectueux.",
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    },
    {
      title: "Oncologie",
      description: "Soins adaptés pour les patients atteints de cancer : suivi des traitements, gestion des effets secondaires, accompagnement global.",
      icon: <Pill className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
    }
  ];

  // Animation variants for staggered children
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
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  if (!isMounted) {
    return (
      <section id="services" className="py-12 md:py-20 px-4 overflow-hidden">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-gray-100">
            Prestations Proposées
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Notre équipe d&apos;infirmiers qualifiés propose une large gamme de soins personnalisés pour répondre à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {prestations.map((prestation, index) => (
            <div
              key={`prestation-${index}`}
              className="p-5 md:p-6 lg:p-8 rounded-xl shadow-md bg-white dark:bg-gray-800/60 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-[100px] -z-0 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/20"></div>
              <div className="relative z-10">
                <div className="mb-4 md:mb-6">{prestation.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-3">
                  {prestation.title}
                </h3>
                <div className="w-10 h-0.5 bg-blue-500 mb-3 md:mb-4"></div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {prestation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-12 md:py-20 px-4 overflow-hidden">
      <motion.div 
        className="mb-10 md:mb-16 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-gray-100">
          Prestations Proposées
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Notre équipe d&apos;infirmiers qualifiés propose une large gamme de soins personnalisés pour répondre à vos besoins spécifiques.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {prestations.map((prestation, index) => (
          <motion.div
            key={`prestation-${index}`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-5 md:p-6 lg:p-8 rounded-xl shadow-md bg-white dark:bg-gray-800/60 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-blue-50 dark:bg-blue-900/20 rounded-bl-[100px] -z-0 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/20"></div>
            <div className="relative z-10">
              <motion.div 
                className="mb-4 md:mb-6"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              >
                {prestation.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-3">
                {prestation.title}
              </h3>
              <div className="w-10 h-0.5 bg-blue-500 mb-3 md:mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {prestation.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Prestations;
