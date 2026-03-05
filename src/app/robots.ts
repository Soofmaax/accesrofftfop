import type { MetadataRoute } from 'next';
import { company } from '../content/company';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = company.contact.websiteUrl || 'https://art-et-maison.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl.replace(/\/$/, '')}/sitemap.xml`,
    host: baseUrl.replace(/\/$/, ''),
  };
}