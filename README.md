# Movie Loader

Movie Loader est une application web moderne permettant de rechercher, découvrir et gérer des films grâce à l'API TMDB. Elle propose une interface responsive, une expérience utilisateur fluide et des fonctionnalités avancées comme la watchlist et les favoris.

## Fonctionnalités

- **Recherche de films** : Trouvez rapidement des films par titre.
- **Découverte** : Parcourez les tendances et découvrez de nouveaux films.
- **Détails complets** : Affichage détaillé d'un film (affiche, synopsis, casting, réalisateur, durée, note, revenu au box office, date de sortie formatée, etc.).
- **Watchlist** : Ajoutez des films à votre liste de visionnage.
- **Favoris** : Marquez vos films préférés.
- **Responsive** : Interface adaptée à tous les écrans (mobile, tablette, desktop).
- **Animations** : Apparition fluide des cards, transitions modernes.

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/MasterAcnolo/1WEBD-NICOLAS-Axel
   cd 1WEBD-NICOLAS-Axel
   ```
2. **Récupérer une clé API TMDB**

   - Créez un compte sur [TMDB](https://www.themoviedb.org/).
   - Générez une clé API.
   - Créez un fichier `script/APIKEY.js` :

     ```js
     export const API_KEY = "VOTRE_CLE_API";
     ```

3. **Lancer le projet**
   - Ouvrez `index.html` dans votre navigateur (ou servez le dossier avec un serveur local pour éviter les problèmes CORS).

## Utilisation

- **Accueil** : Affiche les films tendances et la section découverte.
- **Recherche** : Permet de rechercher un film par titre.
- **Détails** : Cliquez sur un film pour voir sa fiche détaillée.
- **Watchlist/Favoris** : Ajoutez/retirez des films à votre watchlist ou favoris via les boutons dédiés.

## Technologies utilisées

- **HTML5/CSS3** (Flexbox, Grid, variables CSS, animations)
- **JavaScript (ES6 modules)**
- **API TMDB**
- **AOS (Animate On Scroll)** pour les animations d’apparition

## Personnalisation

- **Palette de couleurs** et polices personnalisables dans `styles/variables.css`.
- **Composants réutilisables** dans `script/components/`.
- **Ajout de nouvelles pages** possible en suivant la structure existante.

## Bonnes pratiques

- Code modulaire et commenté.
- Séparation claire entre logique, composants, helpers et styles.
- Responsive design et accessibilité (balises alt, contrastes).

## Licence

Ce projet est open-source.
