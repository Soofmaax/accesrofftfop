import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('ouvre le menu mobile au clic et l\'affiche', () => {
    render(<Header />);

    const toggle = screen.getByTestId('menu-toggle');
    fireEvent.click(toggle);

    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toBeInTheDocument();
  });

  it('affiche et déclenche le CTA "Devis gratuit" sans erreur', () => {
    render(<Header />);

    const cta = screen.getAllByRole('button', { name: /Devis gratuit/i })[0];
    fireEvent.click(cta);
    // Pas d'assertion spécifique, on vérifie simplement que le clic ne provoque pas d'erreur
    expect(cta).toBeInTheDocument();
  });
});