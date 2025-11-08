import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('render un contenu principal sans crash', () => {
    render(<App />);
    // Vérifie le titre de la section Services (H2), pour éviter les collisions avec le footer
    const servicesHeading = screen.getByRole('heading', { name: /Nos Services/i, level: 2 });
    expect(servicesHeading).toBeInTheDocument();
  });
});