'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2, Mail, Phone } from 'lucide-react';
import { company, services } from '../../content/company';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  postalCode: string;
  city: string;
  subject: string;
  message: string;
  date: string;
  consent: boolean;
  website: string; // champ honeypot anti-spam (non affiché)
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  postalCode?: string;
  subject?: string;
  consent?: string;
}

export const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    postalCode: '',
    city: '',
    subject: '',
    message: '',
    date: '',
    consent: false,
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const postalCodeRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLSelectElement | null>(null);
  const consentRef = useRef<HTMLInputElement | null>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = 'Nom et prénom requis.';
    if (!form.phone.trim()) newErrors.phone = 'Téléphone requis.';
    if (!form.postalCode.trim()) newErrors.postalCode = 'Code postal requis.';

    if (!form.email.trim()) {
      newErrors.email = 'Adresse e-mail requise.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }

    if (!form.subject) newErrors.subject = 'Veuillez sélectionner un type de projet.';
    if (!form.consent)
      newErrors.consent =
        'Vous devez accepter le traitement de vos données pour pouvoir envoyer ce formulaire.';

    return newErrors;
  };

  useEffect(() => {
    if (!hasTriedSubmit) return;

    const order: Array<keyof FormErrors> = [
      'fullName',
      'email',
      'phone',
      'postalCode',
      'subject',
      'consent',
    ];
    const firstErrorKey = order.find((field) => errors[field]);

    if (!firstErrorKey) return;

    switch (firstErrorKey) {
      case 'fullName':
        fullNameRef.current?.focus();
        break;
      case 'email':
        emailRef.current?.focus();
        break;
      case 'phone':
        phoneRef.current?.focus();
        break;
      case 'postalCode':
        postalCodeRef.current?.focus();
        break;
      case 'subject':
        subjectRef.current?.focus();
        break;
      case 'consent':
        consentRef.current?.focus();
        break;
    }
  }, [errors, hasTriedSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, type } = event.target;
    const value =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    setHasTriedSubmit(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi du formulaire.');
      }

      setHasSubmitted(true);
      setForm({
        fullName: '',
        email: '',
        phone: '',
        postalCode: '',
        city: '',
        subject: '',
        message: '',
        date: '',
        consent: false,
        website: '',
      });
    } catch {
      setSubmitError(
        "Une erreur est survenue lors de l'envoi de votre demande. Vous pouvez également nous contacter directement par téléphone ou par e-mail.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="card p-8 text-sm md:p-10">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
          Votre demande a bien été envoyée
        </h2>
        <p className="mt-3 text-muted">
          Nous accusons réception de votre message. Un membre de {company.name} vous
          recontactera dans les meilleurs délais.
        </p>
        <div className="mt-6 space-y-2 text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-emerald-400" />
            <a href={`tel:${company.contact.phone.value}`} className="hover:text-emerald-300">
              {company.contact.phone.label}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-emerald-400" />
            <a href={`mailto:${company.contact.email}`} className="hover:text-emerald-300">
              {company.contact.email}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 text-sm md:p-8" noValidate>
      <div className="mb-6 space-y-1">
        <h2 className="text-lg font-semibold text-slate-50 md:text-xl">Demande de devis</h2>
        <p className="text-muted">
          Indiquez votre localisation, le type de projet (véranda, verrière, toiture ouvrante,
          stores, fenêtres…) et quelques détails (dimensions, exposition, accès) afin que nous
          puissions vous répondre rapidement.
        </p>

        {/* Champ honeypot anti-spam (non visible pour les utilisateurs légitimes) */}
        <div className="hidden">
          <label>
            Ne pas remplir ce champ (protection anti-spam)
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Nom et prénom*
          </label>
          <input
            type="text"
            name="fullName"
            ref={fullNameRef}
            value={form.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.fullName ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Votre nom"
          />
          {errors.fullName && (
            <p id="contact-fullName-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            E-mail*
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.email ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="vous@exemple.fr"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Téléphone*
          </label>
          <input
            type="tel"
            name="phone"
            ref={phoneRef}
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.phone ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Numéro joignable"
          />
          {errors.phone && (
            <p id="contact-phone-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Code postal*
          </label>
          <input
            type="text"
            name="postalCode"
            ref={postalCodeRef}
            value={form.postalCode}
            onChange={handleChange}
            aria-invalid={!!errors.postalCode}
            aria-describedby={errors.postalCode ? 'contact-postalCode-error' : undefined}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.postalCode ? 'border-red-500/70' : 'border-slate-700'
            }`}
            placeholder="Ex. 92100"
          />
          {errors.postalCode && (
            <p id="contact-postalCode-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.postalCode}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Ville
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Ex. Boulogne-Billancourt"
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
            Type de projet*
          </label>
          <select
            name="subject"
            ref={subjectRef}
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            className={`mt-1 w-full rounded-lg border bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              errors.subject ? 'border-red-500/70' : 'border-slate-700'
            }`}
          >
            <option value="">Sélectionnez un type de projet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="autre">Autre projet</option>
          </select>
          {errors.subject && (
            <p id="contact-subject-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
          Période souhaitée
        </label>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Ex. dès que possible, printemps 2026…"
        />
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
          Informations utiles
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-1 w-full resize-y rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Dimensions approximatives, type de toiture (vitrée / isolée / ouvrante), stores, accès chantier, etc."
        />
      </div>

      <div className="mt-5 space-y-3 text-xs text-slate-400">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            ref={consentRef}
            checked={form.consent}
            onChange={handleChange}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
            className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
          />
          <span>
            J’accepte que les informations saisies soient utilisées par {company.name} pour
            analyser ma demande et me recontacter. Conformément à la réglementation en
            vigueur, vous pouvez exercer vos droits en nous contactant aux coordonnées
            indiquées sur ce site.
          </span>
        </label>
        {errors.consent && (
          <p id="contact-consent-error" className="text-xs text-red-400" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {submitError && (
        <p className="mt-3 text-xs text-red-400" role="alert">
          {submitError}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-700"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Envoyer ma demande
        </button>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span>Ou contactez-nous directement :</span>
          <a
            href={`tel:${company.contact.phone.value}`}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-100 hover:border-emerald-500"
          >
            <Phone className="h-3 w-3 text-emerald-400" />
            {company.contact.phone.label}
          </a>
          <a
            href={`mailto:${company.contact.email}`}
            className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-100 hover:border-emerald-500"
          >
            <Mail className="h-3 w-3 text-emerald-400" />
            {company.contact.email}
          </a>
        </div>
      </div>
    </form>
  );
};