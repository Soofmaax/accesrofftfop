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
    "Art et Maison est créateur de vérandas à vivre : fabrication sur mesure et installation pour professionnels et particuliers. Les avancées technologiques de l'aluminium et du verre confèrent un confort incomparable (isolation, aération, protection solaire et gestion de l'occultation). Nous réalisons des vérandas contemporaines ou classiques (verrières, ateliers d’artistes), des toitures coulissantes / ouvrantes (terrasses, abris de piscines), des stores de toiture de véranda, ainsi que des fenêtres et volets en aluminium ou PVC. Principales gammes utilisées : profils systèmes Technal, Sapa / Intexalu (marques déposées).",
  shortDescription:
    "Fabrication sur mesure et installation de vérandas, toitures coulissantes, stores de véranda, fenêtres et volets. Paris & Île-de-France.",
  contact: {
    phone: {
      label: '01 48 89 47 11',
      value: '+33148894711',
    },
    email: 'info@art-et-maison.com',
    websiteUrl: 'https://art-et-maison.com',
  },
  branding: {
    baseline: 'Créateur de vérandas',
  },
  areaServed:
    'Siège : Boulogne (92) – usines : 94 et 77 – pose en région parisienne (75, 92, 93, 94, 95, 91, 77, 78).',
};

export const services: Service[] = [
  {
    slug: 'verandas-sur-mesure',
    name: 'Vérandas sur mesure',
    shortDescription:
      'Vérandas en aluminium conçues pour créer une pièce à vivre confortable, en toutes saisons.',
    description:
      '“Une pièce à vivre, pour toutes les saisons” : nous concevons et réalisons des vérandas en aluminium, en prenant en charge les travaux annexes et les détails de confort (isolation, ventilation, occultation). Styles contemporains comme classiques (verrières, ateliers d’artistes).',
    highlights: [
      'Profilés aluminium à rupture thermique',
      'Thermolaquage et choix des couleurs',
      'Vitrage filtrant, isolant et de sécurité',
      'Occultation et confort été / hiver',
    ],
  },
  {
    slug: 'verrieres-aluminium',
    name: 'Véranda, verrière & structures vitrées',
    shortDescription:
      'Verrières, grandes baies vitrées, bow-windows et solutions “mur-rideau” sur mesure.',
    description:
      'Pour agrandir, illuminer ou structurer un espace, nous réalisons des verrières et structures vitrées sur mesure : verrière type atelier (intérieur/extérieur), bow-windows, baies vitrées et façades vitrées (mur-rideau) selon les contraintes de votre bâtiment.',
    highlights: [
      'Verrières type atelier / ateliers d’artistes',
      'Bow-windows, baies vitrées, mur-rideau',
      'Aluminium et vitrage sur mesure',
    ],
  },
  {
    slug: 'toitures-escamotables',
    name: 'Toitures coulissantes & ouvrantes',
    shortDescription:
      'Toitures escamotables motorisées pour terrasses, vérandas et abris de piscine ouvrants.',
    description:
      'La toiture coulissante / ouvrante transforme un espace en terrasse à ciel ouvert dès que la météo le permet. Idéale pour moduler ventilation et lumière, elle s’adapte aussi à des abris de piscine ouvrants, avec des configurations de vantaux quasi infinies.',
    highlights: [
      'Vue dégagée sans rail intermédiaire',
      'Ouverture électrique, manœuvre fluide',
      'Verre ou polycarbonate selon l’usage',
      'Solutions terrasse, véranda, piscine',
    ],
  },
  {
    slug: 'stores-protection-solaire',
    name: 'Stores de véranda & protection solaire',
    shortDescription:
      'Stores extérieurs de toiture pour arrêter la chaleur à l’extérieur et réguler la luminosité.',
    description:
      'Pour transformer la véranda en un lieu privilégié, la protection solaire doit être efficace. Nos stores de toiture (extérieur) limitent la surchauffe en arrêtant la chaleur à l’extérieur, tout en conservant une visibilité et un confort lumineux.',
    highlights: [
      'Armature aluminium thermolaquée (choix de couleurs)',
      'Motorisation + commande radio, système silencieux',
      'Toiles techniques (ex. Soltis) adaptées à l’extérieur',
      'Options sécurité : capteur vent (anémomètre)',
    ],
  },
  {
    slug: 'fenetres-portes',
    name: 'Fenêtres (aluminium & PVC)',
    shortDescription:
      'Fenêtres et coulissants aluminium ou PVC : performances thermiques, acoustiques et finitions durables.',
    description:
      'Nous fournissons et posons des fenêtres, portes-fenêtres et coulissants en aluminium ou PVC, en rénovation comme en neuf. Le choix des profils, vitrages et quincailleries est fait selon votre usage (isolation, sécurité, confort au quotidien).',
    highlights: [
      'Aluminium et PVC : solutions adaptées au projet',
      'Vitrages performants (isolation / sécurité)',
      'Pose soignée et réglages précis',
    ],
  },
  {
    slug: 'volets-roulants',
    name: 'Volets (roulants ou battants)',
    shortDescription:
      'Volets pour l’occultation, la sécurité et l’isolation : motorisés ou manuels.',
    description:
      'Volets roulants ou battants, en rénovation ou en neuf : nous vous aidons à choisir la solution la plus pertinente pour gagner en confort, en sécurité et en gestion de la lumière, avec des options de motorisation et d’automatisation.',
    highlights: [
      'Roulants ou battants selon l’esthétique souhaitée',
      'Motorisation et automatisation possibles',
      'Occultation, confort et protection de l’habitat',
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