import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, DraftingCompass, Home } from 'lucide-react';
import { company, sectors } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Pour qui ? – Particuliers, professionnels & architectes',
  description:
    'Art et Maison accompagne les particuliers, professionnels et architectes pour des projets de vérandas, verrières, toitures escamotables, stores et menuiseries aluminium à Paris & Île-de-France.',
  canonicalPath: '/secteurs',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Pour qui ?', path: '/secteurs' },
]);

const iconMap: Record<string, typeof Home> = {
  particuliers: Home,
  professionnels: Building2,
  architectes: DraftingCompass,
};

export default function SecteursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Pour qui ?
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-8">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/secteurs', label: 'Pour qui ?' },
              ]}
            />
            <p className="badge">Pour qui ?</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Des solutions adaptées à votre projet
            </Heading>
            <Text variant="muted" className="max-w-2xl text-sm">
              {company.name} intervient pour les particuliers comme pour les professionnels,
              avec une logique de sur-mesure : dimensions, exposition, contraintes techniques,
              confort thermique et protections solaires.
            </Text>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            {sectors.map((sector) => {
              const Icon = iconMap[sector.slug] ?? Home;

              return (
                <article key={sector.slug} className="card p-6 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <Heading level={2} className="text-base">
                        {sector.name}
                      </Heading>
                      <Text variant="muted" className="text-sm">
                        {sector.description}
                      </Text>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                        {sector.examples.map((example) => (
                          <li key={example}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="card-muted p-5 text-xs text-slate-300">
            <p className="font-medium text-slate-100">
              Vous avez un besoin spécifique (toiture ouvrante, protection solaire, rénovation) ?
            </p>
            <p className="mt-2">
              Expliquez-nous votre projet : nous vous recontactons pour qualifier la demande et
              vous proposer une solution adaptée.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/produits"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500"
              >
                Voir nos produits
              </Link>
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Contacter {company.name}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}