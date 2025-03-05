CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow service role access to admin_users" ON admin_users;

CREATE POLICY "Allow service role access to admin_users"
  ON admin_users
  USING (auth.role() = 'service_role');

GRANT ALL ON admin_users TO service_role;

-- Exemple d'insertion (à commenter après utilisation)
-- INSERT INTO admin_users (username, password_hash)
-- VALUES ('admin', 'votre_hash_bcrypt_ici');

-- Vérifier que la table a été créée
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'admin_users'
); 
