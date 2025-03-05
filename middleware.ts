import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

// Clé secrète pour vérifier les tokens JWT
const jwtSecret = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "your-secret-key-for-jwt-tokens-should-be-very-long-and-secure"
);

// Nom de la route d'administration (obscur pour éviter les tentatives d'accès)
const ADMIN_ROUTE_PREFIX = "/dashboard-management-secure";
const LOGIN_PATH = `${ADMIN_ROUTE_PREFIX}/login`;
const REDIRECT_PATH = `${ADMIN_ROUTE_PREFIX}/redirect`;

export async function middleware(request: NextRequest) {
  // Vérifier si la requête concerne une route d'administration
  if (request.nextUrl.pathname.startsWith(ADMIN_ROUTE_PREFIX)) {
    console.log("Middleware - URL:", request.nextUrl.pathname);

    // Ne pas appliquer le middleware à la page de connexion ou à la page de redirection
    if (
      request.nextUrl.pathname === LOGIN_PATH ||
      request.nextUrl.pathname === REDIRECT_PATH
    ) {
      console.log(
        "Middleware - Page de connexion ou redirection, passage direct"
      );
      return NextResponse.next();
    }

    // Vérifier si l'utilisateur est authentifié
    const token = request.cookies.get("admin_token")?.value;

    console.log("Middleware - Vérification du token:", !!token);

    // Si aucun token n'est présent, rediriger vers la page de connexion
    if (!token) {
      console.log("Middleware - Aucun token trouvé, redirection vers login");

      // Rediriger vers la page de connexion avec l'URL de retour
      const loginUrl = new URL(LOGIN_PATH, request.url);

      // Éviter de stocker la page de login comme returnUrl pour éviter les boucles
      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

      // Créer une réponse de redirection
      const response = NextResponse.redirect(loginUrl);

      // S'assurer que le cookie est supprimé
      response.cookies.delete("admin_token");

      // Ajouter des en-têtes pour éviter la mise en cache
      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    }

    try {
      // Vérifier le token avec jose
      const { payload } = await jwtVerify(token, jwtSecret);
      console.log("Middleware - Token décodé:", payload.username, payload.role);

      // Vérifier que l'utilisateur a le rôle admin
      if (payload.role !== "admin") {
        console.log("Middleware - Rôle invalide:", payload.role);
        throw new Error("Rôle invalide");
      }

      // Vérifier l'expiration du token
      const currentTime = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < currentTime) {
        console.log("Middleware - Token expiré");
        throw new Error("Token expiré");
      }

      // Utilisateur authentifié, continuer
      console.log("Middleware - Utilisateur authentifié, accès autorisé");
      const response = NextResponse.next();

      // Ajouter des en-têtes pour éviter la mise en cache
      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    } catch (error) {
      // Token invalide ou expiré, rediriger vers la page de connexion
      console.log("Middleware - Erreur de vérification du token:", error);

      const loginUrl = new URL(LOGIN_PATH, request.url);

      // Éviter de stocker la page de login comme returnUrl pour éviter les boucles
      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

      // Créer une réponse de redirection
      const response = NextResponse.redirect(loginUrl);

      // S'assurer que le cookie est supprimé
      response.cookies.delete("admin_token");

      // Ajouter des en-têtes pour éviter la mise en cache
      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    }
  }

  // Pour les autres routes, continuer normalement
  return NextResponse.next();
}

// Configurer les routes sur lesquelles le middleware doit s'exécuter
export const config = {
  matcher: [
    // Appliquer le middleware à toutes les routes d'administration
    "/dashboard-management-secure/:path*",
  ],
};
