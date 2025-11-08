# Architecture

## Vue d'ensemble
- Frontend SPA avec Vite + React + TypeScript + Tailwind.
- Composants modulaires (src/components) avec données mockées (src/data).
- Configuration centralisée (src/config/site.ts).
- Tests unitaires (Vitest + RTL) dans src/__tests__ et src/components/__tests__.

## Arborescence
- src/
  - App.tsx: composition des sections.
  - components/: UI modulaire (Header, Hero, Services, WhyChooseUs, ContactForm, etc.).
  - config/: constantes et coordonnées (site.ts).
  - data/: données mockées (mockData.ts).
  - test/setup.ts: setup Vitest/RTL (jsdom, stubs).
  - types/: types TS (FormData, etc.).
  - index.css: styles utilitaires Tailwind + animations.

## Flux principal
- main.tsx monte <App /> dans #root.
- App compose les sections et les ancres (services, contact, etc.).
- Header/CTA déclenchent scroll vers sections.
- ContactForm gère la validation client et l'état soumis.

## Décisions
- Tailwind pour styling rapide et responsive.
- Icônes lucide-react.
- Coverage via V8 (Vitest) avec gate explicite JSON summary.
- Sécurité: headers (Netlify/Vercel), CodeQL, Gitleaks, npm audit.

## Évolutions possibles
- E2E Playwright.
- Pages légales réelles.
- Assets locaux optimisés (public/assets) et <picture> avec srcset/sizes.