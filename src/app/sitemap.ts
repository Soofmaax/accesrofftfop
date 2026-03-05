import type { MetadataRoute } from 'next';
import { company, services } from '../content/company';
import { zones } from '../content/zones';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.contact.websiteUrl || 'https://art-et-maison.com';

  const routes = [
    '',
    '/produits',
    ...services.map((service) => `/produits/${service.slug}`),
    '/zones',
    ...zones.map((zone) => `/zones/${zone.slug}`),
    '/secteurs',
    '/a-propos',
    '/contact',
    '/galerie',
    '/mentions-legales',
    '/politique-de-confidentialite',
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl.replace(/\/$/, '')}${path || '/'}`,
    lastModified,
  }));
}