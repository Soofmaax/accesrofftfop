import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

describe('Testimonials', () => {
  it('rend le heading et au moins un témoignage', () => {
    render(<Testimonials />);

    expect(
      screen.getByRole('heading', { name: /Ce Que Disent Nos Clients/i, level: 2 })
    ).toBeInTheDocument();

    // Vérifie qu'un contenu de témoignage est présent via guillemets
    expect(
      screen.getByText(/Travail impeccable, conforme aux normes/i)
    ).toBeInTheDocument();
  });
});