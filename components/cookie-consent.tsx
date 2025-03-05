"use client";

import { Button } from "@/components/ui/button";
import { generateAnonymousId, supabase } from "@/lib/supabase";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createClient } from "@supabase/supabase-js";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export const resetCookiePreferences = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("anonymous_user_id");
    window.location.reload();
  }
};

// Configuration Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Fonction pour générer ou récupérer un ID utilisateur unique
const getUserId = (): string => {
  const userId = localStorage.getItem("user_id");

  if (!userId) {
    const newUserId = uuidv4();
    localStorage.setItem("user_id", newUserId);
    return newUserId;
  }

  return userId;
};

// Fonction pour initialiser le tracking si les cookies analytiques sont acceptés
// Note: Cette fonction n'est pas utilisée directement mais conservée pour référence future
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initializeTracking = (consent: CookieConsent) => {
  if (consent.analytics) {
    try {
      const userId = getUserId();
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      // Envoyer les données analytiques de base
      supabase
        .from("analytics_data")
        .insert({
          user_id: userId,
          page_visited: window.location.pathname,
          screen_size: `${window.innerWidth}x${window.innerHeight}`,
          referrer: document.referrer || null,
        })
        .then(({ error }) => {
          if (error) {
            console.error(
              "Erreur lors de l'enregistrement des données analytiques:",
              error
            );
          }
        });

      // Ajouter un écouteur pour les changements de page (pour les applications SPA)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const handleRouteChange = (url: string) => {
        supabase
          .from("analytics_data")
          .insert({
            user_id: userId,
            page_visited: url,
            screen_size: `${window.innerWidth}x${window.innerHeight}`,
            referrer: window.location.pathname,
          })
          .then(({ error }) => {
            if (error) {
              console.error(
                "Erreur lors de l'enregistrement des données analytiques:",
                error
              );
            }
          });
      };
    } catch (error) {
      console.error("Erreur lors de l'initialisation du tracking:", error);
    }
  }
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [configMessage, setConfigMessage] = useState("");
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const id = generateAnonymousId();
        setUserId(id);

        const isAdmin = localStorage.getItem("isAdmin") === "true";
        setShowAdminButton(isAdmin);

        const storedConsent = localStorage.getItem("cookieConsent");
        if (!storedConsent) {
          const timer = setTimeout(() => {
            setShowBanner(true);
          }, 1000);
          return () => clearTimeout(timer);
        } else {
          setConsent(JSON.parse(storedConsent));
        }
      } catch (err) {
        console.error("Erreur lors de l'initialisation des préférences:", err);
      }
    }
  }, []);

  const configureSupabase = async () => {
    setIsConfiguring(true);
    setConfigMessage("Configuration de Supabase en cours...");

    try {
      const response = await fetch("/api/setup-supabase");
      const data = await response.json();

      if (data.success) {
        setConfigMessage("Configuration de Supabase terminée avec succès!");
        storeConsentInSupabase(consent);
      } else {
        setConfigMessage(`Erreur: ${data.error}`);
      }
    } catch (err) {
      setConfigMessage(
        `Erreur: ${err instanceof Error ? err.message : "Erreur inconnue"}`
      );
    } finally {
      setTimeout(() => {
        setConfigMessage("");
        setIsConfiguring(false);
      }, 5000);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const enableAdminMode = () => {
    localStorage.setItem("isAdmin", "true");
    setShowAdminButton(true);
  };

  const storeConsentInSupabase = async (consentData: CookieConsent) => {
    if (!userId) {
      console.error("Erreur: ID utilisateur non défini");
      return;
    }

    try {
      console.log(
        "Tentative d'enregistrement des préférences pour l'utilisateur:",
        userId
      );

      const { data: insertData, error: insertError } = await supabase
        .from("cookie_consents")
        .insert({
          user_id: userId,
          necessary: consentData.necessary,
          analytics: consentData.analytics,
          marketing: consentData.marketing,
          preferences: consentData.preferences,
          updated_at: new Date().toISOString(),
        })
        .select();

      if (insertError) {
        if (insertError.code === "23505") {
          console.log(
            "L'utilisateur existe déjà, mise à jour des préférences..."
          );

          const { data: updateData, error: updateError } = await supabase
            .from("cookie_consents")
            .update({
              necessary: consentData.necessary,
              analytics: consentData.analytics,
              marketing: consentData.marketing,
              preferences: consentData.preferences,
              updated_at: new Date().toISOString(),
            })
            .eq("user_id", userId)
            .select();

          if (updateError) {
            console.error(
              "Erreur Supabase lors de la mise à jour des préférences:",
              updateError.message
            );
            console.error("Code d'erreur:", updateError.code);
            console.error("Détails:", updateError.details);
          } else {
            console.log("Préférences mises à jour avec succès:", updateData);

            if (consentData.analytics) {
              trackPageView();
            }
          }
        } else {
          console.error(
            "Erreur Supabase lors de l'enregistrement des préférences:",
            insertError.message
          );
          console.error("Code d'erreur:", insertError.code);
          console.error("Détails:", insertError.details);

          if (
            insertError.code === "42501" &&
            insertError.message.includes("row-level security policy")
          ) {
            console.log(
              "Erreur de politique de sécurité RLS - Les préférences sont stockées uniquement en local"
            );

            if (consentData.analytics) {
              trackPageView();
            }
          }
        }
      } else {
        console.log("Préférences enregistrées avec succès:", insertData);

        if (consentData.analytics) {
          trackPageView();
        }
      }
    } catch (err) {
      console.error("Exception lors de l'enregistrement des préférences:", err);
    }
  };

  const trackPageView = async () => {
    if (!userId) {
      console.error("Erreur: ID utilisateur non défini pour le suivi");
      return;
    }

    try {
      console.log(
        "Tentative d'enregistrement d'une vue de page pour l'utilisateur:",
        userId
      );

      const { data, error } = await supabase.from("analytics_data").insert({
        user_id: userId,
        page_url: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        screen_size: `${window.innerWidth}x${window.innerHeight}`,
        event_type: "page_view",
        timestamp: new Date().toISOString(),
      });

      if (error) {
        console.error(
          "Erreur Supabase lors de l'enregistrement des données d'analyse:",
          error.message
        );
        console.error("Code d'erreur:", error.code);
        console.error("Détails:", error.details);

        if (
          error.code === "42501" &&
          error.message.includes("row-level security policy")
        ) {
          console.log(
            "Erreur de politique de sécurité RLS - Les données d'analyse ne sont pas stockées"
          );
        }
      } else {
        console.log("Données d'analyse enregistrées avec succès:", data);
      }
    } catch (err) {
      console.error(
        "Exception lors de l'enregistrement des données d'analyse:",
        err
      );
    }
  };

  const acceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    storeConsentInSupabase(newConsent);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    storeConsentInSupabase(newConsent);
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    storeConsentInSupabase(consent);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleToggle = (type: keyof CookieConsent) => {
    if (type === "necessary") return;
    setConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-6xl mx-auto">
              {!showPreferences ? (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Nous respectons votre vie privée
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Nous utilisons des cookies pour améliorer votre
                      expérience, analyser le trafic et personnaliser le
                      contenu. En cliquant sur &quot;Accepter tout&quot;, vous
                      consentez à notre utilisation de tous les cookies. Vous
                      pouvez également personnaliser vos préférences.
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Pour plus d&apos;informations, consultez notre{" "}
                      <Link
                        href="/politique-confidentialite"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        politique de confidentialité
                      </Link>
                      .
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <Button
                      variant="outline"
                      className="text-sm"
                      onClick={() => setShowPreferences(true)}
                    >
                      Personnaliser
                    </Button>
                    <Button
                      variant="outline"
                      className="text-sm"
                      onClick={rejectAll}
                    >
                      Refuser tout
                    </Button>
                    <Button
                      className="text-sm bg-blue-600 hover:bg-blue-700"
                      onClick={acceptAll}
                    >
                      Accepter tout
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Préférences de cookies
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowPreferences(false)}
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Cookies nécessaires
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies sont essentiels au fonctionnement du site
                          et ne peuvent pas être désactivés.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={consent.necessary}
                          disabled
                          className="sr-only peer"
                          id="necessary"
                        />
                        <label
                          htmlFor="necessary"
                          className="flex w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        ></label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Cookies analytiques
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies nous permettent de mesurer le trafic et
                          d&apos;analyser votre comportement pour améliorer
                          notre site.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={consent.analytics}
                          onChange={() => handleToggle("analytics")}
                          className="sr-only peer"
                          id="analytics"
                        />
                        <label
                          htmlFor="analytics"
                          className="flex w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 cursor-pointer"
                        ></label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Cookies marketing
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies sont utilisés pour suivre les visiteurs
                          sur les sites web afin d&apos;afficher des publicités
                          pertinentes.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={consent.marketing}
                          onChange={() => handleToggle("marketing")}
                          className="sr-only peer"
                          id="marketing"
                        />
                        <label
                          htmlFor="marketing"
                          className="flex w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 cursor-pointer"
                        ></label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Cookies de préférences
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ces cookies permettent au site de se souvenir de vos
                          préférences et options.
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={consent.preferences}
                          onChange={() => handleToggle("preferences")}
                          className="sr-only peer"
                          id="preferences"
                        />
                        <label
                          htmlFor="preferences"
                          className="flex w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 cursor-pointer"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      className="text-sm"
                      onClick={() => setShowPreferences(false)}
                    >
                      Annuler
                    </Button>
                    <Button
                      className="text-sm bg-blue-600 hover:bg-blue-700"
                      onClick={savePreferences}
                    >
                      Enregistrer mes préférences
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton d'administration (visible uniquement en mode développement) */}
      {showAdminButton && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={configureSupabase}
            disabled={isConfiguring}
          >
            {isConfiguring ? "Configuration..." : "Configurer Supabase"}
          </Button>
          {configMessage && (
            <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded shadow text-sm">
              {configMessage}
            </div>
          )}
        </div>
      )}
    </>
  );
}
