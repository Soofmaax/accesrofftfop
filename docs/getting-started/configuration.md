# Configuration

## Variables d’environnement
- Utilisez `.env` en local (voir `.env.example`)
- Exemples (VITE_*):
  - VITE_SITE_NAME
  - VITE_PHONE, VITE_PHONE_HREF
  - VITE_EMAIL, VITE_REGION, VITE_SIRET
  - VITE_CALL_LABEL

## Configuration du site
```ts
// src/config/site.ts
export const site = {
  name: 'Accès Rooftop',
  phone: '01 23 45 67 89',
  phoneHref: 'tel:0123456789',
  email: 'contact@acces-rooftop.fr',
  region: 'Île-de-France',
  callLabel: 'Appel gratuit',
  siret: '123 456 789 00012',
};
```

## Sécurité
- CSP via index.html (JSON‑LD externalisé: public/schema.json)
- Headers via Netlify (public/_headers) et Vercel (vercel.json)