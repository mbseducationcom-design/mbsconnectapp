// netlify/functions/store.js
//
// Petit backend "clé -> valeur" partagé, utilisé par MBS Connect pour que
// les actualités, événements et discussions du forum publiés par un
// utilisateur (étudiant ou équipe MBS) soient visibles par tout le monde,
// sur n'importe quel appareil.
//
// Stockage : Netlify Blobs (https://docs.netlify.com/blobs/overview/).
// Aucune configuration nécessaire : dès que le site est déployé sur
// Netlify, cette fonction a automatiquement accès à un "store" Blobs lié
// au site.
//
// Endpoint : /api/store?key=news | events | threads
//   GET  -> renvoie la valeur stockée (ou null si rien n'a encore été écrit)
//   POST -> remplace la valeur stockée par le corps JSON de la requête

import { getStore } from "@netlify/blobs";

const ALLOWED_KEYS = new Set(["news", "events", "threads", "announcements"]);

export default async (req, context) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");

  if (!key || !ALLOWED_KEYS.has(key)) {
    return new Response(
      JSON.stringify({ error: "Clé invalide. Utilise key=news|events|threads." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const store = getStore("mbs-connect");

  if (req.method === "GET") {
    const data = await store.get(key, { type: "json" });
    return new Response(JSON.stringify(data ?? null), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "JSON invalide." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    await store.setJSON(key, body);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "Méthode non autorisée." }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/api/store",
};
