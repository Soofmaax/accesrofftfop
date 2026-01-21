import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../content/company';
import { ContactForm } from '../../components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & demande de devis',
  description:
    "Contactez MAB SECURITE pour toute demande de devis ou d'information concernant la sécurisation de vos sites, événements et environnements professionnels.",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="section-inner space-y-10">
        <header className="space-y-3">
          <p className="badge">Contact</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Échangeons sur vos besoins en sécurité
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            Pour toute question, étude ou demande de devis, complétez le formulaire ci-dessous
            ou contactez-nous directement par téléphone ou par e-mail. Nous analysons chaque
            demande de manière individualisée afin de proposer un dispositif cohérent avec
            votre contexte et vos priorités.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <section id="formulaire-devis">
            <ContactForm />
          </section>

          <aside className="space-y-4 text-sm text-slate-200">
            <div className="card p-6">
              <h2 className="text-sm font-semibold text-slate-50">
                Coordonnées de MAB SECURITE
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <div>
                    <p>{company.address.line1}</p>
                    {company.address.line2 && <p>{company.address.line2}</p>}
                    <p>
                      {company.address.postalCode} {company.address.city}
                    </p>
                    <p>{company.address.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <a
                    href={`tel:${company.contact.phone.value}`}
                    className="hover:text-emerald-300"
                  >
                    {company.contact.phone.label}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-emerald-300"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted">
                Zone d’intervention&nbsp;: {company.areaServed}
              </p>
            </div>

            <div className="card-muted p-6 text-xs text-slate-300">
              <p className="font-medium text-slate-100">
                Pour les demandes sensibles ou urgentes
              </p>
              <p className="mt-2">
                Certaines missions de sécurité impliquent des informations confidentielles
                (sites sensibles, contraintes particulières, personnalités, etc.). Dans ce
                cas, nous vous invitons à privilégier un échange direct par téléphone afin
                de cadrer précisément le besoin.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}