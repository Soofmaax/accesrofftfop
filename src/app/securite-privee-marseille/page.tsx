import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Société de sécurité privée à Marseille – BTP, sites industriels & événements',
  description:
    'MAB SECURITE, société de sécurité privée à Marseille, sécurise vos chantiers BTP, sites industriels, portuaires, logistiques, commerciaux et événements dans les Bouches-du-Rhône : gardiennage, surveillance humaine, rondes de sûreté et sécurité événementielle.',
};

export default function SecuritePriveeMarseillePage() {
  const keyServices = services.filter((service) =>
    ['gardiennage-surveillance', 'rondes-prevention', 'securisation-sites-perimetres'].includes(
      service.slug,
    ),
  );

  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Marseille · Bouches-du-Rhône</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Société de sécurité privée à Marseille pour sites BTP, industriels et événements
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} accompagne les acteurs du BTP, les sites industriels et
            logistiques, les exploitants de sites commerciaux ainsi que les organisateurs
            d&apos;événements à Marseille et dans les Bouches-du-Rhône. Nos dispositifs de
            sécurité privée s&apos;adaptent aux contraintes des sites à forte activité&nbsp;:
            flux de personnes et de véhicules, zones sensibles, accès multiples et
            exigences réglementaires renforcées.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-50">
              Sécurisation de vos sites à Marseille et dans le 13
            </h2>
            <p>
              Nous intervenons sur des sites industriels, plateformes logistiques, dépôts,
              chantiers de grande envergure ou zones portuaires. Les dispositifs mis en
              place combinent présence humaine, rondes de sûreté et contrôle des accès,
              avec un reporting adapté à vos besoins internes (main courante, synthèses
              périodiques, remontée des incidents).
            </p>
            <p>
              {company.name} peut être mobilisée dans le cadre de contrats de site, de
              besoins ponctuels (chantier, évènement) ou d&apos;appels d&apos;offres
              privés et publics. Nous travaillons en lien avec vos équipes HSE, QSE ou
              sûreté, ainsi qu&apos;avec vos autres prestataires (télésurveillance,
              maintenance, gardiennage interne).
            </p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-200">
              <p className="font-semibold text-slate-50">
                France Sud – Marseille, Montpellier &amp; côte méditerranéenne
              </p>
              <p className="mt-1 text-slate-200">
                Responsable opérationnel : <span className="font-semibold">Sofiane</span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Les coordonnées directes de la zone Sud sont partagées avec les interlocuteurs
                en charge de sites situés à Marseille, Montpellier et sur la côte méditerranéenne.
              </p>
              <p className="mt-2 text-xs text-muted">
                Pour une première prise de contact, vous pouvez utiliser le numéro principal
                affiché sur le site ou le formulaire de contact.
              </p>
            </div>
          </div>

          <aside className="card p-5 text-xs text-slate-200">
            <h2 className="text-sm font-semibold text-slate-50">
              Exemples de situations prises en charge à Marseille
            </h2>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Gardiennage de chantiers BTP et opérations d&apos;aménagement</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Gardiennage de sites industriels et de dépôts logistiques</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Surveillance de zones portuaires et périmètres sensibles</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Rondes de sûreté et levées de doute en horaires décalés</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span>Dispositifs de sécurité pour événements professionnels et grand public</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Prestations clés mobilisables à Marseille
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {keyServices.map((service) => (
              <article key={service.slug} className="card-muted p-4 text-xs text-slate-300">
                <h3 className="text-sm font-semibold text-slate-50">{service.name}</h3>
                <p className="mt-1.5 text-muted">{service.shortDescription}</p>
                <ul className="mt-2 space-y-1.5">
                  {service.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Expertises locales pour vos sites marseillais
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Caméras de surveillance &amp; détecteurs de mouvement
              </h3>
              <p className="mt-1.5 text-muted">
                Déploiement et pilotage, avec vos prestataires de vidéosurveillance, de caméras
                de surveillance, détecteurs de mouvement et contrôle d’accès pour renforcer la
                sécurité de vos entrepôts, sites industriels, plateformes logistiques et
                chantiers marseillais à forte activité.
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Agents de sécurité &amp; maîtres-chiens
              </h3>
              <p className="mt-1.5 text-muted">
                Agents de sécurité habitués aux environnements industriels, portuaires et
                commerciaux, avec possibilité de mobiliser des maîtres-chiens pour renforcer
                la dissuasion et la surveillance de zones sensibles, notamment en périphérie
                de sites étendus ou isolés.
              </p>
            </article>
            <article className="card-muted p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Protection incendie &amp; agents SSIAP
              </h3>
              <p className="mt-1.5 text-muted">
                Intégration de la dimension sécurité incendie dans vos dispositifs de sûreté&nbsp;:
                rondes de sécurité incendie, prise en compte des zones ATEX et coordination
                éventuelle avec des agents SSIAP selon la nature de vos installations.
              </p>
            </article>
          </div>
        </section>

        <section className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Besoin d&apos;un dispositif de sécurité sur un site marseillais ?
          </p>
          <p className="mt-2">
            Nous étudions vos attentes (type de site, contraintes d&apos;accès, flux,
            réglementation, appels d&apos;offres privés ou publics) afin de proposer un
            dispositif de sécurité humain cohérent avec vos enjeux opérationnels et votre
            organisation interne.
          </p>
          <div className="mt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Échanger sur un projet à Marseille
            </Link>
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            Vous gérez également des sites à{' '}
            <Link href="/securite-privee-paris" className="underline-offset-2 hover:underline">
              Paris
            </Link>
            ,{' '}
            <Link href="/securite-privee-montpellier" className="underline-offset-2 hover:underline">
              Montpellier
            </Link>{' '}
            ou{' '}
            <Link href="/securite-privee-nimes" className="underline-offset-2 hover:underline">
              Nîmes / Gard
            </Link>
            &nbsp;? Les équipes France Nord et France Sud de MAB SECURITE peuvent coordonner un
            dispositif de sécurité cohérent sur l&apos;ensemble de votre parc.
          </p>
        </section>
      </div>
    </div>
  );
}