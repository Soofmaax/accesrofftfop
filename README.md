# MAB SECURITE – Site vitrine

Ce dépôt contient le site vitrine de **MAB SECURITE**, société de sécurité privée basée à Nîmes (France).  
Le site est construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

## Stack technique

- Next.js 14 – App Router
- React 18
- TypeScript
- Tailwind CSS
- Icons : lucide-react

## Démarrage du projet

### Prérequis

- Node.js 18+ recommandé
- npm (ou un autre gestionnaire de paquets compatible)

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

### Build de production

```bash
npm run build
npm start
```

## Structure principale

- `src/content/company.ts`  
  Informations centrales sur l’entreprise (identité, coordonnées, prestations, secteurs).

- `src/app`  
  - `page.tsx` : page d’accueil  
  - `prestations/page.tsx` : détail des prestations  
  - `secteurs/page.tsx` : secteurs d’intervention  
  - `a-propos/page.tsx` : présentation de l’entreprise  
  - `contact/page.tsx` : contact & demande de devis  
  - `mentions-legales/page.tsx` : mentions légales  
  - `politique-de-confidentialite/page.tsx` : politique de confidentialité  
  - `api/contact/route.ts` : API interne pour le formulaire de contact  
  - `sitemap.ts` / `robots.ts` : SEO technique

- `src/components/layout`  
  Header et footer globaux.

- `src/components/forms`  
  Formulaire de contact principal.

## Champs à personnaliser en priorité

Dans `src/content/company.ts` :

- **Téléphone** : `contact.phone.label` et `contact.phone.value`
- **Email** : `contact.email`
- **URL du site** : `contact.websiteUrl`
- **Zone d’intervention** : `areaServed`
- **Logo** : `branding.logoUrl` (si un logo est disponible)

Une fois ces informations complétées, le site sera prêt à être utilisé comme vitrine B2B pour MAB SECURITE.
