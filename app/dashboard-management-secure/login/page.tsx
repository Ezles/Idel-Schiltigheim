"use client";

import LoginForm from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 dark:bg-blue-700 p-6 flex justify-center items-center">
            <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="relative w-28 h-28">
                <Image
                  src="/images/logo_cabinet_schiltigheim.png"
                  alt="Logo Cabinet Infirmier Marina RIVIÈRE"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Espace Administration
            </h1>

            <LoginForm />
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Cabinet Infirmier Marina RIVIÈRE — Espace sécurisé
        </div>
      </div>
    </div>
  );
}
