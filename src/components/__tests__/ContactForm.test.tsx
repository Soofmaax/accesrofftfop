import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('affiche les erreurs de validation quand soumis vide', () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    expect(
      screen.getByText(/Prénom requis/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Nom requis/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Téléphone requis/i)
    ).toBeInTheDocument();

    // Email peut être "requis" ou "invalide" selon l'ordre des validations
    const emailError =
      screen.queryByText(/Email invalide/i) ??
      screen.queryByText(/Email requis/i);
    expect(emailError).toBeInTheDocument();

    expect(
      screen.getByText(/Code postal requis/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Type de projet requis/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Vous devez accepter le traitement des données/i)
    ).toBeInTheDocument();
  });

  it('soumet avec succès quand le formulaire est valide', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/Votre prénom/i), {
      target: { value: 'Jean' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Votre nom/i), {
      target: { value: 'Dupont' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Votre numéro de téléphone/i), {
      target: { value: '0600000000' },
    });
    fireEvent.change(screen.getByPlaceholderText(/votre@email\.com/i), {
      target: { value: 'jean.dupont@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/75001/i), {
      target: { value: '75001' },
    });

    // sélection du type de projet
    const select = screen.getByRole('combobox');
    fireEvent.change(select, {
      target: { value: "Trappe d'accès toit" },
    });

    fireEvent.click(screen.getByRole('checkbox'));

    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    expect(
      screen.getByText(/Demande envoyée avec succès/i)
    ).toBeInTheDocument();
  });
});