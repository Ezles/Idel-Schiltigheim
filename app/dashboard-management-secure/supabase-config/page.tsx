"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SupabaseConfig() {
  const [loading, setLoading] = useState(false);
  const [configStatus, setConfigStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/admin-check", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Non authentifié");
        }
      } catch {
        router.push("/dashboard-management-secure/login");
      }
    };

    checkAuth();
  }, [router]);

  const handleConfigureSupabase = async () => {
    try {
      setLoading(true);
      setConfigStatus("loading");
      setMessage("Configuration de Supabase en cours...");

      const response = await fetch("/api/setup-supabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la configuration");
      }

      setConfigStatus("success");
      setMessage(data.message || "Configuration réussie !");
    } catch (err) {
      setConfigStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Erreur lors de la configuration"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/dashboard-management-secure"
                  className="text-xl font-semibold"
                >
                  Administration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Configuration Supabase
              </h1>
              <Link
                href="/dashboard-management-secure"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Retour au tableau de bord
              </Link>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Configuration des tables et des politiques
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Cette action va configurer les tables et les politiques de
                    sécurité dans Supabase. Cela inclut la création des tables
                    pour les consentements aux cookies, les données analytiques
                    et les utilisateurs administrateurs.
                  </p>

                  <div className="mt-6">
                    <button
                      onClick={handleConfigureSupabase}
                      disabled={loading}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Configuration en cours...
                        </>
                      ) : (
                        "Configurer Supabase"
                      )}
                    </button>
                  </div>

                  {message && (
                    <div
                      className={`mt-4 p-4 rounded-md ${
                        configStatus === "success"
                          ? "bg-green-50 text-green-800 border border-green-400"
                          : configStatus === "error"
                          ? "bg-red-50 text-red-800 border border-red-400"
                          : "bg-blue-50 text-blue-800 border border-blue-400"
                      }`}
                    >
                      {message}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg mt-8">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Informations sur la configuration
                  </h2>

                  <div className="overflow-hidden bg-gray-50 border border-gray-200 rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Tables créées
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>cookie_consents</strong> - Stocke les
                            préférences de consentement aux cookies des
                            utilisateurs
                          </li>
                          <li>
                            <strong>analytics_data</strong> - Stocke les données
                            analytiques du site
                          </li>
                          <li>
                            <strong>admin_users</strong> - Stocke les
                            informations des utilisateurs administrateurs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden bg-gray-50 border border-gray-200 rounded-md mt-4">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        Politiques de sécurité
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Row Level Security (RLS) activé sur toutes les
                            tables
                          </li>
                          <li>
                            Politiques pour permettre aux utilisateurs anonymes
                            d&apos;insérer et de lire leurs propres données de
                            consentement
                          </li>
                          <li>
                            Politiques pour permettre aux utilisateurs anonymes
                            d&apos;insérer des données analytiques
                          </li>
                          <li>
                            Accès restreint à la table des utilisateurs
                            administrateurs (service role uniquement)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
