<div align="center">
  <img width="50%" height="auto" alt="Group 6" src="https://github.com/user-attachments/assets/e73112d8-3bd8-4156-8794-7be80fc2131e" />
  <p> 
   Movie Loader est une application web moderne permettant de rechercher, découvrir et gérer des films grâce à l'API TMDB. Elle propose une interface responsive, une expérience   utilisateur fluide et des fonctionnalités avancées comme la watchlist, les favoris, et de nombreuses optimisations UX/UI et accessibilité.
  </p>
 
</div>

---

## Fonctionnalités principales

### Recherche & découverte

- **Recherche** rapide de films par titre
- **Conservation automatique** de la dernière recherche (localStorage)
- **Découverte** des films tendances
- **Affichage du nombre de résultats** et message de fin de liste
- **Scroll infini** sur les pages de recherche
- **Buffer** : Pour ne faire des requêtes que si besoin est

### Détails des films

- Page de détails complète :
  - affiche, synopsis, genres
  - casting et réalisateur
  - durée, note, metascore
  - box office
  - date de sortie formatée
- Gestion des images manquantes (fallback)
- Données sécurisées (échappement XSS)

### Watchlist & favoris

- Ajout / suppression de films dans la watchlist
- Système de favoris
- Persistance locale
- Mise à jour dynamique de l’UI

### UX / UI

- Animations d’apparition des cards et sections
- Loader animé lors des chargements
- Transitions modernes
- Menu hamburger pour mobile
- Interface totalement responsive (mobile, tablette, desktop)

### Accessibilité

- Navigation clavier complète
- Focus visible
- Attributs `aria` et `aria-live` pour le contenu dynamique
- Balises `alt` sur toutes les images
- Structure HTML sémantique et contrastes respectés

---

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

---

## Utilisation

- **Accueil** : Affiche les films tendances et la section découverte.
- **Recherche** : Permet de rechercher un film par titre ou acteur, avec expérience enrichie (clear, focus, scroll infini, feedback visuel).
- **Détails** : Cliquez sur un film pour voir sa fiche détaillée (infos enrichies, date formatée, casting, etc...).
- **Watchlist/Favoris** : Ajoutez/retirez des films à votre watchlist ou favoris via les boutons dédiés, possibilité de réordonner la watchlist (si activé).

---

## Technologies utilisées

- **HTML5/CSS3** (Flexbox, Grid, variables CSS, animations, transitions)
- **JavaScript (ES6 modules)**
- **API TMDB**
- **AOS (Animate On Scroll)** pour les animations d’apparition

---

## Structure du projet

- `script/components/` : composants UI réutilisables (cards, détails, etc.)
- `script/helpers/` : helpers utilitaires (sécurité, formatage, couleurs)
- `script/services/` : appels API et logique de récupération des données
- `styles/` : styles globaux, variables et composants
- `assets/` : images et ressources statiques

---

## Personnalisation

- **Palette de couleurs** et polices personnalisables dans `styles/variables.css`.
- **Composants réutilisables** dans `script/components/` ainsi que dans `styles/components/`.
- **Ajout de nouvelles pages** possible en suivant la structure existante et les composants réutilisables.

---

## Bonnes pratiques

- Code modulaire, commenté et sécurisé.
- Séparation claire entre logique, composants, helpers et styles.
- Responsive design et accessibilité (balises alt, aria, focus, contrastes).
- Centralisation des constantes et variables partagées.
- Respect des standards UX/UI modernes.

---

## Licence

Ce projet est open-source.
