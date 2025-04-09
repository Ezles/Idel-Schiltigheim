"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { motion } from "framer-motion";
import { 
  UserGroupIcon, 
  HeartIcon, 
  ClockIcon, 
  HomeIcon, 
  ShieldCheckIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

export default function AboutContent() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 pt-28 md:pt-32 sm:px-12 lg:px-16 relative">
        {/* Background decoration element */}
        <div className="absolute top-28 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
            Notre cabinet infirmier à Schiltigheim
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Le cabinet infirmier Marina Rivière est situé à Schiltigheim, dans le Bas-Rhin (67). 
            Notre équipe de professionnels qualifiés se déplace à votre domicile pour vous prodiguer 
            des soins de qualité, adaptés à vos besoins.
          </p>
        </motion.section>

        {/* About Section */}
        <section className="mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Un cabinet <span className="text-blue-600 dark:text-blue-400">à votre service</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Notre cabinet infirmier met à votre disposition une équipe professionnelle
                  et dévouée, spécialisée dans les soins à domicile pour les patients de tous âges.
                </p>
                <p>
                  Nous intervenons dans toute la région de Schiltigheim, Bischheim, Hoenheim,
                  Souffelweyersheim, Mundolsheim, Reichstett, La Wantzenau, Vendenheim et les
                  quartiers limitrophes de Strasbourg (Robertsau, Cronenbourg, Hautepierre).
                </p>
                <p>
                  Notre engagement : vous fournir des soins personnalisés de la plus haute qualité,
                  dans le respect de votre confort et de votre intimité.
                </p>
              </div>

              <motion.div 
                className="mt-8 grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div 
                  variants={cardVariant} 
                  className="flex items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <ClockIcon className="h-10 w-10 text-blue-500 dark:text-blue-400 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">7j/7</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Weekends et jours fériés</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={cardVariant} 
                  className="flex items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <HomeIcon className="h-10 w-10 text-blue-500 dark:text-blue-400 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">À domicile</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Interventions chez vous</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20"
              >
                {/* Texte d'information sur le cabinet déplacé au-dessus du pattern géométrique */}
                <div className="absolute top-6 left-6 right-6 text-gray-700 dark:text-white z-20">
                  <h3 className="text-xl font-semibold">Cabinet Marina Rivière</h3>
                  <p className="text-sm">130 route de Bischwiller, 67300 Schiltigheim</p>
                </div>
                
                {/* Élément visuel en attendant une image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Cercle décoratif */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-white dark:from-blue-900/20 dark:to-gray-800/20 rounded-full blur-lg"></div>
                    
                    {/* Pattern géométrique */}
                    <div className="relative z-10 grid grid-cols-4 grid-rows-4 gap-4 p-8">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`rounded-md h-16 ${
                            [0, 3, 5, 6, 9, 10, 12, 15].includes(i) 
                              ? 'bg-blue-200/60 dark:bg-blue-700/30' 
                              : 'bg-blue-100/30 dark:bg-blue-800/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Badge central */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl z-20 border-4 border-blue-100 dark:border-blue-900/30">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Suppression du texte en bas qui a été déplacé en haut */}
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-blue-100 dark:bg-blue-900/30 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Nos services
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Notre équipe propose une large gamme de soins infirmiers à domicile, adaptés à vos besoins.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Injections</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Administration d&apos;injections intraveineuses, intramusculaires, sous-cutanées et prise de sang sur prescription médicale.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Pansements</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Réalisation et surveillance des pansements et scarifications, soins de plaies, d&apos;escarres, d&apos;ulcères et de stomies.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Perfusions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pose et surveillance de perfusions, gestion des cathéters et chambres implantables.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Soins de nursing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Toilette complète, aide à la toilette, soins de confort et bien-être pour les personnes dépendantes.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Aide à la prise de médicaments</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Préparation et administration des traitements, surveillance de la prise de médicaments et suivi des piluliers.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Surveillance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Contrôle des paramètres vitaux, surveillance diabétique, tension artérielle et suivi post-opératoire.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Team Section - Simplified */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Notre équipe
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une équipe d&apos;infirmières diplômées d&apos;état à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Marina Rivière</h3>
                  <p className="text-blue-600 dark:text-blue-400">Infirmière Diplômée d&apos;État - Titulaire</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Émilie Laurent</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">Infirmière Diplômée d&apos;État - Remplaçante</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Nos valeurs
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident notre pratique quotidienne
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
            >
              <HeartIcon className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Empathie</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous prenons le temps d&apos;écouter, de comprendre et de nous adapter à vos besoins spécifiques.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
            >
              <ShieldCheckIcon className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Professionnalisme</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous respectons les normes les plus élevées en matière de soins infirmiers et de déontologie.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariant}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
            >
              <HandThumbUpIcon className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Disponibilité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous sommes disponibles 7j/7, y compris les weekends et jours fériés, pour répondre à vos besoins.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Call to action */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white text-center shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin de soins infirmiers à domicile ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour prendre rendez-vous ou obtenir plus d&apos;informations sur nos services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 66 72 07 66
            </a>
          </div>
        </motion.section>
      </main>
      <FooterSection />
    </>
  );
}
