"use client";

import Navbar from "@/components/navbar-form";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  XCircleIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FooterSection from "./footer-section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [showErrorOverlay, setShowErrorOverlay] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    setShowOverlay(true);

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

      setTimeout(() => {
        setShowOverlay(false);
        setShowSuccessOverlay(false);
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer."
      );
      setShowErrorOverlay(true);

      setTimeout(() => {
        setShowOverlay(false);
        setShowErrorOverlay(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setShowSuccessOverlay(false);
    setShowErrorOverlay(false);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 pt-28 md:pt-32 sm:px-12 lg:px-16 relative">
        <AnimatePresence>
          {showOverlay && (
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
                  {!showSuccessOverlay && !showErrorOverlay ? (
                    <>
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <PaperAirplaneIcon className="h-16 w-16 text-blue-500" />
                          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Envoi en cours...
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Votre message est en train d&apos;être envoyé. Merci de
                        patienter un instant.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  ) : showSuccessOverlay ? (
                    <>
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <CheckCircleIcon className="h-16 w-16 text-green-500" />
                          <div className="absolute inset-0 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full -z-10" />
                        </div>
                      </div>
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
                  ) : (
                    <>
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <XCircleIcon className="h-16 w-16 text-red-500" />
                          <div className="absolute inset-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full -z-10" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Erreur
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {errorMessage}
                      </p>
                      <Button
                        onClick={handleCloseOverlay}
                        className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
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

        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Contactez-nous
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Besoin de prendre rendez-vous ou d&apos;obtenir des informations sur
            nos services ? Contactez-nous par téléphone ou via le formulaire ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-7 relative overflow-hidden rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                  <PaperAirplaneIcon className="h-5 w-5 text-blue-500 mr-2" />
                  Envoyez-nous un message
                </h2>
                <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs text-blue-600 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-800">
                  Réponse sous 24-48h
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      <UserIcon className="h-4 w-4 text-blue-500 inline mr-1" />
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="w-full h-11 rounded-md bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      <EnvelopeIcon className="h-4 w-4 text-blue-500 inline mr-1" />
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
                      className="w-full h-11 rounded-md bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      <PhoneIcon className="h-4 w-4 text-blue-500 inline mr-1" />
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                      className="w-full h-11 rounded-md bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 text-blue-500 inline mr-1" />
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="w-full h-11 rounded-md bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    <PaperAirplaneIcon className="h-4 w-4 text-blue-500 inline mr-1" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                    className="min-h-[300px] w-full resize-none rounded-md bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 px-3 py-2 rounded-lg border border-blue-100 dark:border-blue-800/40 flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">Question urgente ?</div>
                      <a href="tel:0766720766" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                        07 66 72 07 66
                      </a>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 px-5 rounded-md font-medium transition-all shadow-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Envoi...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <PaperAirplaneIcon className="h-4 w-4 mr-1" />
                        Envoyer
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                Informations de contact
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-2.5 rounded-lg shadow-sm">
                    <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Téléphone</h3>
                    <a href="tel:0766720766" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                      07 66 72 07 66
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Du lundi au dimanche, weekends et jours fériés inclus
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-2.5 rounded-lg shadow-sm">
                    <EnvelopeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                    <a href="mailto:contact@cabinet-mriviere.fr" className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                      contact@cabinet-mriviere.fr
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Nous répondons sous 24-48h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-2.5 rounded-lg shadow-sm">
                    <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Adresse</h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Cabinet Infirmier Marina RIVIÈRE<br />
                      130 route de Bischwiller<br />
                      67300 Schiltigheim
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-2.5 rounded-lg shadow-sm">
                    <CalendarIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Horaires</h3>
                    <div className="mt-1 bg-gray-50 dark:bg-gray-900/30 rounded-md p-2 border border-gray-100 dark:border-gray-700">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Tous les jours</span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">6h - 18h30</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Weekends/jours fériés</span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">Inclus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-52 relative border-t border-gray-200 dark:border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.7352918780894!2d7.735992399999999!3d48.620173499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b9db2ffe037d%3A0xd7d9fc66fa3c00e8!2s130%20Rte%20de%20Bischwiller%2C%2067300%20Schiltigheim!5e0!3m2!1sfr!2sfr!4v1708380020790!5m2!1sfr!2sfr" 
                className="w-full h-52 border-0" 
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-0 right-0 m-3">
                <a 
                  href="https://goo.gl/maps/ZdqEa4Tiy5vW9wgR7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded shadow-md hover:bg-blue-50 transition-colors"
                >
                  Agrandir la carte
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 mb-4">
          <p className="text-xs text-gray-500">
            Pour une prise de rendez-vous, merci de bien vouloir nous contacter par téléphone.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
