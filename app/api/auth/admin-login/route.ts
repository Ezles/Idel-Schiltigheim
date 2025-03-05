import { createClient } from "@supabase/supabase-js";
import { compare } from "bcryptjs";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

// Clé secrète pour signer les tokens JWT
const jwtSecret = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "your-secret-key-for-jwt-tokens-should-be-very-long-and-secure"
);

// Assurez-vous d'utiliser les variables d'environnement exactement comme elles sont définies
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    console.log("Tentative de connexion pour l'utilisateur:", username);
    console.log("URL Supabase:", supabaseUrl);
    console.log("Clé service définie:", !!supabaseServiceKey);

    // Vérifier si les variables d'environnement sont définies
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Variables d'environnement Supabase manquantes");
      return NextResponse.json(
        { message: "Erreur de configuration du serveur" },
        { status: 500 }
      );
    }

    if (!username || !password) {
      console.log("Nom d'utilisateur ou mot de passe manquant");
      return NextResponse.json(
        { message: "Nom d'utilisateur et mot de passe requis" },
        { status: 400 }
      );
    }

    // Créer le client Supabase avec les bonnes clés
    // Assurez-vous que la clé de service est correctement utilisée
    console.log("Création du client Supabase...");
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    console.log("Recherche de l'utilisateur dans la base de données...");
    try {
      const { data, error } = await supabase
        .from("admin_users")
        .select("username, password_hash")
        .eq("username", username)
        .single();

      if (error) {
        console.log("Erreur lors de la recherche de l'utilisateur:", error);
        return NextResponse.json(
          {
            message: "Identifiants invalides",
            error: error.message,
            details: error,
          },
          { status: 401 }
        );
      }

      if (!data) {
        console.log("Aucun utilisateur trouvé avec ce nom d'utilisateur");
        return NextResponse.json(
          { message: "Identifiants invalides" },
          { status: 401 }
        );
      }

      console.log("Utilisateur trouvé, vérification du mot de passe...");

      const passwordValid = await compare(password, data.password_hash);

      console.log(
        "Résultat de la vérification du mot de passe:",
        passwordValid
      );

      if (!passwordValid) {
        console.log("Mot de passe invalide");
        return NextResponse.json(
          { message: "Identifiants invalides" },
          { status: 401 }
        );
      }

      console.log(
        "Mot de passe valide, mise à jour de la date de dernière connexion..."
      );
      const { error: updateError } = await supabase
        .from("admin_users")
        .update({ last_login: new Date().toISOString() })
        .eq("username", username);

      if (updateError) {
        console.log(
          "Erreur lors de la mise à jour de la date de connexion:",
          updateError
        );
        // On continue quand même, ce n'est pas critique
      }

      console.log("Génération du token JWT avec jose...");
      // Créer un token JWT avec jose au lieu de jsonwebtoken
      const token = await new SignJWT({
        username: data.username,
        role: "admin",
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(jwtSecret);

      console.log("Création de la réponse avec le cookie...");
      const response = NextResponse.json({
        message: "Connexion réussie",
        user: {
          username: data.username,
        },
        redirectUrl: "/dashboard-management-secure",
      });

      // Utiliser directement la réponse pour définir le cookie
      // Assurez-vous que le nom du cookie correspond à celui utilisé dans le middleware
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 24 heures en secondes
        path: "/",
        sameSite: "lax",
      });

      console.log(
        "Cookie défini dans la réponse:",
        response.cookies.get("admin_token")
      );
      console.log("Connexion réussie pour l'utilisateur:", username);

      // Ajouter des en-têtes pour éviter la mise en cache
      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    } catch (dbError) {
      console.error("Erreur lors de l'accès à la base de données:", dbError);
      return NextResponse.json(
        {
          message: "Erreur de connexion à la base de données",
          error: dbError instanceof Error ? dbError.message : String(dbError),
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erreur de connexion:", error);
    return NextResponse.json(
      {
        message: "Erreur de connexion",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
