# Cabinet Infirmier de Hautepierre

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

Site web professionnel pour le Cabinet Infirmier de Hautepierre, offrant des informations sur les services de soins infirmiers, les coordonnées et un formulaire de contact.

## 🌟 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Animations fluides avec Framer Motion
- ✅ Mode clair/sombre
- ✅ Formulaire de contact interactif
- ✅ Pages légales complètes
- ✅ Optimisé pour le SEO
- ✅ Performances optimisées

## 🚀 Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Composants UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Icônes**: [Heroicons](https://heroicons.com/)
- **Tests**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **CI/CD**: GitHub Actions
- **Package Manager**: [Bun](https://bun.sh/)

## 📋 Structure du projet

```
idel-hautepierre/
├── app/                  # Pages et routes Next.js
├── components/           # Composants React réutilisables
├── hooks/                # Hooks React personnalisés
├── lib/                  # Utilitaires et fonctions
├── public/               # Fichiers statiques
├── __tests__/            # Tests unitaires et d'intégration
└── ...                   # Fichiers de configuration
```

## 🛠️ Installation

```bash
# Installation en une commande
./setup.sh

# OU étapes manuelles:

# 1. Cloner le dépôt
git clone https://github.com/votre-repo/idel-hautepierre.git
cd idel-hautepierre

# 2. Installer les dépendances
bun install

# 3. Lancer le serveur de développement
bun dev
```

## 🧪 Tests

```bash
# Exécuter les tests unitaires
bun test

# Exécuter les tests avec surveillance des modifications
bun test:watch

# Générer un rapport de couverture
bun test:coverage
```

## 🚢 Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur la branche `main`.

- **Site web**: [https://idel-hautepierre.vercel.app](https://idel-hautepierre.vercel.app)

## 🔄 CI/CD

Le projet utilise GitHub Actions pour l'intégration et le déploiement continus. Le workflow est défini dans le fichier `.github/workflows/ci.yml`.

### Configuration du déploiement

Pour configurer le déploiement sur Vercel, vous devez définir les secrets suivants dans votre dépôt GitHub :

- `VERCEL_TOKEN` : Token d'API Vercel
- `VERCEL_ORG_ID` : ID de l'organisation Vercel
- `VERCEL_PROJECT_ID` : ID du projet Vercel pour l'application

### Étapes du workflow CI/CD

1. **Lint** : Vérifie la qualité du code avec ESLint
2. **Test** : Exécute les tests unitaires et génère les rapports de couverture
3. **Build** : Compile l'application
4. **Deploy** : Déploie l'application sur Vercel (uniquement pour la branche `main`)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email**: contact@cabinet-hautepierre.fr
- **Téléphone**: 03 88 00 00 00
