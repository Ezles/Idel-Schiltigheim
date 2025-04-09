"use client";

import { Button } from "@/components/ui/button";
import { PhoneIcon, ClockIcon, MapPinIcon, ArrowDownIcon, HeartIcon, BeakerIcon, ClipboardDocumentListIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";

const HeroLanding = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToContact = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/60 dark:from-blue-950/30 dark:to-gray-900/20 z-0"></div>
        
        {/* Éléments décoratifs - optimisés pour mobile */}
        <div className="hidden sm:block absolute top-20 right-40 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-20 left-40 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              className="space-y-5 md:space-y-8 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-1 sm:mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ClockIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Disponible 7j/7 de 6h à 18h30</span>
                </motion.div>
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Cabinet Infirmier <span className="text-blue-600 dark:text-blue-400">Marina RIVIÈRE</span>
                </motion.h1>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Des soins infirmiers professionnels et attentionnés, à domicile
                  ou au cabinet. Une équipe qualifiée au service de votre santé.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row items-center gap-2 py-1 justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Schiltigheim et environs</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 mt-1 sm:mt-0 sm:ml-4">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">07 66 72 07 66</span>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="flex justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                >
                  <span className="font-medium">Nous contacter</span>
                  <ArrowDownIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Section visuelle moderne à droite avec animation - optimisée pour mobile */}
            <motion.div 
              className="relative flex justify-center items-center mt-6 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                {/* Cercle décoratif */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-white dark:from-blue-900/20 dark:to-gray-800/20 rounded-full blur-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                {/* Widgets modernes avec animation */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                  {/* Widget 1 */}
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 transform translate-y-2 sm:translate-y-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 8, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl inline-block mb-2 sm:mb-3">
                      <HeartIcon className="h-5 w-5 sm:h-7 sm:w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-0.5 sm:mb-1">Soins à domicile</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Interventions 7j/7</p>
                  </motion.div>
                  
                  {/* Widget 2 */}
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 transform -translate-y-2 sm:-translate-y-5"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: -8, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg sm:rounded-xl inline-block mb-2 sm:mb-3">
                      <BeakerIcon className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-0.5 sm:mb-1">Prélèvements</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Analyses médicales</p>
                  </motion.div>
                  
                  {/* Widget 3 */}
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 transform -translate-x-2 sm:-translate-x-5"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: -8, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl inline-block mb-2 sm:mb-3">
                      <ClipboardDocumentListIcon className="h-5 w-5 sm:h-7 sm:w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-0.5 sm:mb-1">Pansements</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Soins de plaies</p>
                  </motion.div>
                  
                  {/* Widget 4 */}
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-5 transform translate-x-2 sm:translate-x-5"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 8, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg sm:rounded-xl inline-block mb-2 sm:mb-3">
                      <UserGroupIcon className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-0.5 sm:mb-1">Équipe qualifiée</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Professionnels DE</p>
                  </motion.div>
                </div>
                
                {/* Badge central avec animation */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-xl z-20 border-4 border-blue-100 dark:border-blue-900/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-3 sm:p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/60 dark:from-blue-950/30 dark:to-gray-900/20 z-0"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-40 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5">
              <motion.div 
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ClockIcon className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Disponible 7j/7 de 6h à 18h30</span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Cabinet Infirmier <span className="text-blue-600 dark:text-blue-400">Marina RIVIÈRE</span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Des soins infirmiers professionnels et attentionnés, à domicile
                ou au cabinet. Une équipe qualifiée au service de votre santé.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-3 py-2 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPinIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Schiltigheim et environs</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 sm:ml-4">
                  <PhoneIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>07 66 72 07 66</span>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                onClick={scrollToContact}
                className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <span className="font-medium">Nous contacter</span>
                <ArrowDownIcon className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Section visuelle moderne à droite avec animation */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Cercle décoratif */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-white dark:from-blue-900/20 dark:to-gray-800/20 rounded-full blur-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              
              {/* Widgets modernes avec animation */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Widget 1 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 transform translate-y-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 5, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl inline-block mb-3">
                    <HeartIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Soins à domicile</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Interventions 7j/7</p>
                </motion.div>
                
                {/* Widget 2 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 transform -translate-y-5"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: -5, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl inline-block mb-3">
                    <BeakerIcon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Prélèvements</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Analyses médicales</p>
                </motion.div>
                
                {/* Widget 3 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 transform -translate-x-5"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: -5, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl inline-block mb-3">
                    <ClipboardDocumentListIcon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Pansements</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Soins de plaies</p>
                </motion.div>
                
                {/* Widget 4 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 transform translate-x-5"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 5, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl inline-block mb-3">
                    <UserGroupIcon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Équipe qualifiée</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Professionnels DE</p>
                </motion.div>
              </div>
              
              {/* Badge central avec animation */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl z-20 border-4 border-blue-100 dark:border-blue-900/30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
