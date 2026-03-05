import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, engagements, services } from '../content/company';
import { buildMetadata } from '../lib/seo';
import { Heading } from '../components/atoms/Heading';
import { Text } from '../components/atoms/Text';
import { Button } from '../components/atoms/Button';

export const metadata: Metadata = buildMetadata({
  title: 'Art et Maison – Créateur de vérandas à vivre (Paris & Île-de-France)',
  description:
    'Art et Maison conçoit, fabrique et installe des vérandas et verrières en aluminium (contemporaines ou classiques), des toitures escamotables et des stores de véranda. Intervention à Paris et en Île-de-France.',
  canonicalPath: '/',
});

export default function HomePage() {
  const galleryItems = [
    {
      label: 'Véranda aluminium lumineuse',
      src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    },
    {
      label: 'Extension vitrée / verrière',
      src: 'https://images.unsplash.com/photo-1582582621959-48d27397dc0f?auto=format&fit=crop&w=1600&q=80',
    },
    {
      label: 'Protection solaire – stores extérieurs',
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20b?auto=format&fit=crop&w=1600&q=80',
    },
    {
      label: 'Menuiseries aluminium – baies vitrées',
      src: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section pb-8">
        <div className="section-inner grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="badge">Vérandas · Aluminium · Paris &amp; Île-de-France</span>
            <div className="space-y-4">
              <Heading level={1} className="text-balance">
                Vérandas à vivre, verrières &amp; menuiseries aluminium sur mesure.
              </Heading>
              <Text className="max-w-xl sm:text-base">
                {company.name} conçoit et installe des vérandas, verrières et solutions de
                protection solaire pensées pour le confort au quotidien : isolation,
                luminosité, aération et finitions soignées.
              </Text>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact#formulaire-devis">
                <Button className="inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/produits">
                <Button variant="secondary" className="inline-flex items-center gap-2">
                  Voir nos produits
                </Button>
              </Link>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">Sur mesure</div>
                <p className="mt-1 text-muted">
                  Étude, prise de cotes, fabrication et pose adaptées à votre architecture.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">Confort 4 saisons</div>
                <p className="mt-1 text-muted">
                  Isolation, vitrages performants, ventilation et occultation.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-sm font-semibold text-slate-100">Pose soignée</div>
                <p className="mt-1 text-muted">
                  Une installation propre et maîtrisée, avec attention aux finitions.
                </p>
              </div>
            </div>
          </div>

          <aside className="card space-y-4 p-6 text-sm animate-fade-up-delayed">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Coordonnées
            </div>
            <div className="space-y-1 text-slate-200">
              <p>{company.address.line1}</p>
              {company.address.line2 && <p>{company.address.line2}</p>}
              <p>
                {company.address.postalCode} {company.address.city}
              </p>
              <p>{company.address.country}</p>
            </div>
            <div className="space-y-2 pt-2 text-slate-200">
              <p>
                Tél. :{' '}
                <a
                  href={`tel:${company.contact.phone.value}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.phone.label}
                </a>
              </p>
              <p>
                E-mail :{' '}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
            <p className="text-xs text-muted">Zone d’intervention : {company.areaServed}</p>
          </aside>
        </div>
      </section>

      {/* Produits */}
      <section className="section pt-0">
        <div className="section-inner space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <Heading level={2} className="text-lg sm:text-xl">
                Produits &amp; solutions
              </Heading>
              <Text variant="muted" className="text-sm">
                Vérandas, verrières, toitures ouvrantes, stores et menuiseries : découvrez
                les gammes que nous concevons et installons.
              </Text>
            </div>
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
            >
              Voir tous les produits
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card-muted flex flex-col p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  <Link
                    href={`/produits/${service.slug}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className="mt-2 text-xs text-muted">{service.shortDescription}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {service.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href={`/produits/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Détails
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link href="/contact#formulaire-devis">
              <Button className="inline-flex items-center gap-2 text-xs sm:text-sm">
                Parler de votre projet
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
            <Link href="/a-propos">
              <Button
                variant="secondary"
                className="inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                Découvrir {company.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie photo */}
      <section className="section pt-0">
        <div className="section-inner space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Heading level={2} className="text-lg sm:text-xl">
                Inspirations &amp; réalisations
              </Heading>
              <Text variant="muted" className="text-xs sm:text-sm">
                Quelques visuels d’inspiration autour des vérandas, verrières et menuiseries.
              </Text>
            </div>
            <Link
              href="/galerie"
              className="mt-2 inline-flex items-center text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
            >
              Voir la galerie
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1200}
                  height={480}
                  loading="lazy"
                  className="h-32 w-full object-cover opacity-90"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section pb-16">
        <div className="section-inner space-y-6">
          <Heading level={2} className="text-lg sm:text-xl">
            Nos engagements
          </Heading>
          <div className="grid gap-5 md:grid-cols-2">
            {engagements.map((item) => (
              <article key={item.title} className="card-muted p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <div>
                    <Heading level={3} className="text-sm">
                      {item.title}
                    </Heading>
                    <Text variant="muted" className="mt-1 text-xs">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pt-2">
            <Link href="/contact#formulaire-devis">
              <Button
                variant="secondary"
                className="inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                Demander un devis
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}