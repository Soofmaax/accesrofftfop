# Contribuer

## Branches
- La branche principale (main/master) est protégée. Pas de push direct.
- Trunk-based: créez des branches courtes à partir de main (feat/..., fix/..., chore/...).

## Commits
- Utilisez Conventional Commits:
  - feat: nouvelle fonctionnalité
  - fix: correction de bug
  - docs: documentation
  - chore: tâches diverses (maintenance)
  - refactor: refactorisation interne
  - test: tests
  - perf: performances
  - ci: intégration continue

## Pull Requests
- Petites et ciblées. Liez l'issue si applicable.
- Checklist:
  - [ ] Lint OK (npm run lint)
  - [ ] Typecheck OK (npm run typecheck)
  - [ ] Tests OK (npm run test)
  - [ ] Couverture au-dessus du gate (npm run test:coverage)
  - [ ] Docs mises à jour si nécessaire (README/CHANGELOG)

## Tests
- Vitest + React Testing Library.
- Viser couverture 60%+ sur fonctions et 50%+ sur branches.

## Sécurité
- Ne commitez jamais de secrets. Utilisez des variables d’environnement.
- CodeQL, Gitleaks et npm audit s’exécutent en CI.

## Releases
- SemVer (vX.Y.Z). Tag sur main une fois la CI OK.
- CHANGELOG mis à jour à chaque release.