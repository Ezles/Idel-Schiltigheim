import { createClient } from "@supabase/supabase-js";
import * as bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://fochresddtrjafkysves.supabase.co";
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvY2hyZXNkZHRyamFma3lzdmVzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTEyNTY2OSwiZXhwIjoyMDU2NzAxNjY5fQ.Ow-Ib-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo-Yx-Uo";

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const getSetupScript = async () => {
  const passwordHash = await hashPassword("vYCzZ3Q4VpUKzQzgEDxw");

  return `
-- Suppression des tables existantes pour éviter les conflits
DROP TABLE IF EXISTS cookie_consents CASCADE;
DROP TABLE IF EXISTS analytics_data CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- Création de la table cookie_consents
CREATE TABLE cookie_consents (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  necessary BOOLEAN NOT NULL DEFAULT TRUE,
  analytics BOOLEAN NOT NULL DEFAULT FALSE,
  marketing BOOLEAN NOT NULL DEFAULT FALSE,
  preferences BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ajout explicite d'une contrainte unique sur user_id
ALTER TABLE cookie_consents ADD CONSTRAINT cookie_consents_user_id_key UNIQUE (user_id);

-- Création de la table analytics_data
CREATE TABLE analytics_data (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  page_url TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_data JSONB,
  referrer TEXT,
  user_agent TEXT,
  screen_size TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table admin_users
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Insertion de l'utilisateur administrateur
INSERT INTO admin_users (username, password_hash)
VALUES ('Ezles', '${passwordHash}');

-- Activer Row Level Security (RLS) sur les tables
ALTER TABLE cookie_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Allow anonymous insert to cookie_consents" ON cookie_consents;
DROP POLICY IF EXISTS "Allow users to update their own cookie consents" ON cookie_consents;
DROP POLICY IF EXISTS "Allow users to read their own cookie consents" ON cookie_consents;
DROP POLICY IF EXISTS "Allow anonymous insert to analytics_data" ON analytics_data;
DROP POLICY IF EXISTS "Allow service role access to admin_users" ON admin_users;

-- Créer des politiques pour cookie_consents
CREATE POLICY "Allow anonymous insert to cookie_consents"
  ON cookie_consents
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow users to update their own cookie consents"
  ON cookie_consents
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow users to read their own cookie consents"
  ON cookie_consents
  FOR SELECT
  TO anon
  USING (true);

-- Créer des politiques pour analytics_data
CREATE POLICY "Allow anonymous insert to analytics_data"
  ON analytics_data
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Créer des politiques pour admin_users (accessible uniquement avec le rôle service)
CREATE POLICY "Allow service role access to admin_users"
  ON admin_users
  USING (auth.role() = 'service_role');

-- Accorder les privilèges nécessaires
GRANT ALL ON cookie_consents TO anon;
GRANT ALL ON analytics_data TO anon;
GRANT USAGE, SELECT ON SEQUENCE cookie_consents_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE analytics_data_id_seq TO anon;

-- Vérifier que les contraintes sont correctement appliquées
SELECT conname, contype, conrelid::regclass, pg_get_constraintdef(oid)
FROM pg_constraint
WHERE conrelid = 'cookie_consents'::regclass;
`;
};

export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const sqlScript = await getSetupScript();

    const { error } = await supabase.rpc("pgexec", { query: sqlScript });

    if (error) {
      console.error("Erreur lors de l'exécution du script SQL:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    const { error: cookieConsentsError } = await supabase
      .from("cookie_consents")
      .select("count", { count: "exact", head: true });

    if (cookieConsentsError) {
      console.error(
        "Erreur lors de la vérification de la table cookie_consents:",
        cookieConsentsError
      );
      return NextResponse.json(
        { success: false, error: cookieConsentsError.message },
        { status: 500 }
      );
    }

    const { error: analyticsDataError } = await supabase
      .from("analytics_data")
      .select("count", { count: "exact", head: true });

    if (analyticsDataError) {
      console.error(
        "Erreur lors de la vérification de la table analytics_data:",
        analyticsDataError
      );
      return NextResponse.json(
        { success: false, error: analyticsDataError.message },
        { status: 500 }
      );
    }

    const { error: adminUsersError } = await supabase
      .from("admin_users")
      .select("count", { count: "exact", head: true });

    if (adminUsersError) {
      console.error(
        "Erreur lors de la vérification de la table admin_users:",
        adminUsersError
      );
      return NextResponse.json(
        { success: false, error: adminUsersError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Configuration de Supabase terminée avec succès!",
    });
  } catch (err) {
    console.error("Exception lors de la configuration de Supabase:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
