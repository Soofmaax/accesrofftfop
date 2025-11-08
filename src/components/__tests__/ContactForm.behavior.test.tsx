import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm behavior', () => {
  it('efface les erreurs au changement de champ (firstName)', () => {
    render(<ContactForm />);

    // Soumission à vide pour générer les erreurs
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    // Erreur affichée
    expect(screen.getByText('Prénom requis')).toBeInTheDocument();

    // Remplir le champ pour effacer l'erreur
    fireEvent.change(screen.getByPlaceholderText(/Votre prénom/i), {
      target: { value: 'Jean' },
    });

    // L'erreur est effacée
    expect(screen.queryByText('Prénom requis')).toBeNull();
  });

  it('affiche "Email invalide" puis efface l’erreur quand l’email devient valide', () => {
    render(<ContactForm />);

    // Soumission à vide
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    // L'implémentation fixe "Email invalide" quand vide (override)
    const emailError =
      screen.queryByText('Email invalide') ?? screen.queryByText('Email requis');
    expect(emailError).toBeInTheDocument();

    // Renseigner un email valide
    fireEvent.change(screen.getByPlaceholderText(/votre@email\.com/i), {
      target: { value: 'jean.dupont@example.com' },
    });

    // L'erreur est effacée
    expect(
      screen.queryByText('Email invalide') ?? screen.queryByText('Email requis')
    ).toBeNull();
  });

  it('efface l’erreur de consentement lorsque la case est cochée', () => {
    render(<ContactForm />);

    // Soumission à vide
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    // Erreur de consentement présente
    expect(
      screen.getByText('Vous devez accepter le traitement des données')
    ).toBeInTheDocument();

    // Cocher la case pour accepter
    fireEvent.click(screen.getByRole('checkbox'));

    // L'erreur de consentement disparaît
    expect(
      screen.queryByText('Vous devez accepter le traitement des données')
    ).toBeNull();
  });

  it('efface l’erreur sur le type de projet après sélection', () => {
    render(<ContactForm />);

    // Soumission à vide
    fireEvent.click(screen.getByRole('button', { name: /Envoyer ma demande de devis/i }));

    // Erreur présente
    expect(screen.getByText('Type de projet requis')).toBeInTheDocument();

    // Sélection d'un type de projet
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: "Trappe d'accès toit" } });

    // L'erreur disparaît
    expect(screen.queryByText('Type de projet requis')).toBeNull();
  });
});