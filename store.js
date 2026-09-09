// api/store.js — équivalent Vercel de netlify/functions/store.js
//
// Petit backend "clé -> valeur" partagé, utilisé par MBS Connect pour que
// les actualités, événements, discussions du forum et annonces publiés par
// un utilisateur (étudiant ou équipe MBS) soient visibles par tout le
// monde, sur n'importe quel appareil.
//
// Stockage : Vercel KV (base Redis fournie via l'onglet "Storage" du
// tableau de bord Vercel — intégration Upstash, offre gratuite disponible).
//
// Point d'entrée : /api/store?key=news|events|threads|announcements
//   GET  -> renvoie la valeur stockée (ou null si rien n'a encore été écrit)
//   POST -> remplace la valeur stockée par le corps JSON de la requête
//
// IMPORTANT : ce fichier ne fonctionne QUE si une base "Vercel KV" a été
// créée et connectée à ce projet (Vercel dashboard → ton projet → Storage
// → Create Database → KV → Connect). Une fois connectée, Vercel injecte
// automatiquement les variables d'environnement nécessaires (KV_REST_API_URL,
// KV_REST_API_TOKEN, etc.) — aucune configuration manuelle à faire ici.

import { kv } from '@vercel/kv';

const ALLOWED_KEYS = new Set(['news', 'events', 'threads', 'announcements']);

export default async function handler(req, res) {
  const key = req.query.key;

  if (!key || !ALLOWED_KEYS.has(key)) {
    res.status(400).json({ error: 'Clé invalide. Utilise key=news|events|threads|announcements.' });
    return;
  }

  try {
    if (req.method === 'GET') {
      const data = await kv.get(key);
      res.status(200).json(data ?? null);
      return;
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          res.status(400).json({ error: 'JSON invalide.' });
          return;
        }
      }
      await kv.set(key, body);
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: 'Méthode non autorisée.' });
  } catch (err) {
    console.error('Erreur store.js:', err);
    res.status(500).json({ error: "Erreur serveur : la base Vercel KV est-elle bien connectée à ce projet ?" });
  }
}
