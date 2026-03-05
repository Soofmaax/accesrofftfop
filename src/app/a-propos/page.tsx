import type { Metadata } from 'next';
import Link from 'next/link';
import { Ruler } from 'lucide-react';
import { company } from '../../content/company';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: 'Qui sommes-nous ? – Art et Maison, créateur de vérandas',
  description:
    'Présentation de Art et Maison : conception, fabrication sur mesure et installation de vérandas, verrières, toitures escamotables, stores et menuiseries aluminium à Paris & Île-de-France.',
  canonicalPath: '/a-propos',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Qui sommes-nous ?', path: '/a-propos' },
]);

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page À propos
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-10">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/a-propos', label: 'Qui sommes-nous ?' },
              ]}
            />
            <p className="badge">Qui sommes-nous ?</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Art et Maison, créateur de vérandas
            </Heading>
            <Text className="max-w-3xl text-sm text-muted">
              {company.name} conçoit, fabrique et installe des vérandas, verrières et
              menuiseries aluminium pour améliorer votre confort : luminosité, isolation,
              aération et protections solaires. Nous intervenons à Paris et en Île-de-France.
            </Text>
          </header>

          <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <article className="space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Ruler className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <Heading level={2} className="text-base">
                    Une véranda pensée pour être vécue
                  </Heading>
                  <Text className="text-sm text-slate-300">
                    Chaque projet commence par une étude concrète : exposition, contraintes
                    d&apos;accès, isolation, ventilation et besoins d&apos;occultation. L&apos;objectif
                    est de créer une pièce à vivre agréable, toute l&apos;année.
                  </Text>
                </div>
              </div>

              <Text className="text-sm text-slate-300">
                Nous réalisons des vérandas contemporaines comme des styles plus classiques
                (verrières, ateliers d&apos;artistes), ainsi que des solutions plus spécifiques :
                toitures ouvrantes / coulissantes, bow-windows, grandes baies vitrées et
                structures vitrées.
              </Text>

              <Text className="text-sm text-slate-300">
                Pour la structure, nous travaillons avec des gammes reconnues (ex. Technal,
                Sapa / Intexalu). Les vitrages et options sont choisis selon l&apos;usage :
                confort thermique, sécurité, gestion solaire, acoustique.
              </Text>

              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
                <Heading level={3} className="text-[13px]">
                  Fabrication &amp; pose en Île-de-France
                </Heading>
                <Text className="text-xs text-slate-200">
                  Nous intervenons en région parisienne (Paris, Hauts-de-Seine, Yvelines,
                  Essonne, Val-de-Marne, Val-d&apos;Oise, Seine-et-Marne) pour la pose et le suivi
                  de chantier.
                </Text>
                <Text className="text-xs text-slate-400">
                  Pour démarrer, vous pouvez consulter la page{' '}
                  <Link href="/produits" className="underline-offset-2 hover:underline">
                    Produits
                  </Link>{' '}
                  puis nous contacter pour un devis.
                </Text>
              </div>
            </article>

            <aside className="card p-6 text-xs text-slate-200">
              <Heading level={2} className="text-sm">
                Informations clés
              </Heading>
              <div className="mt-3 space-y-1.5">
                <Text className="text-xs text-slate-200">
                  <span className="text-slate-400">Dénomination&nbsp;:</span> {company.legalName}
                </Text>
                {company.legalForm && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">Forme&nbsp;:</span> {company.legalForm}
                  </Text>
                )}
                {company.nafApe && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">Code NAF / APE&nbsp;:</span> {company.nafApe}
                  </Text>
                )}
                {company.siren && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">SIREN&nbsp;:</span> {company.siren}
                  </Text>
                )}
                {company.siret && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">SIRET&nbsp;:</span> {company.siret}
                  </Text>
                )}
                {company.vatNumber && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">TVA&nbsp;:</span> {company.vatNumber}
                  </Text>
                )}
                {company.shareCapital && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">Capital social&nbsp;:</span> {company.shareCapital}
                  </Text>
                )}
                {company.creationDate && (
                  <Text className="text-xs text-slate-200">
                    <span className="text-slate-400">Création&nbsp;:</span> {company.creationDate}
                  </Text>
                )}
                <Text className="text-xs text-slate-200">
                  <span className="text-slate-400">Siège&nbsp;:</span>
                  <br />
                  {company.address.line1}
                  {company.address.line2 && (
                    <>
                      <br />
                      {company.address.line2}
                    </>
                  )}
                  <br />
                  {company.address.postalCode} {company.address.city}
                  <br />
                  {company.address.country}
                </Text>
              </div>

              <div className="mt-5 space-y-2">
                <Link
                  href="/contact#formulaire-devis"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
                >
                  Demander un devis
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </>
  );
}