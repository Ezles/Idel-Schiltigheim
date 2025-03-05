"use client";

import { Button } from "@/components/ui/button";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroLanding = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-6 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Cabinet Infirmier de Schiltigheim
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Des soins infirmiers professionnels et attentionnés, à domicile ou
              au cabinet. Notre équipe est à votre service 7j/7.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="tel:+33766720766">
              <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
                <PhoneIcon className="h-4 w-4" />
                <span>Appeler</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-6 py-3 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 rounded-md flex items-center gap-2"
              >
                <EnvelopeIcon className="h-4 w-4" />
                <span>Nous écrire</span>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-md"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/logo_cabinet_schiltigheim.png"
            alt="Soins infirmiers professionnels"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Cabinet Infirmier de Schiltigheim
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Des soins infirmiers professionnels et attentionnés, à domicile ou
              au cabinet. Notre équipe est à votre service 7j/7.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="tel:+33766720766">
              <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
                <PhoneIcon className="h-4 w-4" />
                <span>Appeler</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-6 py-3 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 rounded-md flex items-center gap-2"
              >
                <EnvelopeIcon className="h-4 w-4" />
                <span>Nous écrire</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <Button
                variant="ghost"
                className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-md"
              >
                En savoir plus
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Image
            src="/images/logo_cabinet_schiltigheim.png"
            alt="Soins infirmiers professionnels"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroLanding;
