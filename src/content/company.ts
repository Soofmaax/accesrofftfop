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
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
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
    faqs: [
      {
        question: 'Faut-il un permis pour une véranda ?',
        answer:
          "Cela dépend principalement de la surface créée et des règles d’urbanisme (PLU). Nous vous aidons à vérifier la faisabilité et à préparer les éléments nécessaires (dimensions, implantation, aspects).",
      },
      {
        question: 'Comment éviter l’effet serre en été ?',
        answer:
          'Le confort d’été se travaille dès la conception : vitrages adaptés, ventilation, ouvertures, et surtout protection solaire (stores extérieurs / occultation) pour arrêter la chaleur à l’extérieur.',
      },
      {
        question: 'Peut-on faire une véranda “4 saisons” ?',
        answer:
          'Oui, avec des profils à rupture thermique, des vitrages performants et une bonne gestion de la ventilation et de l’occultation. Le choix de la toiture (vitrée/isolée/ouvrante) est aussi déterminant.',
      },
      {
        question: 'Quels styles de vérandas proposez-vous ?',
        answer:
          'Contemporaines ou classiques : verrières, ateliers d’artistes, formes plus traditionnelles. Les coloris et finitions sont personnalisables (thermolaquage).',
      },
      {
        question: 'Intervenez-vous à Paris et en Île-de-France ?',
        answer:
          'Oui, nous intervenons à Paris et dans l’ensemble de l’Île-de-France pour l’étude, la fabrication et la pose.',
      },
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
    faqs: [
      {
        question: 'Quelle différence entre verrière et véranda ?',
        answer:
          'La verrière est souvent une structure vitrée plus “atelier” (intérieur ou extérieur) pour laisser passer la lumière et structurer un espace. La véranda vise davantage à créer une pièce à vivre complète, avec une approche globale isolation / ventilation / occultation.',
      },
      {
        question: 'Peut-on installer une verrière en extérieur ?',
        answer:
          'Oui, selon le projet : sas vitré, extension vitrée, façade type mur-rideau. Nous dimensionnons les profils et le vitrage en fonction des contraintes et de l’exposition.',
      },
      {
        question: 'Proposez-vous des grandes baies vitrées ?',
        answer:
          'Oui : baies vitrées, bow-windows et solutions vitrées sur mesure, avec une attention particulière à la performance et à la pose.',
      },
      {
        question: 'Quels vitrages recommandez-vous ?',
        answer:
          'Selon l’usage : isolation thermique, vitrage de sécurité, contrôle solaire, confort acoustique. Nous vous conseillons après étude (exposition, contraintes, budget).',
      },
      {
        question: 'Intervenez-vous en copropriété ?',
        answer:
          'Oui, et nous vous aidons à cadrer le projet (contraintes d’aspect extérieur, accès, planning) pour faciliter les échanges.',
      },
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
    faqs: [
      {
        question: 'À quoi sert une toiture ouvrante / coulissante ?',
        answer:
          'À moduler l’aération et la lumière : vous profitez d’un effet dedans/dehors quand il fait beau, tout en gardant une protection quand la météo change.',
      },
      {
        question: 'La toiture est-elle motorisée ?',
        answer:
          'Oui, la manœuvre est généralement électrique pour un usage simple et fiable au quotidien.',
      },
      {
        question: 'Peut-on utiliser du verre ou du polycarbonate ?',
        answer:
          'Oui. Le choix dépend de l’usage (confort thermique, luminosité, budget, contraintes). Nous vous orientons selon votre projet.',
      },
      {
        question: 'Est-ce compatible avec des stores / protections solaires ?',
        answer:
          'Oui, on peut intégrer des solutions de protection solaire et d’occultation pour améliorer le confort d’été.',
      },
      {
        question: 'Intervenez-vous pour des terrasses et abris de piscine ?',
        answer:
          'Oui : toitures ouvrantes pour terrasses (ex. restaurant “à ciel ouvert”) et solutions ouvrantes pour abris de piscine.',
      },
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
    faqs: [
      {
        question: 'Pourquoi un store extérieur plutôt qu’intérieur ?',
        answer:
          'Un store extérieur arrête la chaleur avant qu’elle ne traverse le vitrage : c’est la solution la plus efficace pour limiter la surchauffe.',
      },
      {
        question: 'Le store est-il motorisé ?',
        answer:
          'Oui, avec commande radio selon configuration. L’objectif est un usage simple et une tension régulière de la toile.',
      },
      {
        question: 'Les toiles sont-elles adaptées aux intempéries ?',
        answer:
          'Oui, nous utilisons des toiles techniques conçues pour l’extérieur, résistantes et adaptées aux contraintes de la protection solaire.',
      },
      {
        question: 'Existe-t-il une sécurité en cas de vent ?',
        answer:
          'Oui, une option type anémomètre peut refermer automatiquement le store en cas de vent fort.',
      },
      {
        question: 'Peut-on conserver une visibilité vers l’extérieur ?',
        answer:
          'Oui : les stores sont pensés pour protéger du soleil tout en gardant une lumière agréable et une visibilité selon la toile choisie.',
      },
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
    faqs: [
      {
        question: 'Aluminium ou PVC : que choisir ?',
        answer:
          'L’aluminium est apprécié pour ses lignes fines et ses grandes dimensions. Le PVC est souvent performant et compétitif. Le bon choix dépend de l’esthétique, des contraintes et du budget.',
      },
      {
        question: 'Proposez-vous des baies coulissantes ?',
        answer:
          'Oui : coulissants aluminium ou PVC selon les configurations, avec vitrage performant et pose soignée.',
      },
      {
        question: 'Quels gains peut-on attendre en rénovation ?',
        answer:
          'Amélioration du confort thermique et acoustique, réduction des courants d’air et meilleure étanchéité, selon l’existant et les produits choisis.',
      },
      {
        question: 'Est-ce compatible avec des volets ?',
        answer:
          'Oui, nous proposons aussi l’installation de volets (roulants ou battants) adaptés aux menuiseries.',
      },
      {
        question: 'Faites-vous la dépose / repose en rénovation ?',
        answer:
          'Oui, avec une attention particulière aux finitions et aux réglages pour garantir le bon fonctionnement.',
      },
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
    faqs: [
      {
        question: 'Volets roulants ou battants : lequel choisir ?',
        answer:
          'Les roulants sont appréciés pour la simplicité d’usage et la motorisation. Les battants conviennent bien à certains styles de façade. Le choix dépend de l’esthétique, des contraintes et de l’usage.',
      },
      {
        question: 'Peut-on motoriser des volets roulants ?',
        answer:
          'Oui, et l’automatisation apporte un vrai confort au quotidien (commande, scénarios, etc.).',
      },
      {
        question: 'Les volets améliorent-ils l’isolation ?',
        answer:
          'Oui, ils participent à l’occultation, à la protection et au confort, notamment en été et en hiver, en complément des menuiseries.',
      },
      {
        question: 'Intervenez-vous en rénovation ?',
        answer:
          'Oui : nous installons en rénovation ou en neuf selon la configuration existante.',
      },
      {
        question: 'Proposez-vous l’installation avec fenêtres ?',
        answer:
          'Oui, nous pouvons coordonner un projet global (fenêtres + volets) pour assurer cohérence et finitions.',
      },
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