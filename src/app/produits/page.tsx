import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';

export const metadata: Metadata = buildMetadata({
  title: 'Produits – Vérandas, verrières, toitures ouvrantes & stores',
  description:
    'Découvrez les produits Art et Maison : vérandas sur mesure, verrières aluminium, toitures escamotables (coulissantes), stores de véranda, fenêtres et volets. Fabrication et pose à Paris & Île-de-France.',
  canonicalPath: '/produits',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Produits', path: '/produits' },
]);

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: `Produits – ${company.name}`,
  url: `${company.contact.websiteUrl.replace(/\/$/, '')}/produits`,
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.name,
      description: service.shortDescription,
      url: `${company.contact.websiteUrl.replace(/\/$/, '')}/produits/${service.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: company.name,
        url: company.contact.websiteUrl,
      },
      areaServed: company.areaServed,
    },
  })),
};

export default function ProduitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Produits
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD OfferCatalog (liste structurée des produits)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/produits', label: 'Produits' },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1="Vérandas & menuiseries aluminium : nos produits"
        badge="Produits"
        intro={`${company.name} fabrique et installe des solutions aluminium sur mesure pour agrandir, illuminer et protéger votre habitat : vérandas, verrières, toitures ouvrantes, stores, fenêtres et volets. Nous intervenons à Paris et en Île-de-France.`}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Notre approche
            </Heading>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• Étude & conseil (exposition, isolation, ventilation, occultation).</li>
              <li>• Fabrication sur mesure et finitions durables.</li>
              <li>• Pose soignée et accompagnement jusqu’à la réception.</li>
            </ul>
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
        <section className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="card p-6 text-sm">
                <Heading level={2} className="text-base">
                  <Link
                    href={`/produits/${service.slug}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {service.name}
                  </Link>
                </Heading>
                <Text variant="muted" className="mt-2 text-sm">
                  {service.shortDescription}
                </Text>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    href={`/produits/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Voir le détail
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="card-muted p-5 text-xs text-slate-300">
            <p className="font-medium text-slate-100">Vous avez un projet ?</p>
            <p className="mt-2">
              Véranda à vivre, toiture coulissante, store extérieur, rénovation de fenêtres…
              décrivez-nous votre besoin et vos contraintes (dimensions, exposition, accès,
              délais). Nous vous recontactons pour qualifier le projet et préparer une
              proposition.
            </p>
            <div className="mt-3">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Contacter {company.name}
              </Link>
            </div>
          </section>
        </section>
      </ServicePageTemplate>
    </>
  );
}
