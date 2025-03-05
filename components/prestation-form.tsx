"use client";

const Prestations = () => {
  const prestations = [
    {
      title: "Pansements et Soins des Plaies",
      description: "Réalisation de pansements simples ou complexes, gestion des plaies chroniques ou aiguës pour une cicatrisation optimale."
    },
    {
      title: "Maintien à Domicile",
      description: "Accompagnement des personnes âgées ou dépendantes pour assurer leur bien-être tout en restant chez elles."
    },
    {
      title: "Perfusions et Injections",
      description: "Pose de perfusions, administration d'injections intraveineuses, intramusculaires ou sous-cutanées selon les prescriptions."
    },
    {
      title: "Maladies Chroniques",
      description: "Suivi des patients atteints de diabète, hypertension, ou autres pathologies chroniques pour un contrôle régulier."
    },
    {
      title: "Soins Palliatifs",
      description: "Accompagnement des patients en fin de vie et soutien de leur entourage avec des soins personnalisés et respectueux."
    },
    {
      title: "Oncologie",
      description: "Soins adaptés pour les patients atteints de cancer : suivi des traitements, gestion des effets secondaires, accompagnement global."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Prestations Proposées
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Notre équipe d&apos;infirmiers qualifiés propose une large gamme de soins personnalisés pour répondre à vos besoins spécifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {prestations.map((prestation, index) => (
          <div
            key={`prestation-${index}`}
            className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {prestation.title}
            </h3>
            <div className="w-12 h-0.5 bg-blue-500 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">
              {prestation.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prestations;
