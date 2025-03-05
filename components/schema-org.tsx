export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Cabinet Infirmier de Schiltigheim",
    url: "https://cabinet-mriviere.fr",
    logo: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    image: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    description:
      "Cabinet infirmier à Schiltigheim proposant des soins à domicile de qualité. Prise de rendez-vous facile, équipe professionnelle et disponible 7j/7.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 route de Bischwiller",
      addressLocality: "Schiltigheim",
      postalCode: "67300",
      addressCountry: "FR",
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
        opens: "07:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: [
      "Soins infirmiers à domicile",
      "Prise de sang",
      "Pansements",
      "Injections",
    ],
    availableService: {
      "@type": "MedicalProcedure",
      name: "Soins infirmiers à domicile",
      procedureType: "Soins médicaux",
    },
    sameAs: [
      "https://www.facebook.com/cabinetinfirmierschiltigheim",
      "https://www.instagram.com/cabinet_infirmier_schiltigheim",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cabinet Infirmier de Schiltigheim",
    image: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    "@id": "https://cabinet-mriviere.fr",
    url: "https://cabinet-mriviere.fr",
    telephone: "+33766720766",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 route de Bischwiller",
      addressLocality: "Schiltigheim",
      postalCode: "67300",
      addressCountry: "FR",
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
        opens: "07:00",
        closes: "20:00",
      },
    ],
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
