import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { company } from '../../../../../content/company';
import { ServicePageTemplate } from '../../../../../components/templates/ServicePageTemplate';
import { Breadcrumbs } from '../../../../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../../../../lib/breadcrumbs';
import { buildMetadata } from '../../../../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Vidéosurveillance entreprise à Paris – Installation & maintenance',
  description:
    "MAB SECURITE accompagne les entreprises à Paris et en Île-de-France pour la vidéosurveillance de leurs bureaux, commerces, entrepôts et sites sensibles : audit, conception, installation de caméras, maintenance et conformité RGPD/CNIL.",
  canonicalPath: '/solutions/securite-electronique/videosurveillance-entreprise-paris',
});

function getVideoSurveillanceServiceJsonLd() {
  const baseUrl = company.contact.websiteUrl || 'https://www.mab-securite.fr';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Vidéosurveillance entreprise Paris',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      url: baseUrl.replace(/\/$/, ''),
    },
    description:
      'Conception, installation et maintenance de systèmes de vidéosurveillance pour les entreprises à Paris et en Île-de-France : bureaux, commerces, entrepôts et sites sensibles.',
    areaServed: 'Paris et Île-de-France',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'Paris et Île-de-France',
    },
  };
}

function getVideoSurveillanceFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          'Quelles sont les obligations légales pour installer des caméras de vidéosurveillance en entreprise à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "L'installation de caméras de vidéosurveillance en entreprise est encadrée par le RGPD et les recommandations de la CNIL. L'employeur doit définir une finalité précise (sécurité des biens et des personnes, prévention des vols, etc.), informer clairement les salariés et les visiteurs, limiter la durée de conservation des images et sécuriser l'accès aux enregistrements. Dans certains cas, une consultation des représentants du personnel et une inscription au registre des traitements sont également nécessaires.",
        },
      },
      {
        '@type': 'Question',
        name:
          'Comment choisir le bon système de vidéosurveillance pour des bureaux ou un commerce à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Le choix d'un système de vidéosurveillance dépend de la configuration des locaux (bureaux, open spaces, zones de stock, réserves, accès sensibles), des risques identifiés (intrusions, vols, dégradations) et des contraintes réglementaires. Un audit de sûreté permet de définir le nombre et le positionnement des caméras, les zones à couvrir, le type de matériel (caméras fixes, dômes, caméras IP) et les besoins en enregistrement et supervision.",
        },
      },
      {
        '@type': 'Question',
        name:
          "Quelle différence entre vidéosurveillance et télésurveillance pour une entreprise à Paris ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "La vidéosurveillance correspond à l'installation de caméras et d'un système d'enregistrement local, tandis que la télésurveillance ajoute une supervision à distance par un centre spécialisé qui peut effectuer des levées de doute, déclencher des rondes ou prévenir les forces de l'ordre. Pour certains sites, la combinaison vidéosurveillance + télésurveillance + rondes de sûreté offre un niveau de protection renforcé.",
        },
      },
    ],
  };
}

export default function VideoSurveillanceEntrepriseParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le service de vidéosurveillance entreprise à Paris
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoSurveillanceServiceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD pour la FAQ vidéosurveillance
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideoSurveillanceFaqJsonLd()) }}
      />
      <ServicePageTemplate
        h1="Vidéosurveillance entreprise à Paris : installation et maintenance"
        badge="Sécurité électronique · Vidéosurveillance · Paris"
        intro={`Cette page s’adresse aux dirigeants, responsables de la sûreté, DAF ou facility managers qui souhaitent sécuriser leurs bureaux, commerces, entrepôts ou sites sensibles à Paris et en Île-de-France grâce à un système de vidéosurveillance conforme au RGPD et efficace sur le terrain.`}
        sidebar={
          <div className="space-y-3">
            <p className="font-medium text-slate-100">
              Besoin d&apos;un audit de vidéosurveillance pour votre entreprise à Paris ?
            </p>
            <p className="text-slate-300">
              {company.name} réalise des audits de sûreté dédiés à la vidéosurveillance
              : analyse des risques, couverture des zones sensibles, recommandations
              techniques et vérification de la conformité RGPD/CNIL.
            </p>
            <div className="pt-2 space-y-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
              >
                Demandez votre audit de sûreté gratuit
              </Link>
              <p className="text-[11px] text-slate-400">
                Possibilité de devis personnalisé sous 24&nbsp;heures pour un système de
                vidéosurveillance clé en main (caméras, enregistrement, supervision).
              </p>
            </div>
          </div>
        }
      >
        {/* H2 : Pourquoi la vidéosurveillance est stratégique pour votre entreprise à Paris ? */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Pourquoi la vidéosurveillance est stratégique pour votre entreprise à Paris&nbsp;?
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Risques urbains, vols et démarque inconnue
            </h3>
            <p>
              À Paris et en Île-de-France, les entreprises sont confrontées à des risques
              variés&nbsp;: vols internes et externes, intrusions, dégradations, fraude,
              démarque inconnue en magasin, intrusions sur les parkings ou dans les halls.
              Un système de <strong>vidéosurveillance entreprise à Paris</strong> bien
              conçu permet de dissuader, de détecter et d&apos;analyser ces situations, tout
              en fournissant des éléments objectifs en cas d&apos;incident.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Enjeux de conformité RGPD et CNIL
            </h3>
            <p>
              La vidéosurveillance en entreprise est encadrée par le <strong>RGPD</strong>
              et les lignes directrices de la <strong>CNIL</strong>. Il ne s&apos;agit pas
              simplement d&apos;installer des caméras, mais de définir une{' '}
              <strong>sécurité entreprise</strong> compatible avec la protection des données
              personnelles&nbsp;: zones filmées pertinentes, durée de conservation maîtrisée,
              information des salariés et visiteurs. {company.name} vous accompagne pour
              concilier exigence de sécurité et respect du cadre légal.
            </p>
          </div>
        </section>

        {/* H2 : Notre offre de vidéosurveillance entreprise à Paris */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Notre offre de vidéosurveillance entreprise à Paris
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Audit, conception et choix des caméras
            </h3>
            <p>
              Nous commençons par un <strong>audit de sûreté</strong> de vos sites
              parisiens&nbsp;: bureaux, open spaces, réserves, quais de réception, zones de
              stock, halls d&apos;accueil ou parkings. Cet audit permet de définir le nombre
              et le positionnement des caméras de surveillance, de choisir entre caméras
              fixes, dômes motorisés ou caméras IP, et de préciser les angles de vue et les
              zones prioritaires à couvrir.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Installation des caméras et paramétrage du système
            </h3>
            <p>
              Nous coordonnons l&apos;<strong>installation des caméras dans vos bureaux</strong>{' '}
              et locaux professionnels avec des prestataires techniques spécialistes de la
              vidéosurveillance. L&apos;objectif&nbsp;: mettre en place un{' '}
              <strong>système de surveillance à Paris</strong> fiable, discret et robuste,
              avec une qualité d&apos;image adaptée à vos besoins (identification, contrôle
              des flux, surveillance de zones sensibles).
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Maintenance, supervision et télésurveillance
            </h3>
            <p>
              Un dispositif de vidéosurveillance n&apos;est efficace que s&apos;il est
              correctement maintenu et exploité. Nous pouvons intégrer vos caméras à un
              service de <strong>télésurveillance</strong> pour assurer des levées de doute
              à distance, des alertes en temps réel et, le cas échéant, déclencher des
              rondes de sûreté ou l&apos;intervention d&apos;équipes de gardiennage. La
              vidéosurveillance devient ainsi un maillon d&apos;une chaîne de{' '}
              <strong>protection 24/7</strong>.
            </p>
            <p className="text-[11px] text-slate-400">
              Pour une approche globale combinant agents de sécurité, maîtres-chiens et
              dispositifs incendie, vous pouvez également consulter notre page{' '}
              <Link
                href="/securite-privee-paris"
                className="underline-offset-2 hover:underline"
              >
                Sécurité BTP à Paris et sites sensibles
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 : Vidéosurveillance, RGPD et responsabilité de l'employeur */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            Vidéosurveillance, RGPD et responsabilité de l&apos;employeur
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Cadre CNIL et protection des données
            </h3>
            <p>
              La mise en place d&apos;un système de vidéosurveillance en entreprise doit
              respecter des principes clés&nbsp;: finalité déterminée, proportionnalité,
              minimisation des données, durée de conservation limitée et sécurité des
              accès aux enregistrements. Les salariés et visiteurs doivent être informés
              de manière claire et loyale (panneaux d&apos;information, notices internes),
              et seules les personnes habilitées doivent pouvoir consulter les images.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Sécurité et gestion des risques juridiques
            </h3>
            <p>
              Un dispositif mal configuré (caméras filmant en continu les postes de travail,
              conservation excessive des images, accès non sécurisé) peut générer des
              risques de non-conformité, des sanctions de la CNIL et des tensions sociales.
              {` `}{company.name} vous aide à intégrer la vidéosurveillance dans un ensemble
              plus large d&apos;<strong>expertise conseil</strong> en sûreté, pour protéger
              vos actifs sans mettre en difficulté votre organisation sur le plan légal.
            </p>
          </div>
        </section>

        {/* H2 : MAB Sécurité : un interlocuteur unique pour votre sécurité électronique */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            {company.name}&nbsp;: un interlocuteur unique pour votre sécurité électronique
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Coordination avec la sécurité humaine et incendie
            </h3>
            <p>
              La véritable efficacité d&apos;un système de vidéosurveillance se mesure à sa
              capacité à s&apos;articuler avec vos équipes et vos procédures&nbsp;: agents de
              sécurité, rondes de sûreté, gardiennage, équipes SSIAP, PC de sûreté, plan de
              gestion de crise. {company.name} se positionne comme un partenaire capable de
              faire le lien entre <strong>sécurité humaine</strong>,{' '}
              <strong>sécurité électronique</strong> et <strong>sécurité incendie</strong>.
            </p>
            <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
              Exemples de sites accompagnés
            </h3>
            <ul className="space-y-1.5">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Bureaux et sièges sociaux en cœur de ville ou à La Défense.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Commerces et surfaces de vente sujettes à la démarque inconnue.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                <span>Entrepôts logistiques, quais de chargement et zones de stockage.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact#formulaire-devis"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-950/60 px-4 py-2 text-[11px] font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Obtenez un devis vidéosurveillance en 24h
              </Link>
            </div>
          </div>
        </section>

        {/* H2 : FAQ - Vidéosurveillance entreprise à Paris */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
            FAQ – Vidéosurveillance entreprise à Paris
          </h2>
          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Peut-on utiliser la vidéosurveillance pour contrôler le travail des salariés&nbsp;?
              </p>
              <p>
                Non. La vidéosurveillance ne doit pas avoir pour finalité principale le contrôle
                permanent de l&apos;activité des salariés. Elle doit être centrée sur la
                sécurité des biens et des personnes, la prévention des intrusions ou des vols.
                D&apos;autres dispositifs (organisation du travail, supervision hiérarchique,
                outils de suivi) doivent être utilisés pour le pilotage managérial.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Combien de temps peut-on conserver les images de vidéosurveillance&nbsp;?
              </p>
              <p>
                En règle générale, la durée de conservation doit être limitée à quelques jours
                ou semaines, en fonction des besoins opérationnels et des contraintes
                d&apos;enquête en cas d&apos;incident. Une conservation plus longue doit être
                dûment justifiée et documentée au regard du RGPD.
              </p>
            </div>
            <div className="card-muted space-y-2 p-4">
              <p className="font-medium text-slate-100">
                Que se passe-t-il si mon système de vidéosurveillance n&apos;est pas conforme&nbsp;?
              </p>
              <p>
                Un dispositif non conforme peut être signalé à la CNIL, faire l&apos;objet de
                mises en demeure et, en cas de manquements graves, entraîner des sanctions. Il
                peut également fragiliser votre position en cas de litige avec un salarié ou un
                tiers. D&apos;où l&apos;importance d&apos;un accompagnement pour concilier
                sécurité physique et conformité juridique.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/contact#formulaire-devis"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400"
            >
              Contactez notre expert vidéosurveillance à Paris
            </Link>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  );
}