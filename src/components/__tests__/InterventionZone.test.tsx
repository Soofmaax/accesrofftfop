import { render, screen } from '@testing-library/react';
import InterventionZone from '../InterventionZone';

describe('InterventionZone', () => {
  it('affiche le heading et la mention Île-de-France', () => {
    render(<InterventionZone />);

    expect(
      screen.getByRole('heading', { name: /Notre Zone d'Intervention/i, level: 2 })
    ).toBeInTheDocument();

    expect(screen.getByText(/Île-de-France/i)).toBeInTheDocument();
  });
});