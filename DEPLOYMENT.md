# Guide de Déploiement - Portfolio Gavin Rottet

## 🚀 Déploiement sur Vercel (Recommandé)

### 1. Préparation du Repository

```bash
# Initialiser Git si ce n'est pas déjà fait
git init
git add .
git commit -m "Initial commit: Portfolio complet"

# Créer un repository sur GitHub
# Puis connecter le repository local
git remote add origin https://github.com/gavinrottet/portfolio.git
git push -u origin main
```

### 2. Configuration Vercel

1. **Se connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub

2. **Importer le projet**
   - Cliquer sur "New Project"
   - Sélectionner le repository `portfolio`
   - Vercel détectera automatiquement Next.js

3. **Configurer les variables d'environnement**
   ```env
   DATABASE_URL=mysql://username:password@host:port/database
   CALCOM_USERNAME=gavin-rottet
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

4. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre la fin du build
   - Le site sera disponible sur `https://your-project.vercel.app`

### 3. Configuration de la Base de Données

#### Option A: PlanetScale (Recommandé pour MySQL)

1. **Créer un compte PlanetScale**
   - Aller sur [planetscale.com](https://planetscale.com)
   - Créer un compte gratuit

2. **Créer une base de données**
   ```bash
   # Installer le CLI PlanetScale
   npm install -g @planetscale/cli
   
   # Se connecter
   pscale auth login
   
   # Créer une base de données
   pscale database create portfolio
   
   # Créer une branche
   pscale branch create portfolio main
   
   # Obtenir l'URL de connexion
   pscale connect portfolio main
   ```

3. **Configurer Prisma**
   ```bash
   # Générer le client Prisma
   npx prisma generate
   
   # Pousser le schéma
   npx prisma db push
   ```

#### Option B: Railway (Alternative)

1. **Créer un compte Railway**
   - Aller sur [railway.app](https://railway.app)
   - Créer un compte

2. **Créer une base MySQL**
   - Cliquer sur "New Project"
   - Sélectionner "MySQL"
   - Noter l'URL de connexion

### 4. Configuration Cal.com

1. **Créer un compte Cal.com**
   - Aller sur [cal.com](https://cal.com)
   - Créer un compte avec le username `gavin-rottet`

2. **Configurer les disponibilités**
   - Définir les créneaux disponibles
   - Configurer les types d'événements
   - Personnaliser le thème (couleur verte)

3. **Tester l'intégration**
   - Vérifier que le calendrier s'affiche correctement
   - Tester la prise de rendez-vous

## 🔧 Configuration Post-Déploiement

### 1. Domaine Personnalisé

1. **Acheter un domaine**
   - Recommandé: `gavinrottet.dev` ou `gavinrottet.com`

2. **Configurer DNS**
   ```
   Type: CNAME
   Name: www
   Value: your-project.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

3. **Ajouter le domaine dans Vercel**
   - Aller dans les paramètres du projet
   - Ajouter le domaine personnalisé
   - Configurer SSL automatique

### 2. Optimisations SEO

1. **Google Search Console**
   - Ajouter le site
   - Soumettre le sitemap
   - Configurer les métadonnées

2. **Google Analytics**
   - Créer un compte GA4
   - Ajouter le code de suivi
   - Configurer les événements

### 3. Monitoring et Performance

1. **Vercel Analytics**
   - Activer dans les paramètres du projet
   - Surveiller les performances

2. **Sentry (Optionnel)**
   - Intégrer pour le monitoring d'erreurs
   - Configurer les alertes

## 📱 Tests et Validation

### 1. Tests Fonctionnels

- [ ] Navigation entre sections
- [ ] Formulaire de contact
- [ ] Intégration Cal.com
- [ ] Upload/téléchargement CV
- [ ] Responsive design
- [ ] Performance mobile

### 2. Tests Cross-Browser

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 3. Tests d'Accessibilité

- [ ] Navigation au clavier
- [ ] Lecteurs d'écran
- [ ] Contraste des couleurs
- [ ] Alt text des images

## 🚨 Dépannage

### Problèmes Courants

1. **Erreur de build Vercel**
   ```bash
   # Vérifier les logs de build
   # S'assurer que toutes les dépendances sont installées
   npm run build
   ```

2. **Problème de base de données**
   ```bash
   # Vérifier la connexion
   npx prisma db push
   npx prisma studio
   ```

3. **Cal.com ne s'affiche pas**
   - Vérifier le username dans la configuration
   - Vérifier les permissions CORS
   - Tester avec un autre navigateur

### Support

- **Documentation Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Documentation Cal.com**: [cal.com/docs](https://cal.com/docs)
- **Documentation Prisma**: [prisma.io/docs](https://prisma.io/docs)

## 📈 Prochaines Étapes

1. **Contenu**
   - Ajouter des images réelles des projets
   - Remplacer le CV placeholder
   - Optimiser les métadonnées SEO

2. **Fonctionnalités**
   - Ajouter un blog
   - Intégrer un système de témoignages
   - Ajouter des animations plus avancées

3. **Performance**
   - Optimiser les images
   - Implémenter le lazy loading
   - Ajouter un cache intelligent

4. **Analytics**
   - Configurer Google Analytics
   - Ajouter des événements de tracking
   - Surveiller les conversions

---

*Guide créé pour le portfolio de Gavin Rottet - Développeur Full-Stack*


