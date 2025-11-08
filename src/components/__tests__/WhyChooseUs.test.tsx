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
});