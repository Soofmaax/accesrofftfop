import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, services } from '../../../content/company';
import { zones } from '../../../content/zones';
import { buildMetadata } from '../../../lib/seo';
import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../lib/breadcrumbs';
import { Heading } from '../../../components/atoms/Heading';
import { Text } from '../../../components/atoms/Text';
import { ServicePageTemplate } from '../../../components/templates/ServicePageTemplate';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const zone = zones.find((item) => item.slug === params.slug);

  if (!zone) {
    return buildMetadata({
      title: 'Zone d’intervention',
      description: company.shortDescription,
      canonicalPath: `/zones/${params.slug}`,
    });
  }

  return buildMetadata({
    title: `Vérandas & menuiseries aluminium – ${zone.name} | ${company.name}`,
    description: zone.shortDescription,
    canonicalPath: `/zones/${zone.slug}`,
  });
}

export default function ZonePage({ params }: PageProps) {
  const zone = zones.find((item) => item.slug === params.slug);

  if (!zone) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Zones', path: '/zones' },
    { name: zone.name, path: `/zones/${zone.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Zone
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/zones', label: 'Zones' },
              { href: `/zones/${zone.slug}`, label: zone.name },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1={`Vérandas & menuiseries aluminium – ${zone.name}`}
        badge="Zone"
        intro={zone.description}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Demande de devis
            </Heading>
            <Text className="text-xs text-slate-300">
              Indiquez votre adresse, les dimensions approximatives, l’exposition et le type de
              produit souhaité.
            </Text>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Contacter {company.name}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <Text variant="muted" className="text-[11px]">
              Tél.&nbsp;:{' '}
              <a
                href={`tel:${company.contact.phone.value}`}
                className="font-medium text-emerald-400 hover:text-emerald-300"
              >
                {company.contact.phone.label}
              </a>
            </Text>
          </div>
        }
      >
        <section className="space-y-6">
          <div className="card-muted p-5">
            <Heading level={2} className="text-base">
              Produits disponibles
            </Heading>
            <Text variant="muted" className="mt-2 text-xs">
              Nous intervenons sur l’ensemble de nos produits dans cette zone.
            </Text>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.slug} className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <Heading level={3} className="text-sm">
                    <Link
                      href={`/produits/${service.slug}`}
                      className="underline-offset-2 hover:underline"
                    >
                      {service.name}
                    </Link>
                  </Heading>
                  <Text variant="muted" className="mt-2 text-xs">
                    {service.shortDescription}
                  </Text>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                    {service.highlights.slice(0, 2).map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/produits">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500">
                Voir tous les produits
              </span>
            </Link>
            <Link href="/contact#formulaire-devis">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400">
                Demander un devis
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}
