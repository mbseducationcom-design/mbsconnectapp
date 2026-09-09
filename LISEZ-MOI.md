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

---

## 🔔 Notifications quand l'équipe publie une annonce

Quand un membre de l'équipe MBS clique sur « Publier une annonce » (dans l'onglet *Annonces importantes* ou dans *Espace équipe*), tous les étudiants qui ont activé les notifications reçoivent une **vraie notification push** sur leur téléphone — même si l'app est fermée.

### Comment un étudiant les active

Un bouton 🔔 est présent en haut à droite du site (et dans le menu ☰ sur mobile) : « Activer les notifications ». Un clic dessus déclenche la demande d'autorisation classique du navigateur. Une fois acceptée, l'appareil est enregistré côté serveur et recevra les futures annonces.

⚠️ Sur iPhone, les notifications web ne fonctionnent **que si l'app a été installée** sur l'écran d'accueil (voir plus haut « Comment un étudiant installe l'app ») — pas depuis Safari en simple onglet. C'est une limitation d'Apple, pas de l'app.

### Fichiers ajoutés pour les notifications

- `netlify/functions/subscribe.js` — enregistre/retire l'abonnement d'un appareil (`/api/subscribe`), stocké dans Netlify Blobs.
- `netlify/functions/notify.js` — envoie la notification à tous les appareils abonnés (`/api/notify`), appelée automatiquement par le site juste après la publication d'une annonce.
- Dans `sw.js` : le service worker sait maintenant recevoir un push et l'afficher (`push` / `notificationclick`).
- Dans `index.html` : le bouton 🔔, la logique d'abonnement, et l'appel à `/api/notify` après publication d'une annonce.
- `web-push` a été ajouté aux dépendances (`package.json`).

### ⚠️ Configuration obligatoire avant que ça fonctionne : les clés VAPID

Les notifications push utilisent le protocole **VAPID** : une paire de clés qui identifie ton site auprès des services de notification (Google, Apple, Mozilla...). Une paire a déjà été générée pour toi :

```
VAPID_PUBLIC_KEY  = BOrs1uO37Gv8-VNQ7UDtTiQbaJbB5IJ9sLMReSy11egV8L8ZqfwxPObbb6X_gXC0YftxL5QRpdn7XHww5MlYAEY
VAPID_PRIVATE_KEY = hHRPaw1N3SVoPs-h3HMw3sbJFJduhZd65JodNQGJMGI
```

La **clé publique** est déjà inscrite dans `index.html` (elle est sans risque à exposer, comme une adresse). La **clé privée**, elle, ne doit JAMAIS être mise dans le code — elle doit être ajoutée comme variable d'environnement sur Netlify :

1. Sur [app.netlify.com](https://app.netlify.com) → ton site → **Site configuration → Environment variables**.
2. Ajoute :
   - `VAPID_PRIVATE_KEY` = `hHRPaw1N3SVoPs-h3HMw3sbJFJduhZd65JodNQGJMGI`
   - `VAPID_PUBLIC_KEY` = `BOrs1uO37Gv8-VNQ7UDtTiQbaJbB5IJ9sLMReSy11egV8L8ZqfwxPObbb6X_gXC0YftxL5QRpdn7XHww5MlYAEY`
   - `VAPID_SUBJECT` = `mailto:ton-adresse@ecole.fr` (une adresse à laquelle les services de notification peuvent te contacter en cas de souci ; mets une adresse réelle de l'équipe MBS)
3. Redéploie le site (un simple nouveau déploiement suffit à charger les nouvelles variables).

Si tu préfères repartir de zéro avec ta propre paire de clés (par exemple si tu penses que celle-ci a fuité), tu peux en générer une nouvelle avec `npx web-push generate-vapid-keys` — dans ce cas, remets aussi à jour la clé publique dans `index.html` (constante `VAPID_PUBLIC_KEY`, en haut du bloc de script « PWA : service worker + notifications push »).

### Optionnel : protéger l'endroit qui envoie les notifications

Sans configuration supplémentaire, `/api/notify` est un endpoint ouvert : n'importe qui connaissant son URL pourrait en théorie l'appeler pour spammer tout le monde de notifications (il ne peut en revanche rien lire ni modifier d'autre). Pour te protéger de ça, ajoute une variable d'environnement supplémentaire sur Netlify :

- `NOTIFY_SECRET` = une phrase secrète de ton choix (ex. `mbs-2026-xkq93`)

Puis, dans `index.html`, adapte l'appel `fetch('/api/notify', ...)` pour ajouter l'en-tête `'x-mbs-notify-key': 'la-meme-phrase-secrete'`. (Dis-le-moi si tu veux que je le fasse directement pour toi.)

### Limite à connaître

Comme pour `news`/`events`/`threads`, la liste des appareils abonnés est stockée dans Netlify Blobs — aucun compte externe à créer. Un appareil qui désinstalle l'app ou refuse les notifications plus tard sera automatiquement retiré de la liste la prochaine fois qu'une notification échoue à lui être envoyée.
