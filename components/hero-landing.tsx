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
      <section className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:gap-12 md:py-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="flex flex-row items-center justify-center md:justify-start gap-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Cabinet Infirmier de Schiltigheim
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Des soins infirmiers professionnels et attentionnés, à domicile ou
                au cabinet. Notre équipe est à votre service 7j/7.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
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
        <div className="hidden md:flex md:flex-1 md:justify-center">
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
    <section className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row md:gap-12 md:py-16">
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center justify-center md:justify-start gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Cabinet Infirmier de Schiltigheim
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Des soins infirmiers professionnels et attentionnés, à domicile ou
              au cabinet. Notre équipe est à votre service 7j/7.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
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
      </motion.div>

      <motion.div
        className="hidden md:flex md:flex-1 md:justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/images/logo_cabinet_schiltigheim.png"
          alt="Soins infirmiers professionnels"
          width={500}
          height={500}
          className="object-contain hover:scale-105 transition-transform duration-300"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroLanding;
