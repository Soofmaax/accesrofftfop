# Architecture Overview

## Vue d’ensemble
- SPA (Single Page Application) basée sur Vite + React + TypeScript
- Composants UI modulaires (src/components)
- Données statiques/mock (src/data)
- Configuration centralisée (src/config)
- Styles utilitaires Tailwind (src/index.css)

## Flux principaux
- Header/Navigation → Sections (Services, Gallery, Zone, Contact)
- ContactForm → validation client via hook `useContactForm`
- Scroll utilitaire (src/utils/scroll.ts)

## CI/CD
- GitHub Actions: lint, typecheck, tests, coverage, build
- Sécurité: CodeQL, Gitleaks, npm audit
- Qualité: Link‑Check, Lighthouse

## Évolutions possibles
- E2E Playwright
- Backend léger (serverless) pour formulaire de contact
- i18n (fr/en)