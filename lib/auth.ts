import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const jwtSecret = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "your-secret-key-for-jwt-tokens-should-be-very-long-and-secure"
);

export async function verifyAdminToken(token: string) {
  try {
    console.log("Vérification du token JWT avec jose...");
    const { payload } = await jwtVerify(token, jwtSecret);

    console.log("Token décodé:", payload);

    if (!payload || !payload.role || payload.role !== "admin") {
      console.log("Token invalide: rôle admin manquant");
      return null;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < currentTime) {
      console.log("Token expiré");
      return null;
    }

    console.log("Token valide pour l'admin:", payload.username);
    return payload;
  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    return null;
  }
}

export async function getAdminUserFromToken() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    console.log("Récupération du token depuis les cookies:", !!token);

    if (!token) {
      console.log("Aucun token trouvé dans les cookies");
      return null;
    }

    const payload = await verifyAdminToken(token);

    if (!payload) {
      console.log("Token invalide ou expiré");
      return null;
    }

    console.log("Utilisateur admin authentifié:", payload.username);
    return {
      username: payload.username as string,
      role: payload.role as string,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    return null;
  }
}
