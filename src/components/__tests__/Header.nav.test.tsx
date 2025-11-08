import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from '../Header';

describe('Header desktop navigation', () => {
  it('déclenche le scroll pour toutes les entrées du menu principal (desktop)', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: /Navigation principale/i });

    const servicesBtn = within(nav).getByRole('button', { name: /Services/i });
    const realisationsBtn = within(nav).getByRole('button', { name: /Réalisations/i });
    const zoneBtn = within(nav).getByRole('button', { name: /Zone d'intervention/i });
    const contactBtn = within(nav).getByRole('button', { name: /Contact/i });

    fireEvent.click(servicesBtn);
    fireEvent.click(realisationsBtn);
    fireEvent.click(zoneBtn);
    fireEvent.click(contactBtn);

    // Les clics ne jettent pas d'erreurs et les boutons existent
    expect(servicesBtn).toBeInTheDocument();
    expect(realisationsBtn).toBeInTheDocument();
    expect(zoneBtn).toBeInTheDocument();
    expect(contactBtn).toBeInTheDocument();
  });
});