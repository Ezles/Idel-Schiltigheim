"use client";

import Navbar from "@/components/navbar-form";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FooterSection from "./footer-section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/toaster";
import { toast } from "./ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setShowSuccessOverlay(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseOverlay = () => {
    setShowSuccessOverlay(false);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 sm:px-12 lg:px-16 relative">
        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={showSuccessOverlay ? handleCloseOverlay : undefined}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  {!showSuccessOverlay ? (
                    <>
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, 0, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                          className="relative"
                        >
                          <PaperAirplaneIcon className="h-16 w-16 text-blue-500" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                            className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"
                          />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Envoi en cours...
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Votre message est en train d&apos;être envoyé. Merci de
                        patienter un instant.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                          className="flex space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="flex justify-center mb-4"
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 0.5, type: "tween" }}
                          className="relative"
                        >
                          <CheckCircleIcon className="h-16 w-16 text-green-500" />
                          <motion.div
                            animate={{
                              scale: [1, 1.5],
                              opacity: [0.5, 0],
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full -z-10"
                          />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Nous avons bien reçu votre message et vous répondrons
                        dans les plus brefs délais.
                      </p>
                      <Button
                        onClick={handleCloseOverlay}
                        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Fermer
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Contactez-nous
          </h1>
          <div className="h-1 w-20 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Besoin de prendre rendez-vous ou d&apos;obtenir des informations sur
            nos services ? Contactez-nous par téléphone ou envoyez-nous un
            message via le formulaire ci-dessous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre numéro de téléphone"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                  className="min-h-[150px] w-full"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Informations de contact
            </h2>
            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4 shadow-sm">
                  <PhoneIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    07 66 72 07 66
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Du lundi au vendredi, 8h-19h
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4 shadow-sm">
                  <EnvelopeIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    contact@cabinet-mriviere.fr
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Nous répondons sous 24-48h
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full mr-4 shadow-sm">
                  <MapPinIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Adresse
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Cabinet Infirmier de Schiltigheim
                    <br />
                    130 route de Bischwiller
                    <br />
                    67300 Schiltigheim
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
                Horaires d&apos;ouverture
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Lundi - Vendredi
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    8h - 19h
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Samedi
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    9h - 17h
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Dimanche
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    Fermé
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Toaster />
      <FooterSection />
    </>
  );
}
