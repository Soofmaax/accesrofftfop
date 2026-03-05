import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: `Galerie – Vérandas, verrières & menuiseries | ${company.name}`,
  description:
    'Galerie d’inspiration autour des vérandas, verrières et menuiseries aluminium : extensions vitrées, protections solaires, toitures ouvrantes et aménagements lumineux.',
  canonicalPath: '/galerie',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Galerie photo', path: '/galerie' },
]);

const allImages = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80',
    label: 'Véranda aluminium lumineuse',
  },
  {
    src: 'https://images.unsplash.com/photo-1582582621959-48d27397dc0f?auto=format&fit=crop&w=1800&q=80',
    label: 'Extension vitrée / verrière',
  },
  {
    src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1800&q=80',
    label: 'Verrière et lumière naturelle',
  },
  {
    src: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1800&q=80',
    label: 'Menuiseries aluminium – baies vitrées',
  },
  {
    src: 'https://images.unsplash.com/photo-1542317854-725117f650fc?auto=format&fit=crop&w=1800&q=80',
    label: 'Espace de vie ouvert sur le jardin',
  },
  {
    src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20b?auto=format&fit=crop&w=1800&q=80',
    label: 'Protection solaire – store extérieur',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
    label: 'Confort et finitions',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80',
    label: 'Ouvertures et circulations',
  },
  {
    src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=80',
    label: 'Ambiance et luminosité',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448071-1e5adf7b6cf2?auto=format&fit=crop&w=1800&q=80',
    label: 'Fenêtres & performances',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=1800&q=80',
    label: 'Intérieur / extérieur',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80',
    label: 'Design contemporain',
  },
];

export default function GaleriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la galerie
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="section">
        <div className="section-inner space-y-6">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/galerie', label: 'Galerie photo' },
            ]}
          />
          <header className="space-y-3">
            <p className="badge">Galerie photo</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Galerie d’inspiration : vérandas, verrières &amp; menuiseries
            </Heading>
            <Text className="max-w-2xl text-sm text-muted">
              Cette page présente des visuels d’inspiration autour des vérandas, verrières,
              toitures ouvrantes, stores et menuiseries aluminium. Pour partager des photos de
              réalisations ou demander un devis, contactez {company.name}.
            </Text>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allImages.map((item) => (
              <figure
                key={item.src}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={1200}
                  height={720}
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-40 w-full object-cover opacity-90"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Ces visuels sont fournis à titre d&apos;illustration. Pour partager des photos de
            réalisations ou demander un devis, utilisez la page{' '}
            <Link href="/contact#formulaire-devis" className="underline-offset-2 hover:underline">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}