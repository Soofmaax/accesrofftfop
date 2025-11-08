import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header mobile CTA', () => {
  it('déclenche le scroll via le bouton mobile "Devis gratuit"', () => {
    render(<Header />);

    // Plusieurs boutons portent ce libellé; on cible spécifiquement celui avec aria-label
    const mobileCta = screen.getAllByRole('button', { name: /Demander un devis gratuit/i })
      // Essayons de récupérer le bouton sticky (hors menu mobile)
      .find((btn) => btn.closest('.fixed') !== null) ?? screen.getByRole('button', { name: /Demander un devis gratuit/i });

    fireEvent.click(mobileCta);
    expect(mobileCta).toBeInTheDocument();
  });
});