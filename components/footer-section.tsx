"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const FooterSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  if (!isMounted) {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Cabinet Infirmier de Hautepierre
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              1 Place André Maurois
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              67200 Strasbourg
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Tél: 03 88 00 00 00
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Informations Légales
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-du-site"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Plan du Site
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
            © {currentYear} Cabinet Infirmier de Hautepierre. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-900 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cabinet Infirmier de Hautepierre
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            1 Place André Maurois
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            67200 Strasbourg
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Tél: 03 88 00 00 00
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Liens Rapides
          </h3>
          <ul className="space-y-2">
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Accueil
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                À propos
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/services"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Services
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Informations Légales
          </h3>
          <ul className="space-y-2">
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/mentions-legales"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Mentions Légales
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/politique-confidentialite"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Politique de Confidentialité
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link
                href="/plan-du-site"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Plan du Site
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
          © {currentYear} Cabinet Infirmier de Hautepierre. Tous droits
          réservés.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;
