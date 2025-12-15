<div align="center">
  <img width="50%" height="auto" alt="Group 6" src="https://github.com/user-attachments/assets/e73112d8-3bd8-4156-8794-7be80fc2131e" />
  <p> 
   Movie Loader est une application web moderne permettant de rechercher, découvrir et gérer des films grâce à l'API TMDB. Elle propose une interface responsive, une expérience   utilisateur fluide et des fonctionnalités avancées comme la watchlist, les favoris, et de nombreuses optimisations UX/UI et accessibilité.
  </p>
 
</div>

## Fonctionnalités

- **Recherche de films** : Trouvez rapidement des films par titre avec une barre de recherche .
- **Sauvegarde de la recherche** : La dernière requête de recherche est conservée automatiquement (localStorage).
- **Découverte** : Parcourez les tendances et découvrez de nouveaux films.
- **Détails complets** : Affichage détaillé d'un film (affiche, synopsis, casting, réalisateur, durée, note, box office, date de sortie formatée, etc.).
- **Affichage du nombre de résultats** et message de fin de liste lors de la recherche.
- **Infinite scroll** : Chargement automatique de nouveaux résultats lors du scroll sur la page de recherche.
- **Watchlist** : Ajoutez/retirez des films à votre liste de visionnage, avec gestion locale et affichage dynamique.
- **Favoris** : Marquez/démarquez vos films préférés.
- **Animations** : Apparition fluide des cards et des conteneurs (fade/slide), transitions modernes.
- **Loader animé** : Affichage d'un loader/spinner lors des chargements.
- **Responsive** : Interface adaptée à tous les écrans (mobile, tablette, desktop).
- **Accessibilité avancée** :
  - Navigation clavier et focus visible
  - Aria-live pour les résultats dynamiques
  - Balises alt sur toutes les images
  - Contrastes et structure sémantique
- **Gestion des erreurs** : Fallback d’images, messages d’erreur utilisateur.
- **Sécurité** : Échappement systématique des données dynamiques (XSS).
- **Composants réutilisables** : Cards, détails, helpers, etc.

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
- **Détails** : Cliquez sur un film pour voir sa fiche détaillée (infos enrichies, date formatée, casting, etc.).
- **Watchlist/Favoris** : Ajoutez/retirez des films à votre watchlist ou favoris via les boutons dédiés, possibilité de réordonner la watchlist (si activé).

## Technologies utilisées

- **HTML5/CSS3** (Flexbox, Grid, variables CSS, animations, transitions)
- **JavaScript (ES6 modules)**
- **API TMDB**
- **AOS (Animate On Scroll)** pour les animations d’apparition

## Personnalisation

- **Palette de couleurs** et polices personnalisables dans `styles/variables.css`.
- **Composants réutilisables** dans `script/components/`.
- **Ajout de nouvelles pages** possible en suivant la structure existante.

## Bonnes pratiques

- Code modulaire, commenté et sécurisé.
- Séparation claire entre logique, composants, helpers et styles.
- Responsive design et accessibilité (balises alt, aria, focus, contrastes).
- Centralisation des constantes et variables partagées.
- Respect des standards UX/UI modernes.

## Licence

Ce projet est open-source.
