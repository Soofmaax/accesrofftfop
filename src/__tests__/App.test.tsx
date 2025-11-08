import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('render un contenu principal sans crash', () => {
    render(<App />);
    // Vérifie au moins une section clé
    const heading =
      screen.queryByText(/Nos Services/i) ??
      screen.queryByText(/Demandez Votre Devis Gratuit/i);
    expect(heading).toBeInTheDocument();
  });
});