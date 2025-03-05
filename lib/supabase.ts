import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://fochresddtrjafkysves.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvY2hyZXNkZHRyamFma3lzdmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMjU2NjksImV4cCI6MjA1NjcwMTY2OX0._2C6W-MSDCIkBHLnBSxND51TnRctikq4-6dkyVyLrug";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    fetch: fetch,
  },
});

if (typeof window !== "undefined") {
  console.log("Client Supabase initialisé avec l'URL:", supabaseUrl);

  const testConnection = async () => {
    try {
      const { error } = await supabase
        .from("cookie_consents")
        .select("count", { count: "exact", head: true });

      if (error) {
        console.error(
          "Erreur lors du test de connexion à Supabase:",
          error.message
        );
      } else {
        console.log("Connexion à Supabase établie avec succès");
      }
    } catch (err) {
      console.error("Exception lors du test de connexion à Supabase:", err);
    }
  };

  testConnection();
}

export const generateAnonymousId = () => {
  if (typeof window === "undefined") return "";

  try {
    const existingId = localStorage.getItem("anonymous_user_id");
    if (existingId) {
      console.log("ID utilisateur existant récupéré:", existingId);
      return existingId;
    }

    const newId =
      "anon_" +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem("anonymous_user_id", newId);
    console.log("Nouvel ID utilisateur généré:", newId);
    return newId;
  } catch (err) {
    console.error("Erreur lors de la génération de l'ID utilisateur:", err);
    return "anon_fallback_" + Date.now();
  }
};
