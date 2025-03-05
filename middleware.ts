import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const jwtSecret = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "your-secret-key-for-jwt-tokens-should-be-very-long-and-secure"
);

const ADMIN_ROUTE_PREFIX = "/dashboard-management-secure";
const LOGIN_PATH = `${ADMIN_ROUTE_PREFIX}/login`;
const REDIRECT_PATH = `${ADMIN_ROUTE_PREFIX}/redirect`;

export async function middleware(request: NextRequest) {
  // Autoriser l'accès aux fichiers de validation de certificat
  if (
    request.nextUrl.pathname.startsWith("/.well-known/pki-validation") ||
    request.nextUrl.pathname.startsWith("/.well-known/ssl-check.txt")
  ) {
    return NextResponse.next();
  }

  // Forcer HTTPS avec une redirection 301 (permanente)
  if (
    process.env.NODE_ENV === "production" &&
    !request.nextUrl.protocol.includes("https")
  ) {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 301);
  }

  if (request.nextUrl.pathname.startsWith(ADMIN_ROUTE_PREFIX)) {
    console.log("Middleware - URL:", request.nextUrl.pathname);

    if (
      request.nextUrl.pathname === LOGIN_PATH ||
      request.nextUrl.pathname === REDIRECT_PATH
    ) {
      console.log(
        "Middleware - Page de connexion ou redirection, passage direct"
      );
      return NextResponse.next();
    }

    const token = request.cookies.get("admin_token")?.value;

    console.log("Middleware - Vérification du token:", !!token);

    if (!token) {
      console.log("Middleware - Aucun token trouvé, redirection vers login");

      const loginUrl = new URL(LOGIN_PATH, request.url);

      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

      const response = NextResponse.redirect(loginUrl);

      response.cookies.delete("admin_token");

      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    }

    try {
      const { payload } = await jwtVerify(token, jwtSecret);
      console.log("Middleware - Token décodé:", payload.username, payload.role);

      if (payload.role !== "admin") {
        console.log("Middleware - Rôle invalide:", payload.role);
        throw new Error("Rôle invalide");
      }

      const currentTime = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < currentTime) {
        console.log("Middleware - Token expiré");
        throw new Error("Token expiré");
      }

      console.log("Middleware - Utilisateur authentifié, accès autorisé");
      const response = NextResponse.next();

      response.headers.set("Cache-Control", "no-store, max-age=0");
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");

      return response;
    } catch (error) {
      console.log("Middleware - Erreur de vérification du token:", error);

      const loginUrl = new URL(LOGIN_PATH, request.url);

      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

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
  const response = NextResponse.next();
  
  // Ajouter des en-têtes de sécurité à toutes les réponses
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  return response;
}

// Configurer les routes sur lesquelles le middleware doit s'exécuter
export const config = {
  matcher: [
    // Appliquer le middleware à toutes les routes
    "/(.*)",
  ],
};
