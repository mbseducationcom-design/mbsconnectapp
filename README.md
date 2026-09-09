# MBS Connect — déploiement Netlify avec données partagées

Ce dossier contient :
- `index.html` — le site (identique à avant, mais les actus / événements /
  discussions du forum sont maintenant lues et écrites via une fonction
  Netlify au lieu du localStorage du navigateur).
- `netlify/functions/store.js` — la fonction serverless qui lit/écrit ces
  données dans **Netlify Blobs** (stockage clé-valeur intégré à Netlify,
  aucun compte externe à créer).
- `netlify.toml` — configuration Netlify (dossier des fonctions).
- `package.json` — dépendance `@netlify/blobs`.

## Pourquoi ce changement

Avant, `news`, `events` et `threads` étaient stockés dans le `localStorage`
du navigateur : chaque utilisateur avait sa propre copie, invisible des
autres. Une question posée dans "Mon espace" (étudiant) n'apparaissait donc
jamais côté "Espace équipe MBS", et inversement.

Maintenant, ces trois listes sont stockées **sur Netlify** (pas dans le
navigateur) et partagées par tout le monde : ce qu'un étudiant publie dans
le forum, ou ce que l'équipe MBS ajoute comme actu/événement, est visible
par tous, quel que soit leur appareil. La page se resynchronise
automatiquement toutes les 8 secondes.

Les comptes (email/mot de passe) restent, eux, stockés en local dans le
navigateur, comme avant — ce n'était pas demandé de les partager, et ça
évite de stocker des mots de passe côté serveur sans vrai chiffrement.
Dis-moi si tu veux que je fasse aussi évoluer les comptes vers un vrai
système d'authentification partagé.

## Déployer

1. Mets ces fichiers à la racine de ton dépôt Git (ou du dossier que tu
   connectes à Netlify), en conservant la structure telle quelle
   (`netlify/functions/store.js` doit rester à cet emplacement).
2. Sur [app.netlify.com](https://app.netlify.com), crée un nouveau site à
   partir de ce dépôt (ou glisse-dépose le dossier si tu utilises le
   déploiement manuel — dans ce cas, les Netlify Functions sont détectées
   automatiquement grâce à `netlify.toml`).
3. Aucune variable d'environnement à configurer : Netlify Blobs fonctionne
   automatiquement dès que le site est déployé sur Netlify.
4. Une fois déployé, ouvre le site depuis deux appareils différents (ou
   deux navigateurs), poser une question depuis l'un doit apparaître chez
   l'autre en quelques secondes.

## Limite à connaître

Netlify Blobs a une limite de taille par valeur (largement suffisante pour
du texte de forum) mais il n'y a pas de gestion fine des conflits : si deux
personnes publient exactement au même instant, la dernière écriture
« gagne ». Pour un usage de forum étudiant classique ce n'est pas un
problème en pratique.
