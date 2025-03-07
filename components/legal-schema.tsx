export default function LegalSchema({
  type,
  title,
  url,
}: {
  type: string;
  title: string;
  url: string;
}) {
  const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: `${type} du Cabinet Infirmier de Schiltigheim. Informations légales concernant l'utilisation de notre site web et nos services.`,
    url: url,
    publisher: {
      "@type": "MedicalOrganization",
      name: "Cabinet Infirmier de Schiltigheim",
      logo: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    },
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      url: "https://cabinet-mriviere.fr",
      name: "Cabinet Infirmier de Schiltigheim",
    },
    privacyPolicy: {
      "@type": "PrivacyPolicy",
      name: "Politique de Confidentialité",
      url: "https://cabinet-mriviere.fr/politique-confidentialite",
      cookiePolicy: {
        "@type": "CookiePolicy",
        name: "Politique de Cookies",
        url: "https://cabinet-mriviere.fr/politique-cookies",
        retentionPeriod: "P6M", // 6 mois
        legalBasis: "Consent",
      },
      dataRetention: {
        "@type": "DataRetention",
        retentionPolicy: [
          {
            "@type": "DataCategory",
            category: "Données de contact",
            retentionPeriod: "P1Y", // 1 an
          },
          {
            "@type": "DataCategory",
            category: "Préférences de cookies",
            retentionPeriod: "P6M", // 6 mois
          },
          {
            "@type": "DataCategory",
            category: "Données analytiques",
            retentionPeriod: "P1Y", // 12 mois
          },
        ],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(legalSchema),
      }}
    />
  );
}
