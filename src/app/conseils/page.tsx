import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { company, services } from '../../content/company';
import { conseils } from '../../content/conseils';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { ServicePageTemplate } from '../../components/templates/ServicePageTemplate';

export const metadata: Metadata = buildMetadata({
  title: `Conseils – Vérandas, protection solaire & menuiseries | ${company.name}`,
  description:
    'Conseils pratiques pour réussir un projet de véranda : démarches, confort d’été, protection solaire, choix techniques. Paris & Île-de-France.',
  canonicalPath: '/conseils',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Conseils', path: '/conseils' },
]);

export default function ConseilsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD BreadcrumbList (page Conseils)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/conseils', label: 'Conseils' },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1="Conseils"
        badge="Conseils"
        intro="Guides pratiques pour cadrer votre projet (démarches, confort, protection solaire, choix techniques)."
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Aller plus loin
            </Heading>
            <Text className="text-xs text-slate-300">
              Pour un projet concret, le plus efficace est de parcourir nos produits puis de
              demander un devis.
            </Text>
            <div className="pt-2 space-y-2">
              <Link
                href="/produits"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500"
              >
                Voir les produits
                <ArrowRight className="h-3 w-3" />
              </Link>
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
          <div className="grid gap-5 md:grid-cols-2">
            {conseils.map((article) => (
              <article key={article.slug} className="card-muted p-5">
                <Heading level={2} className="text-base">
                  <Link
                    href={`/conseils/${article.slug}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {article.title}
                  </Link>
                </Heading>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  <span>{article.readingTime}</span>
                  <span className="text-slate-600">•</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
                </div>
                <Text variant="muted" className="mt-3 text-xs">
                  {article.intro}
                </Text>
                <div className="mt-4">
                  <Link
                    href={`/conseils/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Lire l’article
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="card-muted p-5">
            <Heading level={2} className="text-base">
              Produits liés
            </Heading>
            <Text variant="muted" className="mt-2 text-xs">
              Si vous avez déjà une idée, commencez par une page produit : vous aurez une vue
              d’ensemble (options, points clés, FAQ) et une demande de devis plus simple.
            </Text>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/produits/${service.slug}`}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </section>
        </section>
      </ServicePageTemplate>
    </>
  );
}
