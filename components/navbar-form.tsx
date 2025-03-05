"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/" && path.includes(pathname);
    }
    return pathname === path;
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-gray-50/75 dark:bg-gray-900/75 backdrop-blur-md py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.img
                src="/images/logo_cabinet_schiltigheim.png"
                alt="Logo Cabinet Infirmier Schiltigheim"
                className={`transition-all duration-500 group-hover:scale-105 ${
                  scrolled ? "h-8 w-auto sm:h-9" : "h-9 w-auto sm:h-10"
                }`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span className={`ml-3 font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap transition-all duration-500 ${
                scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"
              }`}>
                Cabinet Infirmier
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            <motion.div
              className="flex items-center space-x-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/"
                  className={`relative text-sm font-medium py-1 transition-all duration-300 ${
                    isActive("/")
                      ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-blue-500 dark:hover:after:bg-blue-400 hover:after:transition-all"
                  }`}
                >
                  Accueil
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className={`relative text-sm font-medium py-1 transition-all duration-300 ${
                    isActive("/about")
                      ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-blue-500 dark:hover:after:bg-blue-400 hover:after:transition-all"
                  }`}
                >
                  À Propos
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/faq"
                  className={`relative text-sm font-medium py-1 transition-all duration-300 ${
                    isActive("/faq")
                      ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-blue-500 dark:hover:after:bg-blue-400 hover:after:transition-all"
                  }`}
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className={`relative text-sm font-medium py-1 transition-all duration-300 ${
                    isActive("/contact")
                      ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-blue-500 dark:hover:after:bg-blue-400 hover:after:transition-all"
                  }`}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="tel:0766720766"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <PhoneIcon className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">07 66 72 07 66</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">Nous écrire</span>
            </motion.a>
            <motion.div
              className="flex items-center text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <MapPinIcon className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
              <span className="text-sm">Schiltigheim</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4 border-t border-gray-100 dark:border-gray-700">
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/"
                  className={`block py-2 text-sm ${
                    isActive("/")
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className={`block py-2 text-sm ${
                    isActive("/about")
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À Propos
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/faq"
                  className={`block py-2 text-sm ${
                    isActive("/faq")
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className={`block py-2 text-sm ${
                    isActive("/contact")
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <motion.a
                  href="tel:0766720766"
                  className="flex items-center py-2 text-gray-600 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">07 66 72 07 66</span>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="flex items-center py-2 text-gray-600 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">Nous écrire</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
