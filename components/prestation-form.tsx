const Prestations = () => {
  return (
    <section
      id="services"
      className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Prestations Proposées
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Pansements et Soins des Plaies
          </h3>
          <p className="text-gray-600">
            Réalisation de pansements simples ou complexes, gestion des plaies
            chroniques ou aiguës pour une cicatrisation optimale.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Maintien à Domicile
          </h3>
          <p className="text-gray-600">
            Accompagnement des personnes âgées ou dépendantes pour assurer leur
            bien-être tout en restant chez elles.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Perfusions et Injections
          </h3>
          <p className="text-gray-600">
            Pose de perfusions, administration d&apos;injections intraveineuses,
            intramusculaires ou sous-cutanées selon les prescriptions.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Maladies Chroniques
          </h3>
          <p className="text-gray-600">
            Suivi des patients atteints de diabète, hypertension, ou autres
            pathologies chroniques pour un contrôle régulier.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Soins Palliatifs
          </h3>
          <p className="text-gray-600">
            Accompagnement des patients en fin de vie et soutien de leur
            entourage avec des soins personnalisés et respectueux.
          </p>
        </div>

        {/* Card 6 */}
        <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Oncologie
          </h3>
          <p className="text-gray-600">
            Soins adaptés pour les patients atteints de cancer : suivi des
            traitements, gestion des effets secondaires, accompagnement global.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prestations;
