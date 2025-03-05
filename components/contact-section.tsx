"use client";

import { Button } from "@/components/ui/button";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-blue-100 dark:border-blue-900">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                Une question ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Besoin d&apos;informations ou d&apos;aide ? Contactez-nous dès
                maintenant.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link href="tel:+33766720766" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
                    <PhoneIcon className="h-4 w-4" />
                    <span>07 66 72 07 66</span>
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 rounded-md flex items-center justify-center gap-2"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    <span>Nous écrire</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="py-16 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-blue-100 dark:border-blue-900 relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 25px 30px -12px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent rounded-full -mr-32 -mt-32 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent rounded-full -ml-32 -mb-32 opacity-70"></div>

          <div className="text-center relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Une question ?
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Besoin d&apos;informations ou d&apos;aide ? Contactez-nous dès
              maintenant.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link href="tel:+33766720766" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>07 66 72 07 66</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 rounded-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Nous écrire</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
