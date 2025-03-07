import { getAdminUserFromToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Vérification d'authentification admin...");

    const user = await getAdminUserFromToken();
    console.log("Résultat de la vérification du token:", !!user);

    if (!user) {
      console.log("Token invalide ou expiré");
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    console.log("Utilisateur authentifié:", user.username);

    const response = NextResponse.json({
      username: user.username,
      role: user.role,
    });

    response.headers.set("Cache-Control", "no-store, max-age=0");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'authentification:",
      error
    );
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
