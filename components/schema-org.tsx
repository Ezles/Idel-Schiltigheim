export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://cabinet-mriviere.fr/#organization",
    name: "Cabinet Infirmier Marina RIVIÈRE Schiltigheim",
    alternateName: [
      "Cabinet Infirmier de Schiltigheim",
      "Cabinet Infirmier Marina RIVIÈRE",
      "Infirmiers Schiltigheim"
    ],
    url: "https://cabinet-mriviere.fr",
    logo: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    image: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    description:
      "Cabinet infirmier Marina RIVIÈRE à Schiltigheim proposant des soins infirmiers à domicile de qualité 7j/7. Prise de rendez-vous facile, équipe professionnelle disponible pour tous types de soins : prélèvements sanguins, pansements, perfusions, surveillance diabète.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 route de Bischwiller",
      addressLocality: "Schiltigheim",
      postalCode: "67300",
      addressCountry: "FR",
      addressRegion: "Bas-Rhin"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.6156",
      longitude: "7.7454",
    },
    telephone: "+33766720766",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "18:30",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Schiltigheim",
        sameAs: "https://fr.wikipedia.org/wiki/Schiltigheim"
      },
      {
        "@type": "City",
        name: "Bischheim"
      },
      {
        "@type": "City",
        name: "Hoenheim"
      },
      {
        "@type": "City",
        name: "Strasbourg Nord"
      }
    ],
    keywords: "infirmier, soins à domicile, Schiltigheim, prise de sang, pansements, perfusions, injections, cabinet infirmier, soins infirmiers, 67300",
    priceRange: "$$",
    medicalSpecialty: [
      "Soins infirmiers à domicile",
      "Prise de sang",
      "Pansements",
      "Injections",
      "Perfusions",
      "Soins des plaies",
      "Chimiothérapie à domicile",
      "Soins palliatifs",
      "Surveillance diabète"
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Soins infirmiers à domicile",
        procedureType: "Soins médicaux",
        description: "Soins infirmiers à domicile 7j/7 à Schiltigheim et environs"
      },
      {
        "@type": "MedicalProcedure",
        name: "Prélèvements sanguins",
        procedureType: "Diagnostic",
        description: "Prélèvements sanguins à domicile ou au cabinet sur prescription médicale"
      },
      {
        "@type": "MedicalProcedure",
        name: "Pansements et soins des plaies",
        procedureType: "Soins médicaux",
        description: "Soins de plaies, pansements simples ou complexes"
      },
      {
        "@type": "MedicalProcedure",
        name: "Perfusions et injections",
        procedureType: "Soins médicaux",
        description: "Administration de médicaments par voie intraveineuse, sous-cutanée ou intramusculaire"
      }
    ],
    sameAs: [
      "https://www.facebook.com/cabinetinfirmierschiltigheim",
      "https://www.instagram.com/cabinet_infirmier_schiltigheim",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cabinet-mriviere.fr/#business",
    name: "Cabinet Infirmier Marina RIVIÈRE Schiltigheim",
    alternateName: "Cabinet Infirmier de Schiltigheim",
    image: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    url: "https://cabinet-mriviere.fr",
    telephone: "+33766720766",
    email: "contact@cabinet-mriviere.fr",
    currenciesAccepted: "EUR",
    paymentAccepted: "Carte Vitale, Espèces, Chèque, Carte Bancaire",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 route de Bischwiller",
      addressLocality: "Schiltigheim",
      postalCode: "67300",
      addressCountry: "FR",
      addressRegion: "Bas-Rhin"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "48.6156",
        longitude: "7.7454"
      },
      geoRadius: "10000",
      description: "Schiltigheim, Bischheim, Hoenheim, Strasbourg Nord"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "18:30",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Infirmiers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soins à domicile",
            description: "Interventions infirmières 7j/7 au domicile des patients"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prélèvements sanguins",
            description: "Prises de sang et analyses médicales"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soins des plaies",
            description: "Pansements et surveillance de plaies"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([schema, localBusiness]),
      }}
    />
  );
}
