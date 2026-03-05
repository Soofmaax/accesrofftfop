export interface Realisation {
  slug: string;
  title: string;
  location: string;
  shortDescription: string;
  coverImage: {
    src: string;
    alt: string;
  };
  images: Array<{ src: string; alt: string }>;
  relatedServiceSlugs: string[];
  highlights: string[];
}

export const realisations: Realisation[] = [
  {
    slug: 'veranda-contemporaine-boulogne-92',
    title: 'Véranda aluminium contemporaine',
    location: 'Boulogne-Billancourt (92)',
    shortDescription:
      'Extension vitrée lumineuse pensée comme une pièce à vivre, avec gestion des apports solaires.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80',
      alt: 'Véranda aluminium lumineuse',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80',
        alt: 'Véranda aluminium lumineuse',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80',
        alt: 'Espace de vie ouvert sur le jardin',
      },
    ],
    relatedServiceSlugs: ['verandas-sur-mesure', 'stores-protection-solaire'],
    highlights: [
      'Confort 4 saisons : isolation et ventilation',
      'Protection solaire pour limiter la surchauffe',
      'Finitions soignées et intégration à l’existant',
    ],
  },
  {
    slug: 'verriere-atelier-paris-75',
    title: 'Verrière type atelier',
    location: 'Paris (75)',
    shortDescription:
      'Structure vitrée sur mesure pour gagner en lumière naturelle et structurer les volumes.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1800&q=80',
      alt: 'Verrière et lumière naturelle',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1800&q=80',
        alt: 'Verrière et lumière naturelle',
      },
      {
        src: 'https://images.unsplash.com/photo-1582582621959-48d27397dc0f?auto=format&fit=crop&w=1800&q=80',
        alt: 'Extension vitrée / verrière',
      },
    ],
    relatedServiceSlugs: ['verrieres-aluminium'],
    highlights: [
      'Design atelier / verrière sur mesure',
      'Optimisation de la lumière et des circulations',
      'Choix des vitrages selon usage',
    ],
  },
  {
    slug: 'toiture-ouvrante-terrasse-neuilly-92',
    title: 'Toiture ouvrante pour terrasse',
    location: 'Neuilly-sur-Seine (92)',
    shortDescription:
      'Toiture escamotable motorisée pour profiter d’un espace dedans/dehors selon la météo.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1542317854-725117f650fc?auto=format&fit=crop&w=1800&q=80',
      alt: 'Espace extérieur couvert et lumineux',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1542317854-725117f650fc?auto=format&fit=crop&w=1800&q=80',
        alt: 'Espace extérieur couvert et lumineux',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=1800&q=80',
        alt: 'Terrasse modulable et confortable',
      },
    ],
    relatedServiceSlugs: ['toitures-escamotables', 'stores-protection-solaire'],
    highlights: [
      'Ouverture motorisée, usage simple',
      'Gestion de la luminosité et de la ventilation',
      'Options de protection solaire',
    ],
  },
  {
    slug: 'baie-vitree-coulissante-suresnes-92',
    title: 'Baies vitrées & coulissants aluminium',
    location: 'Suresnes (92)',
    shortDescription:
      'Remplacement de menuiseries pour gagner en confort thermique, acoustique et luminosité.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1800&q=80',
      alt: 'Menuiseries aluminium – baies vitrées',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1800&q=80',
        alt: 'Menuiseries aluminium – baies vitrées',
      },
      {
        src: 'https://images.unsplash.com/photo-1560448071-1e5adf7b6cf2?auto=format&fit=crop&w=1800&q=80',
        alt: 'Fenêtres performantes',
      },
    ],
    relatedServiceSlugs: ['fenetres-portes'],
    highlights: [
      'Choix aluminium ou PVC selon projet',
      'Vitrages performants (isolation / sécurité)',
      'Réglages et finitions',
    ],
  },
  {
    slug: 'stores-exterieurs-veranda-versailles-78',
    title: 'Stores extérieurs de véranda',
    location: 'Versailles (78)',
    shortDescription:
      'Protection solaire extérieure pour limiter l’effet serre et préserver la vue.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20b?auto=format&fit=crop&w=1800&q=80',
      alt: 'Protection solaire – store extérieur',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20b?auto=format&fit=crop&w=1800&q=80',
        alt: 'Protection solaire – store extérieur',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
        alt: 'Confort et finitions',
      },
    ],
    relatedServiceSlugs: ['stores-protection-solaire'],
    highlights: [
      'Toiles techniques adaptées à l’extérieur',
      'Motorisation et commande radio',
      'Option anémomètre (sécurité vent)',
    ],
  },
];
