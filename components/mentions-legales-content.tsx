"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function MentionsLegalesContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-12 pt-32">
          <div className="mb-12">
            <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
              Mentions{" "}
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                Légales
              </span>
            </h1>
            <div className="h-px w-20 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Informations légales concernant le Cabinet Infirmier de
              Schiltigheim et l&apos;utilisation de ce site web.
            </p>
          </div>

          <div className="space-y-6">
            {/* Cards without animations */}
            {[
              "Éditeur du site",
              "Hébergement",
              "Propriété intellectuelle",
              "Responsabilité",
              "Protection des données personnelles",
            ].map((title, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden"
              >
                <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
                  <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
                  <p>Chargement du contenu...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-2xl font-light mb-2 text-gray-900 dark:text-gray-100">
            Mentions{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Légales
            </span>
          </h1>
          <div className="h-px w-20 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Informations légales concernant le Cabinet Infirmier de Schiltigheim
            et l&apos;utilisation de ce site web.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Éditeur du site
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                <strong>Cabinet Infirmier de Schiltigheim</strong>
                <br />
                130 route de Bischwiller
                <br />
                67300 Schiltigheim
                <br />
                Téléphone : 07 66 72 07 66
                <br />
                SIRET : 514 183 185 00040
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Hébergement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Ce site est hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Propriété intellectuelle
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                etc.) est protégé par les lois relatives à la propriété
                intellectuelle. Toute reproduction ou représentation, totale ou
                partielle, de ce site ou de son contenu, par quelque procédé que
                ce soit, sans autorisation expresse, est interdite et
                constituerait une contrefaçon.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Responsabilité
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Le Cabinet Infirmier de Schiltigheim s&apos;efforce
                d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, il ne peut
                garantir l&apos;exactitude, la précision ou l&apos;exhaustivité
                des informations mises à disposition sur ce site. En
                conséquence, le Cabinet Infirmier de Schiltigheim décline toute
                responsabilité pour les éventuelles imprécisions, inexactitudes
                ou omissions portant sur des informations disponibles sur ce
                site.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Protection des données personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), nous nous engageons à protéger la confidentialité de vos
                données personnelles. Pour plus d&apos;informations sur la façon
                dont nous traitons vos données, veuillez consulter notre
                politique de confidentialité.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Collecte et traitement des données personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p className="mb-3">
                Le Cabinet Infirmier de Schiltigheim collecte des informations
                personnelles uniquement lorsque cela est nécessaire pour fournir
                ses services. Les données collectées via le formulaire de
                contact incluent :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
              </ul>
              <p>
                Ces informations sont utilisées uniquement pour répondre à vos
                demandes et ne sont pas partagées avec des tiers sans votre
                consentement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Vos droits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p className="mb-3">
                Conformément au{" "}
                <strong>
                  Règlement Général sur la Protection des Données (RGPD)
                </strong>
                , vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Droit d&apos;accès</strong> : Vous pouvez demander
                  quelles données nous détenons sur vous.
                </li>
                <li>
                  <strong>Droit de rectification</strong> : Vous pouvez corriger
                  vos informations si elles sont incorrectes.
                </li>
                <li>
                  <strong>Droit d&apos;opposition</strong> : Vous pouvez vous
                  opposer à l&apos;utilisation de vos données pour certaines
                  finalités.
                </li>
                <li>
                  <strong>Droit d&apos;effacement</strong> : Vous pouvez
                  demander la suppression de vos données.
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : Vous pouvez demander
                  une copie de vos données dans un format structuré.
                </li>
                <li>
                  <strong>Droit à la limitation du traitement</strong> : Vous
                  pouvez demander la suspension temporaire du traitement de vos
                  données.
                </li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous par e-mail à{" "}
                <a
                  href="mailto:contact@cabinet-mriviere.fr"
                  className="text-blue-500"
                >
                  contact@cabinet-mriviere.fr
                </a>{" "}
                ou par téléphone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Conservation des données
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p className="mb-3">
                Nous conservons vos données personnelles pendant une durée
                limitée :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Données de contact</strong> : 1 an après votre
                  dernière interaction avec nous.
                </li>
                <li>
                  <strong>Préférences de cookies</strong> : 6 mois.
                </li>
                <li>
                  <strong>Données analytiques</strong> : 12 mois.
                </li>
              </ul>
              <p>
                Vous pouvez demander la suppression de vos données à tout moment
                en nous contactant.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Base légale du traitement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p className="mb-3">
                Nous traitons vos données personnelles sur les bases légales
                suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Consentement</strong> : Lorsque vous acceptez
                  l&apos;utilisation de cookies non essentiels ou que vous nous
                  contactez via notre formulaire.
                </li>
                <li>
                  <strong>Intérêt légitime</strong> : Pour améliorer notre site
                  web et nos services, et pour assurer la sécurité de notre
                  site.
                </li>
                <li>
                  <strong>Obligation légale</strong> : Pour respecter nos
                  obligations légales, notamment en matière de conservation des
                  données.
                </li>
              </ul>
              <p>
                Vous pouvez retirer votre consentement à tout moment en nous
                contactant ou en modifiant vos préférences de cookies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden">
            <CardHeader className="pb-2 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-sm uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">
                Services tiers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-300 pt-4">
              <p className="mb-3">
                Notre site utilise les services tiers suivants :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Vercel</strong> : Pour l&apos;hébergement de notre
                  site web.
                </li>
                <li>
                  <strong>Supabase</strong> : Pour la gestion des préférences de
                  cookies et le stockage sécurisé des données.
                </li>
              </ul>
              <p>
                Ces services sont conformes au RGPD et mettent en œuvre des
                mesures de sécurité appropriées pour protéger vos données.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
