# Contribuer – SmarterLogicWeb

Merci de contribuer à ce projet showcase. Nous favorisons des PRs petites, ciblées et testées.

## Branches
- La branche principale (main/master) est protégée. Pas de push direct.
- Trunk‑based: créez des branches courtes à partir de main (feat/..., fix/..., chore/...).

## Commits
- Conventional Commits:
  - feat: nouvelle fonctionnalité
  - fix: correction de bug
  - docs: documentation
  - chore: tâches diverses (maintenance)
  - refactor: refactorisation interne
  - test: tests
  - perf: performances
  - ci: intégration continue

## Pull Requests
- Petites et ciblées. Liez l’issue si applicable.
- Checklist:
  - [ ] Lint OK (npm run lint)
  - [ ] Typecheck OK (npm run typecheck)
  - [ ] Tests OK (npm run test)
  - [ ] Couverture au‑dessus du gate (npm run test:coverage)
  - [ ] Docs mises à jour si nécessaire (README/CHANGELOG)
  - [ ] Pas de secrets (vérifié par Gitleaks)

## Tests & Qualité
- Vitest + React Testing Library, jsdom
- Gate coverage: ≥ 60% functions, ≥ 50% branches
- ESLint 9, Prettier, Husky (pre‑commit), lint‑staged

## Sécurité
- Ne commitez jamais de secrets. Utilisez des variables d’environnement.
- CI: CodeQL, Gitleaks, npm audit, Link‑Check, Lighthouse

## Code of Conduct
- Voir CODE_OF_CONDUCT.md (Contributor Covenant)

## Releases
- SemVer (vX.Y.Z). Tag sur main une fois la CI OK.
- CHANGELOG mis à jour à chaque release.

## Contact
- SmarterLogicWeb – https://smarterlogicweb.com
- Email: [email] (remplacez par votre email pro)