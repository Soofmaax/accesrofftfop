import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../content/company';
import { ContactForm } from '../../components/forms/ContactForm';
import { buildMetadata } from '../../lib/seo';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';
import { buildBreadcrumbJsonLd } from '../../lib/breadcrumbs';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Art et Maison – Devis véranda & menuiseries aluminium',
  description:
    'Contactez Art et Maison pour une demande de devis : véranda sur mesure, verrière aluminium, toiture escamotable (coulissante), store de véranda, fenêtres et volets. Intervention à Paris & Île-de-France.',
  canonicalPath: '/contact',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Contact', path: '/contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD pour le fil d'Ariane (BreadcrumbList) de la page Contact
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="section">
        <div className="section-inner space-y-10">
          <header className="space-y-3">
            <Breadcrumbs
              items={[
                { href: '/', label: 'Accueil' },
                { href: '/contact', label: 'Contact' },
              ]}
            />
            <p className="badge">Contact</p>
            <Heading level={1} className="text-2xl sm:text-3xl">
              Parlons de votre projet
            </Heading>
            <Text variant="muted" className="max-w-2xl text-sm">
              Pour une question ou une demande de devis (véranda, verrière, toiture ouvrante,
              stores, fenêtres, volets), complétez le formulaire ci-dessous ou contactez-nous
              directement. Plus vous nous donnez d&apos;informations (dimensions, exposition,
              code postal, contraintes d&apos;accès), plus la réponse sera rapide.
            </Text>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <section id="formulaire-devis">
              <ContactForm />
            </section>

            <aside className="space-y-4 text-sm text-slate-200">
              <div className="card p-6">
                <Heading level={2} className="text-sm">
                  Coordonnées de {company.name}
                </Heading>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <div>
                      <Text className="text-sm">{company.address.line1}</Text>
                      {company.address.line2 && <Text className="text-sm">{company.address.line2}</Text>}
                      <Text className="text-sm">
                        {company.address.postalCode} {company.address.city}
                      </Text>
                      <Text className="text-sm">{company.address.country}</Text>
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
                <Text variant="muted" className="mt-4 text-xs">
                  Zone d’intervention&nbsp;: {company.areaServed}
                </Text>
              </div>

              <div className="card-muted p-6 text-xs text-slate-300">
                <Text className="font-medium text-slate-100">Conseil</Text>
                <Text className="mt-2">
                  Pour une première estimation, indiquez votre code postal, la surface
                  approximative et le type de toiture (vitrée, isolée, ouvrante) ainsi que
                  vos besoins en protection solaire.
                </Text>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}