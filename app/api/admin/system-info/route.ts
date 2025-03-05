import { verifyAdminToken } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import os from "os";

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const isAdmin = await verifyAdminToken(token);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 403 }
      );
    }

    // Récupérer les informations système
    const uptime = formatUptime(os.uptime());
    const platform = os.platform();
    const memory = {
      total: formatBytes(os.totalmem()),
      free: formatBytes(os.freemem()),
      usage: Math.round((1 - os.freemem() / os.totalmem()) * 100) + "%",
    };

    // Récupérer la version de Next.js depuis package.json
    const nextVersion = process.env.NEXT_PUBLIC_NEXT_VERSION || "15.0.3";

    // Informations sur la base de données
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

    let dbStatus = "Non connecté";

    if (supabaseUrl && supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { error: dbError } = await supabase
          .from("admin_users")
          .select("count", { count: "exact", head: true })
          .limit(1);

        dbStatus = dbError ? "Erreur de connexion" : "Connecté";
      } catch {
        dbStatus = "Erreur de connexion";
      }
    }

    return NextResponse.json({
      uptime,
      platform,
      memory,
      nextVersion,
      supabaseUrl: supabaseUrl
        ? new URL(supabaseUrl).hostname
        : "Non configuré",
      dbStatus,
      nodeVersion: process.version,
      env: process.env.NODE_ENV || "development",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations système:",
      error
    );
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Fonction pour formater le temps d'activité
function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const parts = [];

  if (days > 0) parts.push(`${days} jour${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} heure${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (remainingSeconds > 0)
    parts.push(`${remainingSeconds} seconde${remainingSeconds > 1 ? "s" : ""}`);

  return parts.join(", ");
}

// Fonction pour formater les octets
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
