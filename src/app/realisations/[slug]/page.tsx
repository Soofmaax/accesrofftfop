import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { company, services } from '../../../content/company';
import { realisations } from '../../../content/realisations';
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
  return realisations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = realisations.find((entry) => entry.slug === params.slug);

  if (!item) {
    return buildMetadata({
      title: `Réalisation | ${company.name}`,
      description: company.shortDescription,
      canonicalPath: `/realisations/${params.slug}`,
    });
  }

  return buildMetadata({
    title: `${item.title} – ${item.location} | ${company.name}`,
    description: item.shortDescription,
    canonicalPath: `/realisations/${item.slug}`,
  });
}

export default function RealisationPage({ params }: PageProps) {
  const item = realisations.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Réalisations', path: '/realisations' },
    { name: item.title, path: `/realisations/${item.slug}` },
  ]);

  const baseUrl = company.contact.websiteUrl.replace(/\/$/, '');

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${item.title} – ${item.location}`,
    description: item.shortDescription,
    url: `${baseUrl}/realisations/${item.slug}`,
    image: item.images.map((img) => img.src),
    creator: {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      name: company.name,
      url: baseUrl,
    },
    about: item.relatedServiceSlugs
      .map((slug) => services.find((service) => service.slug === slug)?.name)
      .filter((name): name is string => Boolean(name)),
  };

  const relatedServices = services.filter((service) =>
    item.relatedServiceSlugs.includes(service.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD BreadcrumbList (page réalisation)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD CreativeWork (page réalisation)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/realisations', label: 'Réalisations' },
              { href: `/realisations/${item.slug}`, label: item.title },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1={item.title}
        badge="Réalisation"
        intro={item.shortDescription}
        sidebar={
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>{item.location}</span>
            </div>

            <Heading level={3} className="text-sm">
              Démarrer un projet similaire
            </Heading>
            <Text className="text-xs text-slate-300">
              Envoyez-nous votre code postal, la surface et le type de produit : nous vous
              rappelons rapidement.
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

            {relatedServices.length ? (
              <div className="pt-3">
                <div className="text-xs font-semibold text-slate-100">Produits liés</div>
                <div className="mt-2 flex flex-col gap-1 text-xs">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/produits/${service.slug}`}
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        }
      >
        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {item.images.map((img) => (
              <figure
                key={img.src}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={720}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-44 w-full object-cover opacity-95"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{img.alt}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="card-muted p-5">
            <Heading level={2} className="text-base">
              Points clés
            </Heading>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/realisations">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500">
                Voir toutes les réalisations
              </span>
            </Link>
            <Link href="/contact#formulaire-devis">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400">
                Contacter {company.name}
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          <p className="text-[11px] text-slate-400">
            Certains visuels peuvent être fournis à titre d&apos;illustration.
          </p>
        </section>
      </ServicePageTemplate>
    </>
  );
}
