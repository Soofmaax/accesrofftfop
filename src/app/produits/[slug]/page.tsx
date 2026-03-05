import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, services } from '../../../content/company';
import { buildMetadata } from '../../../lib/seo';
import { Heading } from '../../../components/atoms/Heading';
import { Text } from '../../../components/atoms/Text';
import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../lib/breadcrumbs';
import { ServicePageTemplate } from '../../../components/templates/ServicePageTemplate';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return buildMetadata({
      title: 'Produit',
      description: company.shortDescription,
      canonicalPath: `/produits/${params.slug}`,
    });
  }

  return buildMetadata({
    title: `${service.name} – ${company.name}`,
    description: service.shortDescription,
    canonicalPath: `/produits/${service.slug}`,
  });
}

export default function ProduitDetailPage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const baseUrl = company.contact.websiteUrl.replace(/\/$/, '');

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produits' },
    { name: service.name, path: `/produits/${service.slug}` },
  ]);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${baseUrl}/produits/${service.slug}`,
    provider: {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      name: company.name,
      url: baseUrl,
      telephone: company.contact.phone.value,
      email: company.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.line2
          ? `${company.address.line1}, ${company.address.line2}`
          : company.address.line1,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressCountry: company.address.country,
      },
    },
    areaServed: company.areaServed,
  };

  const faqJsonLd = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page produit
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD Service (page produit)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          // JSON-LD FAQPage (si une FAQ est disponible)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <section className="section pb-0">
        <div className="section-inner">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/produits', label: 'Produits' },
              { href: `/produits/${service.slug}`, label: service.name },
            ]}
          />
        </div>
      </section>

      <ServicePageTemplate
        h1={service.name}
        badge="Produit"
        intro={service.description}
        sidebar={
          <div className="space-y-3">
            <Heading level={3} className="text-sm">
              Vous souhaitez un devis ?
            </Heading>
            <Text className="text-xs text-slate-300">
              Dites-nous votre ville / code postal, les dimensions approximatives et vos
              attentes (isolation, ouverture, stores, finitions).
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
        <section className="space-y-5">
          <div>
            <Heading level={2} className="text-base">
              Points clés
            </Heading>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-muted p-5">
            <Heading level={3} className="text-sm">
              Zone d’intervention
            </Heading>
            <Text variant="muted" className="mt-2 text-xs">
              {company.areaServed}
            </Text>
          </div>

          {service.faqs?.length ? (
            <section className="card-muted p-5">
              <Heading level={3} className="text-sm">
                Questions fréquentes
              </Heading>
              <div className="mt-3 space-y-2">
                {service.faqs.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <summary className="cursor-pointer text-xs font-semibold text-slate-100">
                      {item.question}
                    </summary>
                    <Text variant="muted" className="mt-2 text-xs">
                      {item.answer}
                    </Text>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <Link href="/produits">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500">
                Voir tous les produits
              </span>
            </Link>
            <Link href="/contact#formulaire-devis">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400">
                Contacter {company.name}
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}
