# Portfolio Gavin Rottet - Développeur Full-Stack

Un portfolio moderne et responsive pour Gavin Rottet, développeur web full-stack spécialisé en Next.js, Prisma et Tailwind CSS.

## 🚀 Technologies Utilisées

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Base de données**: Prisma ORM avec MySQL
- **Animations**: Framer Motion
- **Intégrations**: Cal.com pour la prise de rendez-vous
- **Déploiement**: Optimisé pour Vercel

## 🎨 Design

- **Thème**: Sombre "gamer" avec des accents verts/bleutés
- **Responsive**: Parfaitement adapté à tous les appareils
- **Effets visuels**: Formes géométriques abstraites, animations fluides
- **Accessibilité**: Respect des standards d'accessibilité

## 📁 Structure du Projet

```
src/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux et thème
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants shadcn/ui
│   ├── About.tsx         # Section À Propos
│   ├── CalEmbed.tsx      # Intégration Cal.com
│   ├── Contact.tsx       # Section Contact
│   ├── CV.tsx            # Gestion du CV
│   ├── CustomIcon.tsx    # Icônes personnalisées
│   ├── Experience.tsx    # Expériences professionnelles
│   ├── Footer.tsx        # Pied de page
│   ├── Header.tsx        # Navigation
│   ├── Hero.tsx          # Section d'accueil
│   ├── Projects.tsx      # Projets réalisés
│   ├── Section.tsx       # Wrapper de section
│   └── Skills.tsx        # Compétences
└── lib/                  # Utilitaires
    ├── prisma.ts         # Client Prisma
    └── utils.ts          # Utilitaires généraux
```

## 🛠️ Installation et Démarrage

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   ```bash
   cp .env.example .env
   # Éditer .env avec vos configurations
   ```

4. **Configurer la base de données**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

6. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📋 Fonctionnalités

### 🏠 Page d'Accueil
- Hero section avec animation
- Navigation fluide entre sections
- Effets visuels et animations

### 👤 À Propos
- Informations personnelles complètes
- Coordonnées de contact
- Intérêts et langues

### 🛠️ Compétences
- Compétences techniques organisées par catégories
- Soft skills
- Visualisation du niveau d'expertise

### 💼 Expériences Professionnelles
- Stage principal au Centre de Réadaptation de Mulhouse
- Ancien stage chez Abraxas (Suisse)
- Storytelling axé sur les résultats et bénéfices

### 🚀 Projets Réalisés
- Application de gestion des interventions médicales
- Projets de formation et de groupe
- Galerie d'images et descriptions détaillées

### 📄 Gestion du CV
- Upload de CV personnalisé
- Prévisualisation PDF
- Téléchargement et impression

### 📞 Contact
- Intégration Cal.com pour prise de rendez-vous
- Formulaire de contact
- Informations de contact directes

## 🎯 Configuration Cal.com

Le portfolio intègre Cal.com avec la configuration suivante :
- **Username**: gavin-rottet
- **Brand Color**: #10B981 (vert)
- **Theme**: dark
- **Layout**: month_view

## 🗄️ Base de Données

### Modèles Prisma

- **Project**: Gestion des projets (titre, description, technologies, liens)
- **Experience**: Expériences professionnelles (entreprise, période, réalisations)
- **CV**: Gestion des fichiers CV (nom, chemin, statut actif)

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Variables d'environnement requises

```env
DATABASE_URL="mysql://username:password@host:port/database"
CALCOM_USERNAME="gavin-rottet"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Mobile**: Navigation optimisée, cartes empilées
- **Tablet**: Layout adaptatif, grilles 2 colonnes
- **Desktop**: Layout complet, grilles 3 colonnes

## 🎨 Personnalisation

### Couleurs du thème
- **Primary**: Vert (#10B981)
- **Accent**: Bleu (#3B82F6)
- **Background**: Sombre avec dégradés
- **Text**: Blanc/Gris clair

### Animations
- Transitions fluides entre sections
- Effets de survol sur les éléments interactifs
- Animations d'apparition au scroll

## 📞 Support

Pour toute question ou support :
- **Email**: gavinrottet2005@gmail.com
- **Téléphone**: 0768267956
- **LinkedIn**: [linkedin.com/in/gavin-rottet](https://linkedin.com/in/gavin-rottet)
- **GitHub**: [github.com/gavinrottet](https://github.com/gavinrottet)

## 📄 Licence

© 2025 Gavin Rottet. Tous droits réservés.

---

*Réalisé avec ❤️ par Gavin Rottet*