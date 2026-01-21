import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { company, services } from '../../content/company';

export const metadata: Metadata = {
  title: 'Prestations de sécurité privée',
  description:
    "Prestations de sécurité MAB SECURITE : sécurité événementielle, gardiennage, rondes de prévention et sécurisation de sites pour les professionnels.",
};

export default function PrestationsPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-8">
        <header className="space-y-3">
          <p className="badge">Prestations</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Prestations de sécurité privées pour vos sites et événements
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            {company.name} conçoit et pilote des dispositifs de sécurité sur mesure pour
            les entreprises, collectivités et organisateurs d&apos;événements. Chaque
            mission fait l&apos;objet d&apos;une étude préalable et d&apos;un brief
            opérationnel précis.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <section key={service.slug} className="card p-6 text-sm">
              <h2 className="text-base font-semibold text-slate-50">
                {service.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="card-muted p-5 text-xs text-slate-300">
          <p className="font-medium text-slate-100">
            Besoin d’une combinaison de plusieurs prestations&nbsp;?
          </p>
          <p className="mt-2">
            Nous construisons des dispositifs hybrides mêlant gardiennage, rondes et
            sécurité événementielle, en lien avec vos procédures internes (plans de
            prévention, consignes d&apos;accès, gestion des visiteurs, etc.).
          </p>
        </div>
      </div>
    </div>
  );
}