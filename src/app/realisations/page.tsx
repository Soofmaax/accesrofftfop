import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { company } from '../../content/company';
import { realisations } from '../../content/realisations';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';

export const metadata: Metadata = buildMetadata({
  title: `Réalisations – Vérandas & menuiseries aluminium | ${company.name}`,
  description:
    'Découvrez une sélection de réalisations (vérandas, verrières, toitures ouvrantes, stores, menuiseries). Intervention à Paris & Île-de-France.',
  canonicalPath: '/realisations',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Réalisations', path: '/realisations' },
]);

const baseUrl = company.contact.websiteUrl.replace(/\/$/, '');

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `Réalisations – ${company.name}`,
  itemListElement: realisations.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: item.title,
      url: `${baseUrl}/realisations/${item.slug}`,
      image: item.coverImage.src,
      description: item.shortDescription,
    },
  })),
};

export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Réalisations
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD ItemList (liste structurée des réalisations)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/realisations', label: 'Réalisations' },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1="Réalisations"
        badge="Réalisations"
        intro={`Une sélection de projets : vérandas à vivre, verrières type atelier, toitures ouvrantes et protections solaires. Pour chaque projet, l’objectif est le même : gagner en lumière, en confort et en usage au quotidien, avec une pose soignée.`}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Vous avez un projet ?
            </Heading>
            <Text className="text-xs text-slate-300">
              Décrivez votre besoin (surface, exposition, accès) : nous vous recontactons pour
              qualifier le projet et préparer une proposition.
            </Text>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demander un devis
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        }
      >
        <section className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            {realisations.map((item) => (
              <article key={item.slug} className="card-muted overflow-hidden">
                <Link href={`/realisations/${item.slug}`} className="block">
                  <Image
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    width={1200}
                    height={720}
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-44 w-full object-cover opacity-95"
                  />
                </Link>
                <div className="space-y-2 p-5">
                  <Heading level={2} className="text-base">
                    <Link
                      href={`/realisations/${item.slug}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </Heading>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span>{item.location}</span>
                  </div>
                  <Text variant="muted" className="text-xs">
                    {item.shortDescription}
                  </Text>
                  <div className="pt-1">
                    <Link
                      href={`/realisations/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Voir le projet
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Certains visuels peuvent être fournis à titre d&apos;illustration lorsque les photos
            de chantier ne sont pas encore disponibles.
          </p>
        </section>
      </ServicePageTemplate>
    </>
  );
}
