# MBS Connect — version installable (PWA)

Ton site est maintenant une **Progressive Web App** : tes étudiants et l'équipe MBS pourront l'installer sur l'écran d'accueil de leur téléphone (iOS ou Android), avec une icône, un lancement en plein écran (sans barre d'adresse), et un fonctionnement minimal hors-ligne.

## Fichiers ajoutés

- `manifest.webmanifest` — nom, icônes, couleurs de l'app
- `sw.js` — service worker (mise en cache de la coquille de l'app)
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `apple-touch-icon.png` — icônes
- `index.html` — ton fichier original, avec les balises PWA ajoutées dans le `<head>`

Je n'ai touché à **aucune** fonctionnalité existante (auth, forum, événements, annonces, connexion à `/api/store`) : tout le code que tu avais est intact.

## ⚠️ Important avant de déployer

Ton site appelle déjà `/api/store` (fonction Netlify) — donc il est probablement déjà prévu pour être déployé sur **Netlify**. Pour que l'app soit installable, il faut impérativement :

1. **Déployer sur HTTPS** (Netlify le fait automatiquement). Les PWA ne s'installent jamais en HTTP simple.
2. **Uploader tous les fichiers de ce dossier ensemble**, à la racine du même dossier que ton `index.html` (le `manifest.webmanifest`, `sw.js` et les icônes doivent être accessibles au même niveau, sinon les chemins relatifs `./` ne fonctionneront pas).
3. Garder ta fonction Netlify `netlify/functions/store.js` comme avant (rien à changer ici).

## Comment un étudiant installe l'app

**Sur Android (Chrome) :**
1. Ouvrir le site dans Chrome
2. Menu ⋮ → « Installer l'application » (ou un bandeau apparaît automatiquement)

**Sur iOS (Safari — obligatoire, ça ne marche pas depuis Chrome iOS) :**
1. Ouvrir le site dans Safari
2. Bouton Partager (le carré avec la flèche) → « Sur l'écran d'accueil »
3. Confirmer

Une fois installée, l'app s'ouvre comme une vraie application : icône dédiée, pas de barre d'adresse, écran de démarrage.

## Si tu veux personnaliser les icônes plus tard

Les icônes actuelles sont un simple logo « MBS » généré automatiquement (fond `#28313F`, texte blanc, barre orange `#FF5E1A`, dans l'esprit visuel du site). Si tu as un vrai logo MBS, remplace `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` et `apple-touch-icon.png` par tes propres fichiers (mêmes noms, mêmes dimensions).

## Mettre à jour l'app après une modification

Le service worker met en cache la coquille de l'application pour qu'elle marche hors-ligne. Si tu modifies `index.html` ou `sw.js` plus tard, pense à changer la valeur de `CACHE_VERSION` en haut de `sw.js` (ex. `mbs-connect-v2`) — sinon les téléphones qui ont déjà installé l'app risquent de garder une ancienne version en cache un moment.
