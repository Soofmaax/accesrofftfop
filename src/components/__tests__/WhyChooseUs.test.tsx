import { render, screen } from '@testing-library/react';
import WhyChooseUs from '../WhyChooseUs';
import { whyChooseUs } from '../../data/mockData';

describe('WhyChooseUs', () => {
  it('affiche le heading et toutes les cartes "Pourquoi nous choisir"', () => {
    render(<WhyChooseUs />);

    const heading = screen.getByRole('heading', { name: /Pourquoi Nous Choisir/i, level: 2 });
    expect(heading).toBeInTheDocument();

    const cardsHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(cardsHeadings.length).toBe(whyChooseUs.length);
  });

  it('utilise une icône par carte (fallback possible)', () => {
    render(<WhyChooseUs />);
    // Toutes les cartes ont une icône (<svg> lucide-react)
    const icons = screen.getAllByRole('img', { hidden: true });
    // Il y a au moins autant d'icônes que de cartes
    expect(icons.length).toBeGreaterThanOrEqual(whyChooseUs.length);
  });
});