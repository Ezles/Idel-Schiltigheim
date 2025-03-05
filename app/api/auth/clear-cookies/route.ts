import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Créer une réponse
    const response = NextResponse.json({
      message: "Cookies effacés avec succès",
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

    console.log("Cookies effacés");
    return response;
  } catch (error) {
    console.error("Erreur lors de l'effacement des cookies:", error);
    return NextResponse.json(
      {
        error: "Erreur serveur",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
