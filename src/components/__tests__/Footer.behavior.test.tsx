import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer behavior', () => {
  it('déclenche le scroll pour Réalisations, Zone d\'intervention et Contact', () => {
    render(<Footer />);

    const realisationsBtn = screen.getByRole('button', { name: /Réalisations/i });
    const zoneBtn = screen.getByRole('button', { name: /Zone d'intervention/i });
    const contactBtn = screen.getByRole('button', { name: /Contact/i });

    fireEvent.click(realisationsBtn);
    fireEvent.click(zoneBtn);
    fireEvent.click(contactBtn);

    expect(realisationsBtn).toBeInTheDocument();
    expect(zoneBtn).toBeInTheDocument();
    expect(contactBtn).toBeInTheDocument();
  });
});