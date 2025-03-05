import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Créer une réponse
    const response = NextResponse.json({
      message: "Déconnexion réussie",
      redirectUrl: "/dashboard-management-secure/login",
    });

    // Supprimer le cookie en définissant une date d'expiration dans le passé
    response.cookies.set("admin_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0), // Date dans le passé
      path: "/",
      sameSite: "lax",
    });

    console.log("Cookie de déconnexion défini");
    return response;
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    return NextResponse.json(
      {
        message: "Erreur lors de la déconnexion",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
