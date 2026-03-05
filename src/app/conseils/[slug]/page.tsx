import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { company, services } from '../../../content/company';
import { conseils } from '../../../content/conseils';
import { buildMetadata } from '../../../lib/seo';
import { Breadcrumbs } from '../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../lib/breadcrumbs';
import { BlogArticleTemplate } from '../../../components/templates/BlogArticleTemplate';
import { Heading } from '../../../components/atoms/Heading';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return conseils.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = conseils.find((entry) => entry.slug === params.slug);

  if (!article) {
    return buildMetadata({
      title: `Conseil | ${company.name}`,
      description: company.shortDescription,
      canonicalPath: `/conseils/${params.slug}`,
    });
  }

  return buildMetadata({
    title: `${article.title} | ${company.name}`,
    description: article.description,
    canonicalPath: `/conseils/${article.slug}`,
  });
}

export default function ConseilArticlePage({ params }: PageProps) {
  const article = conseils.find((entry) => entry.slug === params.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Conseils', path: '/conseils' },
    { name: article.title, path: `/conseils/${article.slug}` },
  ]);

  const baseUrl = company.contact.websiteUrl.replace(/\/$/, '');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: company.name,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/conseils/${article.slug}`,
    },
  };

  const faqJsonLd = article.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const relatedServices = services.filter((service) =>
    article.relatedServiceSlugs.includes(service.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD BreadcrumbList (article)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD Article
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
              { href: '/conseils', label: 'Conseils' },
              { href: `/conseils/${article.slug}`, label: article.title },
            ]}
          />
        </div>
      </section>

      <BlogArticleTemplate
        title={article.title}
        intro={article.intro}
        publishedAt={new Date(article.publishedAt).toLocaleDateString('fr-FR')}
      >
        {article.sections.map((section) => (
          <section key={section.title} className="not-prose">
            <Heading level={2} className="mt-8 text-base">
              {section.title}
            </Heading>
            <div className="mt-3 space-y-3 text-sm text-slate-200">
              {section.paragraphs.map((text) => (
                <p key={text} className="leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {article.faqs?.length ? (
          <section className="not-prose mt-10">
            <Heading level={2} className="text-base">
              Questions fréquentes
            </Heading>
            <div className="mt-4 space-y-2">
              {article.faqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-100">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-200">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {relatedServices.length ? (
          <section className="not-prose mt-10 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
            <Heading level={2} className="text-base">
              Produits liés
            </Heading>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/produits/${service.slug}`}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold text-slate-100 transition hover:border-emerald-500"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demander un devis
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>
        ) : null}
      </BlogArticleTemplate>
    </>
  );
}
