export default function AboutSchema() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Cabinet Infirmier de Schiltigheim",
    description:
      "Cabinet infirmier à Schiltigheim proposant des soins à domicile et au cabinet. Équipe de professionnels qualifiés pour tous types de soins infirmiers.",
    url: "https://cabinet-mriviere.fr/about",
    logo: "https://cabinet-mriviere.fr/images/logo_cabinet_schiltigheim.png",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 route de Bischwiller",
      addressLocality: "Schiltigheim",
      postalCode: "67300",
      addressCountry: "FR",
    },
    telephone: "+33766720766",
    medicalSpecialty: [
      "Soins infirmiers à domicile",
      "Prélèvements sanguins",
      "Soins de plaies",
      "Injections",
      "Soins palliatifs",
      "Diabétologie",
    ],
    employee: [
      {
        "@type": "Person",
        name: "Marie Laurent",
        jobTitle: "Infirmière DE",
      },
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Soins à domicile",
        description:
          "Injections, pansements, perfusions, soins post-opératoires, surveillance de traitement",
      },
      {
        "@type": "MedicalProcedure",
        name: "Soins au cabinet",
        description:
          "Prélèvements sanguins, vaccinations, soins de plaies, ablation de fils",
      },
      {
        "@type": "MedicalProcedure",
        name: "Soins spécifiques",
        description:
          "Soins palliatifs, diabétologie, stomathérapie, chimiothérapie à domicile",
      },
      {
        "@type": "MedicalProcedure",
        name: "Accompagnement",
        description:
          "Éducation thérapeutique, aide à la prise de médicaments, conseils en santé",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutSchema),
      }}
    />
  );
}
