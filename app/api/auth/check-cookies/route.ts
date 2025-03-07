import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const jwtSecret = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "your-secret-key-for-jwt-tokens-should-be-very-long-and-secure"
);

export async function GET(request: NextRequest) {
  try {
    const allCookies = request.cookies.getAll();
    console.log(
      "Tous les cookies:",
      allCookies.map((c) => c.name)
    );

    const adminToken = request.cookies.get("admin_token");
    console.log("Cookie admin_token trouvé:", !!adminToken);

    let isTokenValid = false;
    let tokenInfo = null;

    if (adminToken && adminToken.value) {
      try {
        const { payload } = await jwtVerify(adminToken.value, jwtSecret);

        isTokenValid = !!(payload && payload.role === "admin");

        if (isTokenValid) {
          tokenInfo = {
            username: payload.username,
            role: payload.role,
            expiresAt: payload.exp
              ? new Date(Number(payload.exp) * 1000).toISOString()
              : "inconnu",
          };
          console.log("Token JWT valide pour:", payload.username);
        } else {
          console.log("Token JWT invalide: rôle admin manquant");
        }
      } catch (error) {
        console.log("Token JWT invalide:", error);
        isTokenValid = false;
      }
    }

    const response = NextResponse.json({
      allCookies: allCookies.map((cookie) => ({
        name: cookie.name,
        value: cookie.value ? `${cookie.value.substring(0, 10)}...` : null,
        exists: !!cookie.value,
      })),
      adminToken: adminToken
        ? {
            exists: true,
            name: adminToken.name,
            valuePreview: adminToken.value
              ? `${adminToken.value.substring(0, 10)}...`
              : null,
            isValid: isTokenValid,
            info: tokenInfo,
          }
        : {
            exists: false,
            isValid: false,
          },
    });

    response.headers.set("Cache-Control", "no-store, max-age=0");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Erreur lors de la vérification des cookies:", error);
    return NextResponse.json(
      {
        error: "Erreur serveur",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
