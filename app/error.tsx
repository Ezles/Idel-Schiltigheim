"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            500
          </h1>
          <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            Erreur serveur
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Une erreur s&apos;est produite. Nous nous excusons pour ce
            désagrément.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              Réessayer
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-md"
              >
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
