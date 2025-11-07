# Accès Rooftop – Template Vite + React + TypeScript + Tailwind

Template professionnel prêt à l’emploi pour une landing/SPA vitrine (artisan/PME) axée sur l’accès toiture et l’aménagement de terrasses. Sécurité, performances, DX et CI intégrées.

## 30s Pitch

- Stack moderne: Vite 5, React 18, TypeScript, TailwindCSS.
- Composants UI modulaires avec données mockées (src/data).
- Sécurité renforcée (CSP + headers) via gabarits Netlify/Vercel.
- CI GitHub Actions (lint → typecheck → test → build).
- Config centralisée (src/config/site.ts).

## Prérequis

- Node.js 20 LTS recommandé
- npm ≥ 9

## Installation

```bash
npm ci
```

## Développement

```bash
npm run dev
```

Accès: http://localhost:5173

## Scripts

- dev: lance le serveur Vite (développement).
- build: build production.
- preview: prévisualisation du build.
- lint: ESLint (base JS + TS + React hooks).
- typecheck: TypeScript sans émission.
- test: placeholder (à remplacer par Vitest/Playwright).

## Déploiement

### Netlify

- Le fichier `public/_headers` applique les headers de sécurité (CSP, HSTS, X-Frame-Options, etc.).
- Placez les assets statiques dans `public/`.

### Vercel

- Le fichier `vercel.json` applique les headers de sécurité pour toutes les routes.

## Sécurité

- Headers de sécurité: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- Mettez Vite ≥ 5.4.6 (patch CVE-2024-45811).
- Ne commitez jamais de secrets. Utilisez `.env` (exemple: créer `.env.example`).

Voir SECURITY.md pour le processus de signalement de vulnérabilités.

## Configuration

Centralisez les constantes de site:

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

## Conventions

- TypeScript strict.
- ESLint 9 + règles React Hooks.
- Tailwind pour le style. Animations utilitaires dans `src/index.css`.

## Roadmap (suggestion)

- Ajouter Vitest + React Testing Library (unitaire).
- Playwright (E2E: parcours “Demande de devis”).
- Ajout de Prettier, Husky, lint-staged.
- Page “Mentions légales”, “Politiques” réelles.

## Licence

MIT – voir LICENSE.
