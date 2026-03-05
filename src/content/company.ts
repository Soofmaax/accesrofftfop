export type ServiceSlug =
  | 'verandas-sur-mesure'
  | 'verrieres-aluminium'
  | 'toitures-escamotables'
  | 'stores-protection-solaire'
  | 'fenetres-portes'
  | 'volets-roulants';

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
}

export interface Sector {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  examples: string[];
}

export interface Engagement {
  title: string;
  description: string;
}

export interface Address {
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Company {
  name: string;
  legalName: string;
  legalForm?: string;
  nafApe?: string;
  siren?: string;
  siret?: string;
  vatNumber?: string;
  shareCapital?: string;
  creationDate?: string;
  address: Address;
  description: string;
  shortDescription: string;
  contact: {
    phone: {
      label: string;
      value: string;
    };
    email: string;
    websiteUrl: string;
  };
  branding: {
    baseline: string;
    logoUrl?: string;
  };
  areaServed: string;
}

export const company: Company = {
  name: 'Art et Maison',
  legalName: 'ART ET MAISON',
  address: {
    line1: 'Boulogne-Billancourt',
    postalCode: '92100',
    city: 'Boulogne-Billancourt',
    country: 'France',
  },
  description:
    'Art et Maison conçoit, fabrique et installe des vérandas, verrières et menuiseries en aluminium, dans des styles contemporains comme classiques. Nos solutions sont pensées pour améliorer le confort de l’habitat : isolation, aération, protection solaire et qualité de pose. Nous travaillons avec des gammes reconnues (ex. Technal, Sapa / Intexalu) pour garantir des finitions durables.',
  shortDescription:
    'Créateur de vérandas et verrières en aluminium (classiques ou contemporaines), toitures escamotables et stores. Pose à Paris & Île-de-France.',
  contact: {
    phone: {
      label: '01 48 89 47 11',
      value: '+33148894711',
    },
    email: 'info@art-et-maison.com',
    websiteUrl: 'https://art-et-maison.com',
  },
  branding: {
    baseline: 'Créateur de vérandas à vivre',
  },
  areaServed:
    'Paris et Île-de-France (75, 92, 93, 94, 95, 91, 77, 78) – pose en région parisienne.',
};

export const services: Service[] = [
  {
    slug: 'verandas-sur-mesure',
    name: 'Vérandas sur mesure',
    shortDescription:
      'Vérandas en aluminium conçues pour agrandir votre maison et créer une pièce à vivre confortable.',
    description:
      'De l’étude de faisabilité à la pose, nous concevons une véranda adaptée à votre maison (exposition, contraintes techniques, isolation) et à votre style : moderne, traditionnel ou mixte.',
    highlights: [
      'Conception 100% sur mesure (dimensions, ouvertures, finitions)',
      'Isolation thermique et apports lumineux optimisés',
      'Fabrication aluminium, vitrages performants',
      'Pose soignée en Île-de-France',
    ],
  },
  {
    slug: 'verrieres-aluminium',
    name: 'Verrières & extensions vitrées',
    shortDescription:
      'Verrières, sas d’entrée et solutions vitrées pour structurer les espaces sans perdre la lumière.',
    description:
      'Les verrières et volumes vitrés apportent une esthétique forte et un confort d’usage au quotidien : séparation de pièces, sas d’entrée, verrière type atelier ou extension vitrée.',
    highlights: [
      'Verrière intérieure / extérieure',
      'Sas d’entrée et protections contre les intempéries',
      'Aluminium et vitrage sur mesure',
    ],
  },
  {
    slug: 'toitures-escamotables',
    name: 'Toitures escamotables (coulissantes)',
    shortDescription:
      'Toitures coulissantes et ouvrantes pour moduler l’aération et la lumière selon la saison.',
    description:
      'La toiture escamotable permet de transformer votre véranda en espace plus ouvert dès que la météo le permet. Une solution idéale pour profiter d’une ventilation naturelle et d’une sensation “dedans-dehors”.',
    highlights: [
      'Toiture coulissante / ouvrante',
      'Gestion de l’aération et de l’occultation',
      'Intégration avec stores et protections solaires',
    ],
  },
  {
    slug: 'stores-protection-solaire',
    name: 'Stores & protection solaire',
    shortDescription:
      'Stores de véranda, occultation et gestion des apports solaires pour un confort optimal.',
    description:
      'Protection solaire, occultation, gestion de la chaleur : nous proposons des solutions adaptées aux contraintes de votre véranda (exposition, toiture, surfaces vitrées) pour gagner en confort.',
    highlights: [
      'Stores de toiture et stores verticaux',
      'Occultation et confort d’été',
      'Solutions esthétiques et durables',
    ],
  },
  {
    slug: 'fenetres-portes',
    name: 'Fenêtres & portes-fenêtres',
    shortDescription:
      'Menuiseries aluminium ou PVC : amélioration thermique, acoustique et sécurité.',
    description:
      'Fenêtres, portes-fenêtres et coulissants : nous vous accompagnons dans vos projets de rénovation ou de construction, avec un focus sur l’isolation, la durabilité et la qualité de pose.',
    highlights: [
      'Rénovation et remplacement de menuiseries',
      'Double vitrage et performances énergétiques',
      'Finitions adaptées à votre façade',
    ],
  },
  {
    slug: 'volets-roulants',
    name: 'Volets roulants',
    shortDescription:
      'Volets roulants pour la sécurité, l’isolation et le confort au quotidien.',
    description:
      'Volets roulants manuels ou motorisés, intégrés à vos menuiseries ou installés en rénovation. Une solution simple pour gagner en confort, en sécurité et en occultation.',
    highlights: [
      'Motorisation et automatisation possibles',
      'Occultation et protection de l’habitat',
      'Installation en rénovation ou neuf',
    ],
  },
];

export const sectors: Sector[] = [
  {
    slug: 'particuliers',
    name: 'Particuliers',
    shortDescription: 'Vérandas et menuiseries pour maisons et appartements.',
    description:
      'Nous vous accompagnons pour agrandir votre espace de vie et améliorer le confort thermique, avec une approche sur mesure et une pose soignée.',
    examples: ['Véranda à vivre', 'Verrière intérieure', 'Remplacement de fenêtres', 'Volets roulants'],
  },
  {
    slug: 'professionnels',
    name: 'Professionnels',
    shortDescription: 'Solutions vitrées et menuiseries pour locaux professionnels.',
    description:
      'Pour les commerces, bureaux et établissements recevant du public, nous proposons des solutions adaptées (verrières, sas d’entrée, protections solaires).',
    examples: ['Sas d’entrée', 'Verrière atelier', 'Stores de protection solaire'],
  },
  {
    slug: 'architectes',
    name: 'Architectes & maîtres d’œuvre',
    shortDescription: 'Partenaire technique pour projets sur mesure.',
    description:
      'Nous travaillons en coordination avec vos plans et contraintes techniques : intégration, détails d’exécution, finitions et planning de pose.',
    examples: ['Études techniques', 'Fabrication sur mesure', 'Pose en site occupé'],
  },
];

export const engagements: Engagement[] = [
  {
    title: 'Sur-mesure & conseil',
    description:
      'Un accompagnement de l’étude à la pose : prise de cotes, conseils matériaux, options et finitions.',
  },
  {
    title: 'Qualité des matériaux',
    description:
      'Aluminium et vitrages performants pour un confort durable : isolation, luminosité et sécurité.',
  },
  {
    title: 'Pose soignée',
    description:
      'Une installation propre et maîtrisée, avec une attention particulière aux détails et aux finitions.',
  },
  {
    title: 'Confort au quotidien',
    description:
      'Protection solaire, aération, occultation : des solutions pensées pour rendre la véranda agréable toute l’année.',
  },
];