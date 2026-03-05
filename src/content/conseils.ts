export interface ConseilArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ConseilArticle {
  slug: string;
  title: string;
  intro: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  sections: ConseilArticleSection[];
  relatedServiceSlugs: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const conseils: ConseilArticle[] = [
  {
    slug: 'permis-veranda-declaration-travaux',
    title: 'Permis de construire ou déclaration : que prévoir pour une véranda ? (Paris & IDF)',
    intro:
      "Avant de lancer un projet de véranda, il faut cadrer les démarches : surface créée, règles du PLU, copropriété… Voici une checklist simple pour éviter les mauvaises surprises.",
    description:
      "Démarches pour une véranda : permis ou déclaration, règles PLU, points à vérifier en copropriété. Conseils pour un projet à Paris et en Île-de-France.",
    publishedAt: '2026-01-10',
    readingTime: '6 min',
    relatedServiceSlugs: ['verandas-sur-mesure', 'verrieres-aluminium'],
    sections: [
      {
        title: '1) La surface créée et les règles d’urbanisme',
        paragraphs: [
          "Les formalités dépendent principalement de la surface créée et des règles locales (PLU). Selon votre situation, une déclaration préalable ou un permis de construire peut être nécessaire.",
          "Le plus important : vérifier la faisabilité (implantation, hauteur, aspect extérieur, matériaux) avant de figer le design.",
        ],
        bullets: [
          'Surface et hauteur du projet',
          'Aspect extérieur (coloris, toitures, vitrages)',
          'Distances et contraintes de voisinage',
          'Règles spécifiques en zones protégées',
        ],
      },
      {
        title: '2) En copropriété : anticiper les validations',
        paragraphs: [
          "À Paris, beaucoup de projets se font en copropriété. Même si vous êtes propriétaire, l’aspect extérieur peut nécessiter un accord (AG).",
          "Le bon réflexe : préparer un dossier clair (plans, visuels, descriptif des matériaux, intervention prévue) pour faciliter l’échange.",
        ],
      },
      {
        title: '3) Cadrer le projet technique (confort 4 saisons)',
        paragraphs: [
          "Une véranda réussie n’est pas seulement une structure : c’est une pièce à vivre. La conception doit intégrer l’isolation, la ventilation, l’occultation et la gestion des apports solaires.",
        ],
        bullets: [
          'Profils aluminium à rupture thermique',
          'Vitrage performant (isolation + sécurité)',
          'Ventilation et ouvrants adaptés',
          'Protection solaire (stores extérieurs)',
        ],
      },
    ],
    faqs: [
      {
        question: 'Peut-on installer une véranda sur une terrasse ?',
        answer:
          "Souvent oui, mais il faut vérifier la structure existante, l’étanchéité, les charges et les règles d’urbanisme. Une étude préalable est indispensable.",
      },
      {
        question: 'Combien de temps prennent les démarches ?',
        answer:
          "Les délais varient selon le dossier et la mairie. L’objectif est de préparer un dossier propre dès le départ pour éviter les allers-retours.",
      },
    ],
  },
  {
    slug: 'eviter-effet-serre-veranda-protection-solaire',
    title: 'Éviter l’effet serre en véranda : les solutions qui marchent vraiment',
    intro:
      "Le confort d’été se décide dès la conception. Vitrages, ventilation et surtout protection solaire : voici comment éviter une véranda trop chaude.",
    description:
      "Comment éviter l’effet serre en véranda : protection solaire extérieure, vitrages adaptés, ventilation et bonnes pratiques de conception.",
    publishedAt: '2026-01-18',
    readingTime: '7 min',
    relatedServiceSlugs: ['stores-protection-solaire', 'verandas-sur-mesure'],
    sections: [
      {
        title: '1) La règle n°1 : arrêter la chaleur à l’extérieur',
        paragraphs: [
          "Un store extérieur est, dans la majorité des cas, la solution la plus efficace : il bloque une grande partie du rayonnement avant qu’il ne traverse le vitrage.",
          "À l’inverse, une protection intérieure agit trop tard : la chaleur est déjà entrée.",
        ],
        bullets: [
          'Stores de toiture extérieurs',
          'Toiles techniques adaptées',
          'Option anémomètre en cas de vent',
        ],
      },
      {
        title: '2) Vitrages : contrôle solaire et confort au quotidien',
        paragraphs: [
          "Le vitrage ne se choisit pas seulement pour l’hiver. Selon l’exposition, un vitrage à contrôle solaire améliore fortement le confort.",
          "On vise un équilibre : lumière, protection, et performance thermique.",
        ],
      },
      {
        title: '3) Ventilation : créer un flux d’air',
        paragraphs: [
          "Une véranda confortable respire : ouvrants, entrées/sorties d’air, et parfois une toiture ouvrante selon le projet.",
        ],
        bullets: ['Ouvrants bien positionnés', 'Effet cheminée (haut/bas)', 'Pilotage simple au quotidien'],
      },
    ],
  },
  {
    slug: 'toiture-ouvrante-coulissante-veranda',
    title: 'Toiture ouvrante / coulissante : pour quels usages et quels avantages ?',
    intro:
      "Une toiture escamotable transforme l’usage d’une terrasse ou d’une véranda : plus de lumière, plus d’air, et une vraie sensation dedans/dehors.",
    description:
      "Toiture ouvrante / coulissante : avantages, usages (terrasse, véranda, piscine), points techniques et options de confort.",
    publishedAt: '2026-02-02',
    readingTime: '5 min',
    relatedServiceSlugs: ['toitures-escamotables', 'stores-protection-solaire'],
    sections: [
      {
        title: '1) À qui ça s’adresse ?',
        paragraphs: [
          "La toiture ouvrante est idéale si vous voulez profiter d’un espace couvert la plupart du temps, tout en pouvant l’ouvrir rapidement quand la météo le permet.",
        ],
        bullets: ['Terrasses (particuliers / restaurants)', 'Vérandas', 'Abris de piscine ouvrants'],
      },
      {
        title: '2) Les bénéfices concrets',
        paragraphs: [
          "L’intérêt principal : la modularité. Vous gagnez en confort d’été (aération), tout en conservant une protection en cas de pluie.",
        ],
        bullets: ['Ventilation instantanée', 'Lumière naturelle modulable', 'Usage dedans/dehors'],
      },
      {
        title: '3) Options à prévoir pour le confort',
        paragraphs: [
          "Pour un usage quotidien, on dimensionne le projet avec des options pertinentes : protection solaire, type de remplissage, et pilotage.",
        ],
        bullets: ['Stores / protections solaires', 'Verre ou polycarbonate selon usage', 'Motorisation et commande simple'],
      },
    ],
  },
];
