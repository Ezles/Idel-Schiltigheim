export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment prendre rendez-vous avec un infirmier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez prendre rendez-vous en nous appelant au 07 66 72 07 66, en nous envoyant un message via notre formulaire de contact, ou en vous rendant directement à notre cabinet pendant nos heures d'ouverture.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types de soins proposez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons une large gamme de soins infirmiers : injections, pansements, perfusions, soins post-opératoires, prélèvements sanguins, surveillance de diabète, soins d'hygiène, et bien d'autres services adaptés à vos besoins.",
        },
      },
      {
        "@type": "Question",
        name: "Les soins infirmiers sont-ils remboursés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, les soins infirmiers prescrits par un médecin sont généralement pris en charge à 60% par l'Assurance Maladie. Le reste est couvert par votre mutuelle selon votre contrat. Nous pratiquons le tiers payant pour vous éviter l'avance des frais.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous à domicile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous intervenons à domicile à Schiltigheim et dans les communes environnantes. Nous nous adaptons à votre emploi du temps pour vous proposer des horaires de passage qui vous conviennent.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il une prescription médicale pour tous les soins ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une prescription médicale est nécessaire pour la plupart des soins infirmiers, notamment pour bénéficier d'une prise en charge par l'Assurance Maladie. Certains actes comme les conseils ou la prise de tension peuvent être réalisés sans ordonnance.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
