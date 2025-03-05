"use client";

import { createClient } from "@supabase/supabase-js";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

interface AnalyticsData {
  id: number;
  user_id: string;
  page_visited: string;
  screen_size: string;
  referrer: string;
  created_at: string;
}

interface AnalyticsStats {
  totalVisits: number;
  uniqueVisitors: number;
  pageViews: Record<string, number>;
  screenSizes: Record<string, number>;
  referrers: Record<string, number>;
  visitsByDay: Record<string, number>;
}

export default function Analytics() {
  const router = useRouter();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [stats, setStats] = useState<AnalyticsStats>({
    totalVisits: 0,
    uniqueVisitors: 0,
    pageViews: {},
    screenSizes: {},
    referrers: {},
    visitsByDay: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<
    "7days" | "30days" | "90days" | "all"
  >("7days");

  const processAnalyticsData = useCallback(() => {
    if (analyticsData.length === 0) return;

    const now = new Date();
    const filteredData = analyticsData.filter((item) => {
      const itemDate = new Date(item.created_at);
      const diffTime = Math.abs(now.getTime() - itemDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (timeRange === "7days") return diffDays <= 7;
      if (timeRange === "30days") return diffDays <= 30;
      if (timeRange === "90days") return diffDays <= 90;
      return true; // "all"
    });

    const uniqueVisitors = new Set(filteredData.map((item) => item.user_id))
      .size;

    const pageViews: Record<string, number> = {};
    const screenSizes: Record<string, number> = {};
    const referrers: Record<string, number> = {};
    const visitsByDay: Record<string, number> = {};

    filteredData.forEach((item) => {
      // Page views
      const page = item.page_visited || "unknown";
      pageViews[page] = (pageViews[page] || 0) + 1;

      // Screen sizes
      const size = item.screen_size || "unknown";
      screenSizes[size] = (screenSizes[size] || 0) + 1;

      // Referrers
      const referrer = item.referrer || "direct";
      referrers[referrer] = (referrers[referrer] || 0) + 1;

      // Visits by day
      const day = formatDate(item.created_at);
      visitsByDay[day] = (visitsByDay[day] || 0) + 1;
    });

    setStats({
      totalVisits: filteredData.length,
      uniqueVisitors,
      pageViews,
      screenSizes,
      referrers,
      visitsByDay,
    });
  }, [analyticsData, timeRange]);

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
        fetchAnalyticsData();
      } catch {
        router.push("/dashboard-management-secure/login");
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (analyticsData.length > 0) {
      processAnalyticsData();
    }
  }, [analyticsData, timeRange, processAnalyticsData]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      setError(null);

      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { data, error } = await supabase
        .from("analytics_data")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setAnalyticsData(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const visitsByDayData = {
    labels: Object.keys(stats.visitsByDay),
    datasets: [
      {
        label: "Visites par jour",
        data: Object.values(stats.visitsByDay),
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
      },
    ],
  };

  const pageViewsData = {
    labels: Object.keys(stats.pageViews),
    datasets: [
      {
        label: "Pages vues",
        data: Object.values(stats.pageViews),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const screenSizesData = {
    labels: Object.keys(stats.screenSizes),
    datasets: [
      {
        label: "Tailles d&apos;écran",
        data: Object.values(stats.screenSizes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
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
        text: "Statistiques d&apos;utilisation",
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
                Données analytiques
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
              {/* Sélecteur de plage de temps */}
              <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Plage de temps</h2>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setTimeRange("7days")}
                        className={`px-4 py-2 rounded-md ${
                          timeRange === "7days"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        7 jours
                      </button>
                      <button
                        onClick={() => setTimeRange("30days")}
                        className={`px-4 py-2 rounded-md ${
                          timeRange === "30days"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        30 jours
                      </button>
                      <button
                        onClick={() => setTimeRange("90days")}
                        className={`px-4 py-2 rounded-md ${
                          timeRange === "90days"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        90 jours
                      </button>
                      <button
                        onClick={() => setTimeRange("all")}
                        className={`px-4 py-2 rounded-md ${
                          timeRange === "all"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Tout
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Résumé */}
              <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Résumé</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total des visites
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.totalVisits}
                        </dd>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Visiteurs uniques
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          {stats.uniqueVisitors}
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphiques */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Visites par jour */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Visites par jour
                    </h2>
                    <div className="h-80">
                      <Line data={visitsByDayData} options={chartOptions} />
                    </div>
                  </div>
                </div>

                {/* Pages vues */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Pages vues</h2>
                    <div className="h-80">
                      <Bar data={pageViewsData} options={chartOptions} />
                    </div>
                  </div>
                </div>

                {/* Tailles d'écran */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Tailles d&apos;écran
                    </h2>
                    <div className="h-80">
                      <Pie data={screenSizesData} />
                    </div>
                  </div>
                </div>

                {/* Référents */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Référents</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Référent
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Visites
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {Object.entries(stats.referrers).length === 0 ? (
                            <tr>
                              <td
                                colSpan={2}
                                className="px-6 py-4 text-center text-sm text-gray-500"
                              >
                                Aucune donnée disponible
                              </td>
                            </tr>
                          ) : (
                            Object.entries(stats.referrers).map(
                              ([referrer, count], index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {referrer}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {count}
                                  </td>
                                </tr>
                              )
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Détails des visites */}
              <div className="bg-white overflow-hidden shadow rounded-lg mt-8">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Détails des visites
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
                            Page visitée
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Taille d&apos;écran
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Référent
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {analyticsData.length === 0 ? (
                          <tr>
                            <td
                              colSpan={5}
                              className="px-6 py-4 text-center text-sm text-gray-500"
                            >
                              Aucune donnée disponible
                            </td>
                          </tr>
                        ) : (
                          analyticsData
                            .filter((item) => {
                              const itemDate = new Date(item.created_at);
                              if (timeRange === "7days") {
                                const sevenDaysAgo = new Date();
                                sevenDaysAgo.setDate(
                                  sevenDaysAgo.getDate() - 7
                                );
                                return itemDate >= sevenDaysAgo;
                              } else if (timeRange === "30days") {
                                const thirtyDaysAgo = new Date();
                                thirtyDaysAgo.setDate(
                                  thirtyDaysAgo.getDate() - 30
                                );
                                return itemDate >= thirtyDaysAgo;
                              }
                              return true;
                            })
                            .slice(0, 50)
                            .map((item) => (
                              <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.user_id.substring(0, 8)}...
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {item.page_visited}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.screen_size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.referrer || "Direct"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatDate(item.created_at)}
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
