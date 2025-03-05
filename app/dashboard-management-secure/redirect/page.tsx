"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const redirectToLogin = () => {
      console.log("Redirection vers la page de connexion...");
      window.location.href = "/dashboard-management-secure/login";
    };

    redirectToLogin();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Redirection...
        </h1>
        <p className="text-center text-gray-600">
          Vous allez être redirigé vers la page de connexion.
        </p>
      </div>
    </div>
  );
}
