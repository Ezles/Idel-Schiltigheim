"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

type EventData = {
  [key: string]: string | number | boolean | null;
};

type CookieConsent = {
  id: number;
  user_id: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  created_at: string;
  updated_at: string;
};

type AnalyticsData = {
  id: number;
  user_id: string;
  page_url: string;
  event_type: string;
  event_data: EventData | null;
  referrer: string | null;
  user_agent: string;
  screen_size: string;
  timestamp: string;
};

export default function AdminDashboard() {
  const [cookieConsents, setCookieConsents] = useState<CookieConsent[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("consents");
  const [pageViewCount, setPageViewCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [eventTypeCount, setEventTypeCount] = useState<{
    [key: string]: number;
  }>({});

  const authenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data: consents, error: consentsError } = await supabase
        .from("cookie_consents")
        .select("*")
        .order("created_at", { ascending: false });

      if (consentsError) throw consentsError;
      setCookieConsents(consents || []);

      const { data: analytics, error: analyticsError } = await supabase
        .from("analytics_data")
        .select("*")
        .order("timestamp", { ascending: false })
        .limit(100);

      if (analyticsError) throw analyticsError;
      setAnalyticsData(analytics || []);

      if (analytics) {
        const pageViews = analytics.filter(
          (item) => item.event_type === "page_view"
        );
        setPageViewCount(pageViews.length);

        const uniqueUsers = new Set(analytics.map((item) => item.user_id));
        setUserCount(uniqueUsers.size);

        const eventCounts: { [key: string]: number } = {};
        analytics.forEach((item) => {
          eventCounts[item.event_type] =
            (eventCounts[item.event_type] || 0) + 1;
        });
        setEventTypeCount(eventCounts);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des données:", err);
      setError("Erreur lors de la récupération des données");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("fr-FR");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Tableau de bord d&apos;administration</CardTitle>
            <CardDescription>
              Veuillez vous authentifier pour accéder aux données
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={authenticate}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit">Se connecter</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Tableau de bord d&apos;administration
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Vues de page</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pageViewCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Utilisateurs uniques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{userCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Taux de consentement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {cookieConsents.length > 0
                ? `${Math.round(
                    (cookieConsents.filter((c) => c.analytics).length /
                      cookieConsents.length) *
                      100
                  )}%`
                : "0%"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="consents">Consentements</TabsTrigger>
          <TabsTrigger value="analytics">Données d&apos;analyse</TabsTrigger>
          <TabsTrigger value="events">Types d&apos;événements</TabsTrigger>
        </TabsList>

        <TabsContent value="consents">
          <Card>
            <CardHeader>
              <CardTitle>Consentements des utilisateurs</CardTitle>
              <CardDescription>
                Liste des consentements enregistrés
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Chargement des données...</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Utilisateur</TableHead>
                        <TableHead>Nécessaire</TableHead>
                        <TableHead>Analytique</TableHead>
                        <TableHead>Marketing</TableHead>
                        <TableHead>Préférences</TableHead>
                        <TableHead>Dernière mise à jour</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cookieConsents.map((consent) => (
                        <TableRow key={consent.id}>
                          <TableCell className="font-medium">
                            {consent.user_id.substring(0, 10)}...
                          </TableCell>
                          <TableCell>
                            {consent.necessary ? "✅" : "❌"}
                          </TableCell>
                          <TableCell>
                            {consent.analytics ? "✅" : "❌"}
                          </TableCell>
                          <TableCell>
                            {consent.marketing ? "✅" : "❌"}
                          </TableCell>
                          <TableCell>
                            {consent.preferences ? "✅" : "❌"}
                          </TableCell>
                          <TableCell>
                            {formatDate(consent.updated_at)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Données d&apos;analyse</CardTitle>
              <CardDescription>
                Dernières 100 interactions enregistrées
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Chargement des données...</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Utilisateur</TableHead>
                        <TableHead>Page</TableHead>
                        <TableHead>Type d&apos;événement</TableHead>
                        <TableHead>Taille d&apos;écran</TableHead>
                        <TableHead>Date et heure</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {analyticsData.map((data) => (
                        <TableRow key={data.id}>
                          <TableCell className="font-medium">
                            {data.user_id.substring(0, 10)}...
                          </TableCell>
                          <TableCell>{data.page_url}</TableCell>
                          <TableCell>{data.event_type}</TableCell>
                          <TableCell>{data.screen_size}</TableCell>
                          <TableCell>{formatDate(data.timestamp)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Types d&apos;événements</CardTitle>
              <CardDescription>
                Répartition des événements par type
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Chargement des données...</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type d&apos;événement</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Pourcentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(eventTypeCount).map(
                        ([eventType, count]) => (
                          <TableRow key={eventType}>
                            <TableCell className="font-medium">
                              {eventType}
                            </TableCell>
                            <TableCell>{count}</TableCell>
                            <TableCell>
                              {Math.round((count / analyticsData.length) * 100)}
                              %
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button onClick={fetchData} disabled={isLoading}>
          Rafraîchir les données
        </Button>
      </div>
    </div>
  );
}
