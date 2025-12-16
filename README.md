<div align="center" width="80%">
  <img width="100%" height="auto" alt="Logo White" src="https://github.com/user-attachments/assets/c6e639db-fbcf-4e3a-a6a3-75fc950730b2" />
  <p> 
   Movie Loader est une application web moderne permettant de rechercher, découvrir et gérer des films grâce à l'API TMDB. Elle propose une interface responsive, une expérience   utilisateur fluide et des fonctionnalités avancées comme la watchlist, les favoris, et de nombreuses optimisations UX/UI et accessibilité.
  </p>
 
</div>

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
- **Recherche** : Permet de rechercher un film par titre ou acteur, avec expérience enrichie (clear, focus, scroll infini, feedback visuel).
- **Détails** : Cliquez sur un film pour voir sa fiche détaillée (infos enrichies, date formatée, casting, etc...).
- **Watchlist/Favoris** : Ajoutez/retirez des films à votre watchlist ou favoris via les boutons dédiés, possibilité de réordonner la watchlist (si activé).

## Technologies utilisées

<div style="display: flex; gap: 5px; flex-wrap: wrap;">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="https://www.themoviedb.org/"><img src="https://img.shields.io/badge/TMDB-01D277?style=for-the-badge&logo=gitbook&logoColor=white" alt="TMDB"></a>
  <a href="https://github.com/michalsnik/aos"> <img src="https://img.shields.io/badge/AOS-FF6C37?style=for-the-badge&logo=gitbook&logoColor=white" alt="AOS"> </a>
</div>

## Structure du projet

- `script/components/` : composants UI réutilisables (cards, détails, etc.)
- `script/main/` : Fichier principaux par pages
- `script/helpers/` : helpers utilitaires (sécurité, formatage, couleurs)
- `script/services/` : appels API et logique de récupération des données
- `script/common.js` : Fichier de configuration global
- `styles/` : styles globaux, variables et composants
- `assets/` : images et ressources statiques

## Personnalisation

- **Palette de couleurs** et polices personnalisables dans `styles/variables.css`.
- **Composants réutilisables** dans `script/components/` ainsi que dans `styles/components/`.
- **Ajout de nouvelles pages** possible en suivant la structure existante et les composants réutilisables.

## Bonnes pratiques

- Code modulaire, commenté et sécurisé.
- Séparation claire entre logique, composants, helpers et styles.
- Responsive design et accessibilité (balises alt, aria, focus, contrastes).
- Centralisation des constantes et variables partagées.
- Respect des standards UX/UI modernes.

## Licence

Ce projet est open-source sous licence [GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).
