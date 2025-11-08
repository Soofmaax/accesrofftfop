# Déploiement – Production

## Pré‑requis
- CI verte (lint, typecheck, tests, coverage, audit)
- CodeQL sans findings critiques
- Gitleaks sans fuites

## Étapes
- Déployez via Netlify/Vercel
- Activez Code scanning (GitHub)
- Configurez branch protection et quality gates

## Post‑déploiement
- Vérifiez Lighthouse
- Monitorer erreurs (Sentry optionnel)