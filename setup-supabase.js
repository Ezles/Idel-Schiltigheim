import { createClient } from "@supabase/supabase-js";
import fs from "fs";

// Récupérer les variables d'environnement
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://fochresddtrjafkysves.supabase.co";
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvY2hyZXNkZHRyamFma3lzdmVzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTEyNTY2OSwiZXhwIjoyMDU2NzAxNjY5fQ.Ow-Ib-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo";

// Créer un client Supabase avec la clé de service
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Lire le fichier SQL
const sqlScript = fs.readFileSync("./supabase-setup.sql", "utf8");

// Fonction pour exécuter le script SQL
async function setupSupabase() {
  console.log("Début de la configuration de Supabase...");

  try {
    // Exécuter le script SQL
    const { error } = await supabase.rpc("pgexec", { query: sqlScript });

    if (error) {
      console.error("Erreur lors de l'exécution du script SQL:", error);
      return;
    }

    console.log("Configuration de Supabase terminée avec succès!");

    // Vérifier que les tables ont été créées
    const { error: cookieConsentsError } = await supabase
      .from("cookie_consents")
      .select("count", { count: "exact", head: true });

    if (cookieConsentsError) {
      console.error(
        "Erreur lors de la vérification de la table cookie_consents:",
        cookieConsentsError
      );
    } else {
      console.log("Table cookie_consents créée avec succès");
    }

    const { error: analyticsDataError } = await supabase
      .from("analytics_data")
      .select("count", { count: "exact", head: true });

    if (analyticsDataError) {
      console.error(
        "Erreur lors de la vérification de la table analytics_data:",
        analyticsDataError
      );
    } else {
      console.log("Table analytics_data créée avec succès");
    }
  } catch (err) {
    console.error("Exception lors de la configuration de Supabase:", err);
  }
}

// Exécuter la fonction
setupSupabase();
