"use client";

import { Button } from "@/components/ui/button";
import { generateAnonymousId, supabase } from "@/lib/supabase";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export const resetCookiePreferences = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cookie_consent");
    localStorage.removeItem("user_id");
    document.cookie = "cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
};

const getUserId = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = generateAnonymousId();
    localStorage.setItem("user_id", userId);
  }
  return userId;
};

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    const id = getUserId();
    setUserId(id);
  }, []);

  const storeConsentInSupabase = async (consentData: CookieConsent) => {
    if (!userId) {
      return;
    }

    try {
      const { data: existingData, error: fetchError } = await supabase
        .from("cookie_consents")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        return;
      }

      if (existingData) {
        const { error: updateError } = await supabase
          .from("cookie_consents")
          .update({
            necessary: consentData.necessary,
            analytics: consentData.analytics,
            marketing: consentData.marketing,
            preferences: consentData.preferences,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", userId);

        if (updateError) {
          if (
            updateError.code === "42501" &&
            updateError.message.includes("row-level security policy")
          ) {
            if (consentData.analytics) {
              trackPageView();
            }
          }
        } else {
          if (consentData.analytics) {
            trackPageView();
          }
        }
      } else {
        const { error: insertError } = await supabase
          .from("cookie_consents")
          .insert({
            user_id: userId,
            necessary: consentData.necessary,
            analytics: consentData.analytics,
            marketing: consentData.marketing,
            preferences: consentData.preferences,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });

        if (insertError) {
          if (
            insertError.code === "42501" &&
            insertError.message.includes("row-level security policy")
          ) {
            if (consentData.analytics) {
              trackPageView();
            }
          }
        } else {
          if (consentData.analytics) {
            trackPageView();
          }
        }
      }
    } catch {
      console.error("Exception lors de l'enregistrement des préférences");
    }
  };

  const trackPageView = async () => {
    if (!userId) {
      return;
    }

    try {
      const { error } = await supabase.from("analytics_data").insert({
        user_id: userId,
        page_url: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        screen_size: `${window.innerWidth}x${window.innerHeight}`,
        event_type: "page_view",
        timestamp: new Date().toISOString(),
      });

      if (error && error.code === "42501" && error.message.includes("row-level security policy")) {
        // Ignorer les erreurs de politique de sécurité au niveau des lignes
      }
    } catch {
      // Ignorer les erreurs de suivi
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
            transition={{ duration: 0.4, type: "spring", damping: 20 }}
            className="fixed bottom-4 left-0 right-0 z-50 mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 sm:px-0"
          >
            <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-5">
                {!showPreferences ? (
                  <div className="flex flex-col items-start justify-between gap-4">
                    <div>
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
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          politique de confidentialité
                        </Link>
                        .
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                      <Button
                        variant="outline"
                        className="text-sm rounded-xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-colors"
                        onClick={() => setShowPreferences(true)}
                      >
                        Personnaliser
                      </Button>
                      <Button
                        variant="outline"
                        className="text-sm rounded-xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-colors"
                        onClick={rejectAll}
                      >
                        Refuser tout
                      </Button>
                      <Button
                        className="text-sm bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-xl transition-colors"
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
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300"
                        onClick={() => setShowPreferences(false)}
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="space-y-3 mb-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <div className="pr-3">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            Cookies nécessaires
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Ces cookies sont essentiels au fonctionnement du site
                            et ne peuvent pas être désactivés.
                          </p>
                        </div>
                        <Switch
                          checked={consent.necessary}
                          disabled
                          id="necessary"
                        />
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <div className="pr-3">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            Cookies analytiques
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Ces cookies nous permettent de mesurer le trafic et
                            d&apos;analyser votre comportement pour améliorer
                            notre site.
                          </p>
                        </div>
                        <Switch
                          checked={consent.analytics}
                          onCheckedChange={() => handleToggle("analytics")}
                          id="analytics"
                        />
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <div className="pr-3">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            Cookies marketing
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Ces cookies sont utilisés pour suivre les visiteurs
                            sur les sites web afin d&apos;afficher des publicités
                            pertinentes.
                          </p>
                        </div>
                        <Switch
                          checked={consent.marketing}
                          onCheckedChange={() => handleToggle("marketing")}
                          id="marketing"
                        />
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm"
                      >
                        <div className="pr-3">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            Cookies de préférences
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Ces cookies permettent au site de se souvenir de vos
                            préférences et options.
                          </p>
                        </div>
                        <Switch
                          checked={consent.preferences}
                          onCheckedChange={() => handleToggle("preferences")}
                          id="preferences"
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        className="text-sm rounded-xl hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-colors"
                        onClick={() => setShowPreferences(false)}
                      >
                        Annuler
                      </Button>
                      <Button
                        className="text-sm bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-xl transition-colors"
                        onClick={savePreferences}
                      >
                        Enregistrer mes préférences
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
