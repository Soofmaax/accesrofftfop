import { useState } from 'react';
import type { FormData } from '../types';

export type FormErrors = Partial<Record<keyof FormData, string>>;

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    postalCode: '',
    projectType: '',
    description: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    "Trappe d'accès toit",
    'Escalier escamotable',
    'Échelle de toit',
    'Aménagement terrasse',
    'Mise aux normes',
    'Autre projet',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Code postal requis';
    if (!formData.projectType) newErrors.projectType = 'Type de projet requis';
    if (!formData.consent) newErrors.consent = 'Vous devez accepter le traitement des données';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // TODO: intégration backend (fetch/axios)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user starts typing
    const key = name as keyof FormData;
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  return {
    formData,
    errors,
    isSubmitted,
    projectTypes,
    handleChange,
    handleSubmit,
  };
}