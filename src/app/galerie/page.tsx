import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Galerie photo – Exemples de dispositifs de sécurité MAB SECURITE',
  description:
    "Galerie photo illustrant les contextes d'intervention de MAB SECURITE : chantiers BTP, entrepôts logistiques, centres commerciaux, événements et sites tertiaires.",
  canonicalPath: '/galerie',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Galerie photo', path: '/galerie' },
]);

const allImages = [
  {
    src: '/images/home-gallery-chantier-btp.png',
    label: 'Illustration de gardiennage de chantier BTP de nuit',
  },
  {
    src: '/images/home-gallery-entrepot-logistique.png',
    label: 'Illustration de sécurité pour entrepôt ou plateforme logistique',
  },
  {
    src: '/images/home-gallery-evenement-professionnel.png',
    label: 'Illustration de sécurité événementielle pour salon ou convention',
  },
  {
    src: '/images/home-gallery-site-tertiaire.png',
    label: 'Illustration de sécurité pour un site tertiaire ou administratif',
  },
  {
    src: '/images/gallery-01.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 1)',
  },
  {
    src: '/images/gallery-02.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 2)',
  },
  {
    src: '/images/gallery-03.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 3)',
  },
  {
    src: '/images/gallery-04.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 4)',
  },
  {
    src: '/images/gallery-05.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 5)',
  },
  {
    src: '/images/gallery-06.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 6)',
  },
  {
    src: '/images/gallery-07.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 7)',
  },
  {
    src: '/images/gallery-08.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 8)',
  },
  {
    src: '/images/gallery-09.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 9)',
  },
  {
    src: '/images/gallery-10.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 10)',
  },
  {
    src: '/images/gallery-11.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 11)',
  },
  {
    src: '/images/gallery-12.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 12)',
  },
  {
    src: '/images/gallery-13.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 13)',
  },
  {
    src: '/images/gallery-14.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 14)',
  },
  {
    src: '/images/gallery-15.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 15)',
  },
  {
    src: '/images/gallery-16.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 16)',
  },
  {
    src: '/images/gallery-17.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 17)',
  },
  {
    src: '/images/gallery-18.png',
    label: 'Illustration générique de dispositif de sécurité professionnelle (image 18)',
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
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Exemples de contextes d&apos;intervention sécurisés par {company.name}
            </h1>
            <p className="max-w-2xl text-sm text-muted">
              Cette galerie présente des visuels illustrant les principaux contextes pour lesquels{' '}
              {company.name} conçoit et pilote des dispositifs de sécurité&nbsp;: chantiers BTP,
              entrepôts et plateformes logistiques, centres commerciaux et retail, événements
              professionnels et sites tertiaires ou administratifs.
            </p>
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
                  className="h-40 w-full object-cover opacity-90"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1">
                  <span className="text-[10px] text-slate-200">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Ces visuels sont fournis à titre d&apos;illustration. Pour des exemples concrets de
            dispositifs de sécurité déployés sur vos sites (chantiers, entrepôts, centres
            commerciaux ou événements), n&apos;hésitez pas à nous contacter via la page{' '}
            <Link href="/contact#formulaire-devis" className="underline-offset-2 hover:underline">
              Contact &amp; demande de devis
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}