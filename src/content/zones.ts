export interface Zone {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  departments: string[];
}

export const zones: Zone[] = [
  {
    slug: 'paris',
    name: 'Paris (75)',
    shortDescription:
      'Vérandas sur mesure, verrières et menuiseries aluminium : conception, fabrication et pose à Paris.',
    description:
      "Vous avez un projet de véranda, verrière ou menuiseries aluminium à Paris ? Art et Maison vous accompagne de l’étude à la pose : prise de cotes, choix des vitrages, options de ventilation et de protection solaire, puis installation soignée. Nous adaptons le projet aux contraintes urbaines (accès, copropriété, délais) et aux exigences de confort (isolation, luminosité, occultation).",
    departments: ['75'],
  },
  {
    slug: 'hauts-de-seine',
    name: 'Hauts-de-Seine (92)',
    shortDescription:
      'Intervention dans les Hauts-de-Seine : vérandas aluminium, stores de toiture, fenêtres et volets.',
    description:
      "Dans les Hauts-de-Seine, nous réalisons des vérandas et structures vitrées pensées pour être vécues toute l’année : profils à rupture thermique, vitrages performants, finitions durables. Nous intervenons aussi sur les toitures ouvrantes / coulissantes, la protection solaire (stores extérieurs) et la rénovation de fenêtres et volets.",
    departments: ['92'],
  },
  {
    slug: 'val-de-marne',
    name: 'Val-de-Marne (94)',
    shortDescription:
      'Pose de vérandas, verrières et toitures coulissantes dans le Val-de-Marne.',
    description:
      "Nous intervenons dans le Val-de-Marne pour des projets de vérandas aluminium, verrières type atelier, sas vitrés et solutions de protection solaire. L’objectif : gagner en surface, en lumière et en confort (isolation, ventilation, gestion des apports solaires).",
    departments: ['94'],
  },
  {
    slug: 'seine-saint-denis',
    name: 'Seine-Saint-Denis (93)',
    shortDescription:
      'Vérandas et menuiseries aluminium sur mesure en Seine-Saint-Denis : étude, fabrication, pose.',
    description:
      "Art et Maison accompagne les projets en Seine-Saint-Denis, pour les particuliers comme pour les professionnels : vérandas sur mesure, verrières, grandes baies vitrées et stores de véranda. Nous privilégions une conception adaptée à l’exposition, aux usages et aux contraintes techniques.",
    departments: ['93'],
  },
  {
    slug: 'yvelines',
    name: 'Yvelines (78)',
    shortDescription:
      'Conception et installation de vérandas aluminium et protections solaires dans les Yvelines.',
    description:
      "Dans les Yvelines, nous réalisons des vérandas contemporaines ou classiques (verrières, ateliers d’artistes), ainsi que des toitures coulissantes / ouvrantes et des stores extérieurs. Chaque projet est dimensionné pour le confort : isolation, aération, occultation et finitions.",
    departments: ['78'],
  },
  {
    slug: 'essonne',
    name: 'Essonne (91)',
    shortDescription:
      'Vérandas, verrières et rénovation de menuiseries : intervention en Essonne.',
    description:
      "Nous intervenons en Essonne pour des projets d’agrandissement et d’amélioration du confort : vérandas aluminium sur mesure, verrières et structures vitrées, stores de véranda, fenêtres et volets. Nous vous conseillons sur les options techniques (vitrages, ouvertures, protections solaires) pour une pièce agréable toute l’année.",
    departments: ['91'],
  },
  {
    slug: 'val-doise',
    name: "Val-d’Oise (95)",
    shortDescription:
      'Installation de vérandas et solutions vitrées dans le Val-d’Oise : confort 4 saisons.',
    description:
      "Dans le Val-d’Oise, nous concevons et posons des vérandas et solutions vitrées adaptées à votre habitat : choix des profils, coloris, vitrages isolants et sécurité, ventilation et protection solaire. Nous vous accompagnons jusqu’à la réception du chantier.",
    departments: ['95'],
  },
  {
    slug: 'seine-et-marne',
    name: 'Seine-et-Marne (77)',
    shortDescription:
      'Pose en Seine-et-Marne : vérandas à vivre, stores de toiture, fenêtres et volets.',
    description:
      "Art et Maison intervient en Seine-et-Marne pour des projets de vérandas aluminium, verrières, toitures ouvrantes et stores de protection solaire. Nous réalisons également la rénovation des menuiseries (fenêtres / coulissants) et l’installation de volets.",
    departments: ['77'],
  },
];
