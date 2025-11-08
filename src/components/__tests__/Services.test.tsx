import { render, screen } from '@testing-library/react';
import Services from '../Services';
import { services } from '../../data/mockData';

describe('Services', () => {
  it('affiche le heading et toutes les cartes service', () => {
    render(<Services />);

    const heading = screen.getByRole('heading', { name: /Nos Services/i, level: 2 });
    expect(heading).toBeInTheDocument();

    const cardsHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(cardsHeadings.length).toBe(services.length);
  });

  it('affiche une icône par carte (fallback CheckCircle si non trouvée)', () => {
    render(<Services />);
    const svgs = screen.getAllByRole('img', { hidden: true });
    expect(svgs.length).toBeGreaterThanOrEqual(services.length);
  });
});