import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { company } from '../../content/company';
import { zones } from '../../content/zones';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';

export const metadata: Metadata = buildMetadata({
  title: `Zones d’intervention – Paris & Île-de-France | ${company.name}`,
  description:
    'Découvrez les zones d’intervention Art et Maison : Paris et Île-de-France. Vérandas sur mesure, verrières, toitures ouvrantes, stores, fenêtres et volets.',
  canonicalPath: '/zones',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Zones', path: '/zones' },
]);

export default function ZonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Zones
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/zones', label: 'Zones' },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1="Zones d’intervention : Paris & Île-de-France"
        badge="Zones"
        intro={`${company.name} intervient en région parisienne pour la conception, la fabrication et la pose de vérandas, verrières, toitures ouvrantes et solutions de protection solaire. Sélectionnez votre zone pour découvrir les informations locales et démarrer une demande de devis.`}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Un projet ?
            </Heading>
            <Text className="text-xs text-slate-300">
              Indiquez votre code postal, la surface approximative et le type de produit
              (véranda, store, toiture ouvrante…).
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
        <section className="space-y-4">
          <Heading level={2} className="text-base">
            Île-de-France
          </Heading>
          <div className="grid gap-5 md:grid-cols-2">
            {zones.map((zone) => (
              <article key={zone.slug} className="card-muted p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <Heading level={3} className="text-sm">
                      <Link
                        href={`/zones/${zone.slug}`}
                        className="underline-offset-2 hover:underline"
                      >
                        {zone.name}
                      </Link>
                    </Heading>
                    <Text variant="muted" className="text-xs">
                      {zone.shortDescription}
                    </Text>
                    <Link
                      href={`/zones/${zone.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Voir les détails
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}
