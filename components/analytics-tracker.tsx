"use client";

import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type EventData = {
  [key: string]: string | number | boolean | null;
};

export default function AnalyticsTracker() {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
  const userId = useMemo(() => uuidv4(), []);

  const trackPageView = useCallback(async () => {
    try {
      const { error } = await supabase.from("analytics_data").insert({
        user_id: userId,
        page_url: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        screen_size: `${window.innerWidth}x${window.innerHeight}`,
        event_type: "page_view",
      });

      if (error) {
        console.error("Erreur lors du suivi de la page:", error);
      }
    } catch (error) {
      console.error("Erreur lors du suivi de la page:", error);
    }
  }, [supabase, userId]);

  const trackEvent = useCallback(
    async (eventType: string, eventData: EventData = {}) => {
      if (!hasAnalyticsConsent) return;

      try {
        const { error } = await supabase.from("analytics_data").insert({
          user_id: userId,
          page_url: window.location.pathname,
          event_type: eventType,
          event_data: eventData,
        });

        if (error) {
          console.error("Erreur lors du suivi de l'événement:", error);
        }
      } catch (error) {
        console.error("Erreur lors du suivi de l'événement:", error);
      }
    },
    [hasAnalyticsConsent, supabase, userId]
  );

  const setupEventListeners = useCallback(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        trackEvent("click", {
          element_type: target.tagName.toLowerCase(),
          element_text: target.textContent || "",
          element_id: target.id || null,
          element_class: target.className || null,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [trackEvent]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = localStorage.getItem("cookie-consent");
      if (storedConsent) {
        const consent = JSON.parse(storedConsent);
        setHasAnalyticsConsent(consent.analytics);

        if (consent.analytics) {
          trackPageView();
          setupEventListeners();
        }
      }
    }
  }, [trackPageView, setupEventListeners]);

  return null;
}
