# Cabinet Infirmier de Schiltigheim

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

Site web professionnel pour le Cabinet Infirmier de Schiltigheim, offrant des informations sur les services de soins infirmiers, les coordonnées et un formulaire de contact.

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
- **Package Manager**: [Bun](https://bun.sh/)

## 📋 Structure du projet

```
idel-schiltigheim/
├── app/                  # Pages et routes Next.js
├── components/           # Composants React réutilisables
├── hooks/                # Hooks React personnalisés
├── lib/                  # Utilitaires et fonctions
├── public/               # Fichiers statiques
└── ...                   # Fichiers de configuration
```

## 🛠️ Installation

```bash
# Installation en une commande
./setup.sh

# OU étapes manuelles:

# 1. Cloner le dépôt
git clone https://github.com/votre-repo/idel-schiltigheim.git
cd idel-schiltigheim

# 2. Installer les dépendances
bun install

# 3. Lancer le serveur de développement
bun dev
```

## 🚢 Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur la branche `main`.

- **Site web**: [https://idel-schiltigheim.vercel.app](https://idel-schiltigheim.vercel.app)

Vercel gère automatiquement le processus de CI/CD, en effectuant les vérifications de build et les tests avant chaque déploiement.

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

- **Email**: contact@cabinet-mriviere.fr
- **Téléphone**: 07 66 72 07 66
- **Adresse**: 130 route de Bischwiller, 67300 Schiltigheim
- **SIRET**: 514 183 185 00040

## Configuration de l'envoi d'emails

Le site utilise [Resend](https://resend.com) pour l'envoi d'emails depuis le formulaire de contact. Pour configurer cette fonctionnalité :

1. Créez un compte sur [Resend](https://resend.com)
2. Obtenez une clé API dans les paramètres de votre compte
3. Ajoutez cette clé dans le fichier `.env.local` :
   ```
   RESEND_API_KEY=re_votre_cle_api
   ```
4. Configurez un domaine vérifié dans votre compte Resend
5. Mettez à jour l'adresse d'expéditeur dans `app/api/send-email/route.ts` avec votre domaine vérifié

Le plan gratuit de Resend permet d'envoyer jusqu'à 100 emails par jour (3000 par mois), ce qui est largement suffisant pour un formulaire de contact.
