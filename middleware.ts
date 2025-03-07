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
  if (
    request.nextUrl.pathname.startsWith("/.well-known/pki-validation") ||
    request.nextUrl.pathname.startsWith("/.well-known/ssl-check.txt") ||
    request.nextUrl.pathname.startsWith("/.well-known/acme-challenge")
  ) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith(ADMIN_ROUTE_PREFIX)) {
    if (
      request.nextUrl.pathname === LOGIN_PATH ||
      request.nextUrl.pathname === REDIRECT_PATH
    ) {
      return NextResponse.next();
    }

    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      const loginUrl = new URL(LOGIN_PATH, request.url);

      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("admin_token");
      addSecurityHeaders(response);
      return response;
    }

    try {
      const { payload } = await jwtVerify(token, jwtSecret);

      if (payload.role !== "admin") {
        throw new Error("Rôle invalide");
      }

      const currentTime = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < currentTime) {
        throw new Error("Token expiré");
      }

      const response = NextResponse.next();
      addSecurityHeaders(response);
      return response;
    } catch (error) {
      const loginUrl = new URL(LOGIN_PATH, request.url);

      if (request.nextUrl.pathname !== LOGIN_PATH) {
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      }

      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("admin_token");
      addSecurityHeaders(response);
      return response;
    }
  }

  const response = NextResponse.next();
  addSecurityHeaders(response);
  return response;
}

function addSecurityHeaders(response: NextResponse) {
  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
}

export const config = {
  matcher: ["/(.*)",],
};
