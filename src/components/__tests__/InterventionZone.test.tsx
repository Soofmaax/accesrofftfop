import { render, screen } from '@testing-library/react';
import InterventionZone from '../InterventionZone';

describe('InterventionZone', () => {
  it('affiche le heading et la mention Île-de-France', () => {
    render(<InterventionZone />);

    expect(
      screen.getByRole('heading', { name: /Notre Zone d'Intervention/i, level: 2 })
    ).toBeInTheDocument();

    // Cible précisément le sous-titre h3 pour éviter les multiples matches dans le paragraphe
    expect(
      screen.getByRole('heading', { name: /Île-de-France/i, level: 3 })
    ).toBeInTheDocument();
  });
});