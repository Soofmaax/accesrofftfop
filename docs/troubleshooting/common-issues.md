# Troubleshooting – Common Issues

## npm ci échoue (lockfile désynchronisé)
- Exécutez `npm install` localement, commitez `package-lock.json`, puis relancez la CI.

## CodeQL échoue (Code scanning désactivé)
- Activez “Code scanning” dans Settings → Code security and analysis.

## Link‑Check erreurs sur localhost
- Les URLs localhost sont exclues dans la CI. Vérifiez les liens externes uniquement.

## Couverture insuffisante
- Ajoutez des tests ciblant les fonctions/handlers.
- Vérifiez `scripts/check-coverage.mjs` (seuils).

## Images externes
- Remplacez par des assets locaux (public/assets) avec `loading="lazy"` et `decoding="async"`.