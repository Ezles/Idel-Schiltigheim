export default function ContactSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact du Cabinet Infirmier de Schiltigheim",
    description:
      "Contactez notre équipe d'infirmiers à Schiltigheim par téléphone ou via notre formulaire en ligne pour prendre rendez-vous ou obtenir des informations.",
    url: "https://cabinet-mriviere.fr/contact",
    mainEntity: {
      "@type": "MedicalOrganization",
      name: "Cabinet Infirmier de Schiltigheim",
      telephone: "+33766720766",
      email: "contact@cabinet-mriviere.fr",
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "09:00",
          closes: "12:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33766720766",
        contactType: "customer service",
        availableLanguage: ["French"],
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactSchema),
      }}
    />
  );
}
