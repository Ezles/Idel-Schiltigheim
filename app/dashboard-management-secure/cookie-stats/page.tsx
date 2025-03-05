"use client";

import { createClient } from "@supabase/supabase-js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

interface CookieConsent {
  id: number;
  user_id: string;
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  created_at: string;
  updated_at: string;
}

interface CookieStats {
  total: number;
  necessary: number;
  preferences: number;
  analytics: number;
  marketing: number;
}

export default function CookieStats() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [consents, setConsents] = useState<CookieConsent[]>([]);
  const [stats, setStats] = useState<CookieStats>({
    total: 0,
    necessary: 0,
    preferences: 0,
    analytics: 0,
    marketing: 0,
  });
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

        fetchCookieConsents();
      } catch {
        router.push("/dashboard-management-secure/login");
      }
    };

    checkAuth();
  }, [router]);

  const fetchCookieConsents = async () => {
    try {
      setLoading(true);
      setError(null);

      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { data, error } = await supabase
        .from("cookie_consents")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setConsents(data);

        const total = data.length;
        const necessary = data.filter((c) => c.necessary).length;
        const preferences = data.filter((c) => c.preferences).length;
        const analytics = data.filter((c) => c.analytics).length;
        const marketing = data.filter((c) => c.marketing).length;

        setStats({
          total,
          necessary,
          preferences,
          analytics,
          marketing,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: ["Nécessaires", "Préférences", "Analytiques", "Marketing"],
    datasets: [
      {
        label: "Consentements",
        data: [
          stats.necessary,
          stats.preferences,
          stats.analytics,
          stats.marketing,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Statistiques des consentements aux cookies",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

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
                Statistiques des cookies
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
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}

            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Résumé</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total des consentements
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.total}
                        </dd>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Cookies nécessaires
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.necessary}
                        </dd>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Cookies de préférences
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.preferences}
                        </dd>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Cookies analytiques
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.analytics}
                        </dd>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Cookies marketing
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.marketing}
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Graphique</h2>
                  <div className="h-80">
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Détails des consentements
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            ID Utilisateur
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Nécessaires
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Préférences
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Analytiques
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Marketing
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date de création
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Dernière mise à jour
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {consents.length === 0 ? (
                          <tr>
                            <td
                              colSpan={7}
                              className="px-6 py-4 text-center text-sm text-gray-500"
                            >
                              Aucune donnée disponible
                            </td>
                          </tr>
                        ) : (
                          consents.map((consent) => (
                            <tr key={consent.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {consent.user_id.substring(0, 8)}...
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    consent.necessary
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {consent.necessary ? "Oui" : "Non"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    consent.preferences
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {consent.preferences ? "Oui" : "Non"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    consent.analytics
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {consent.analytics ? "Oui" : "Non"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    consent.marketing
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {consent.marketing ? "Oui" : "Non"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(consent.created_at)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(consent.updated_at)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
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
