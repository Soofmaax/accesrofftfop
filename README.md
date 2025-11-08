# Accès Rooftop – Template Vite + React + TypeScript + Tailwind

[![Pipeline](https://github.com/Soofmaax/accesrofftfop/actions/workflows/pipeline.yml/badge.svg)](https://github.com/Soofmaax/accesrofftfop/actions/workflows/pipeline.yml)
[![Coverage Status](https://codecov.io/gh/Soofmaax/accesrofftfop/branch/main/graph/badge.svg)](https://codecov.io/gh/Soofmaax/accesrofftfop)

Template professionnel prêt à l’emploi pour une landing/SPA vitrine (artisan/PME) axée sur l’accès toiture et l’aménagement de terrasses. Sécurité, performances, DX et CI intégrées.

## 30s Pitch

- Stack moderne: Vite 5, React 18, TypeScript, TailwindCSS.
- Composants UI modulaires avec données mockées (src/data).
- Sécurité renforcée (CSP + headers) via gabarits Netlify/Vercel.
- CI GitHub Actions (lint → typecheck → test → coverage → build).
- Config centralisée (src/config/site.ts).
- Qualité continue: Prettier, Husky (pre-commit), lint-staged.
- Maintenance: Dependabot pour npm & GitHub Actions.

## Prérequis

- Node.js 20 LTS recommandé
- npm ≥ 9

## Installation

```bash
npm install
# (ou npm ci si package-lock.json est à jour)
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
- lint: ESLint (JS/TS + React Hooks).
- typecheck: TypeScript sans émission.
- test: Vitest + React Testing Library.
- test:coverage: Vitest avec rapport coverage (text, lcov, html).
- format: Prettier (code, styles, markdown).
- prepare: installe Husky (pre-commit avec lint-staged).

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
- Qualité locale: Husky `pre-push` exécute `npm run typecheck && npm run test` pour éviter les pushes cassés.
- CI:
  - Coverage gate explicite via `scripts/check-coverage.mjs` (échoue si couverture < seuils).
  - Job `security` exécute `npm audit --audit-level=high` et échoue si des vulnérabilités High/Critical sont détectées.
  - Gitleaks scanne les secrets sur push/PR, avec rapport SARIF en artifact.
  - Dependabot ouvre des PRs d’update.
- CodeQL: activez Code scanning dans Settings → Code security and analysis → Code scanning pour que les alertes soient visibles et bloquantes en PR.

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

- Playwright (E2E: parcours “Demande de devis”).
- Page “Mentions légales” + “Politique de confidentialité” réelles.
- Remplacer les images distantes par assets locaux/CDN contrôlé.

## Licence

MIT – voir LICENSE.
