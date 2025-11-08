import { Service, WhyChooseUsItem, Project, ProcessStep, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "Trappes d'accès au toit",
    description: "Installation de trappes sécurisées conformes aux normes DTU pour un accès facile et sûr à votre toiture.",
    icon: "Square"
  },
  {
    id: 2,
    title: "Escaliers escamotables",
    description: "Solutions d'escaliers escamotables robustes pour optimiser l'espace et garantir un accès pratique.",
    icon: "Stairs"
  },
  {
    id: 3,
    title: "Échelles de toit conformes",
    description: "Échelles fixes et amovibles respectant les réglementations en vigueur pour votre sécurité.",
    icon: "Ladder"
  },
  {
    id: 4,
    title: "Aménagement terrasse sécurisé",
    description: "Création et aménagement de terrasses avec garde-corps et systèmes de sécurité intégrés.",
    icon: "Home"
  },
  {
    id: 5,
    title: "Mise aux normes réglementaires",
    description: "Audit et mise en conformité de vos accès existants selon les dernières normes en vigueur.",
    icon: "CheckCircle"
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Conformité garantie",
    description: "Respect strict des normes DTU et réglementations en vigueur pour votre sécurité",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Sécurité maximale",
    description: "Matériaux certifiés et installations testées selon les standards les plus exigeants",
    icon: "Lock"
  },
  {
    id: 3,
    title: "Intervention rapide",
    description: "Devis sous 48h et planning d'intervention flexible selon vos disponibilités",
    icon: "Clock"
  },
  {
    id: 4,
    title: "Artisans qualifiés",
    description: "Équipe d'artisans certifiés, assurés et formés aux dernières techniques",
    icon: "Users"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Trappe d'accès toit-terrasse",
    location: "Paris 16ème",
    year: "2024",
    category: "trappes",
    image: "/assets/gallery/project-1.jpg"
  },
  {
    id: 2,
    title: "Escalier escamotable combles",
    location: "Neuilly-sur-Seine",
    year: "2024",
    category: "escaliers",
    image: "/assets/gallery/project-2.jpg"
  },
  {
    id: 3,
    title: "Échelle de toit sécurisée",
    location: "Boulogne-Billancourt",
    year: "2023",
    category: "echelles",
    image: "/assets/gallery/project-3.jpg"
  },
  {
    id: 4,
    title: "Aménagement terrasse",
    location: "Levallois-Perret",
    year: "2024",
    category: "terrasses",
    image: "/assets/gallery/project-4.jpg"
  },
  {
    id: 5,
    title: "Garde-corps terrasse",
    location: "Courbevoie",
    year: "2023",
    category: "terrasses",
    image: "/assets/gallery/project-5.jpg"
  },
  {
    id: 6,
    title: "Mise aux normes accès toit",
    location: "Saint-Cloud",
    year: "2024",
    category: "normes",
    image: "/assets/gallery/project-6.jpg"
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Contact initial",
    description: "Prise de contact et analyse de votre demande par téléphone ou formulaire",
    icon: "Phone"
  },
  {
    id: 2,
    title: "Visite technique",
    description: "Déplacement gratuit pour évaluer la faisabilité et les contraintes du projet",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "Devis détaillé",
    description: "Proposition commerciale complète dans les 48h suivant la visite",
    icon: "FileText"
  },
  {
    id: 4,
    title: "Réalisation",
    description: "Installation professionnelle avec respect des délais et des normes",
    icon: "Wrench"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pierre M.",
    location: "Paris 15ème",
    service: "Trappe d'accès toit",
    content: "Travail impeccable, conforme aux normes et dans les délais. Équipe très professionnelle.",
    rating: 5
  },
  {
    id: 2,
    name: "Marie L.",
    location: "Neuilly-sur-Seine",
    service: "Escalier escamotable",
    content: "Installation parfaite, conseils avisés. Je recommande vivement Accès Rooftop.",
    rating: 5
  },
  {
    id: 3,
    name: "Jean-Claude R.",
    location: "Boulogne",
    service: "Aménagement terrasse",
    content: "Projet mené de A à Z avec professionnalisme. Résultat au-delà de mes attentes.",
    rating: 5
  }
];