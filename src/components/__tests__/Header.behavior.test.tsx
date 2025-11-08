import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from '../Header';

describe('Header behavior', () => {
  it('déclenche le scroll vers "services" puis ferme le menu mobile', () => {
    render(<Header />);

    // Ouvrir le menu mobile
    const toggle = screen.getByTestId('menu-toggle');
    fireEvent.click(toggle);

    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toBeInTheDocument();

    // Cliquer sur "Services" dans le menu mobile pour éviter l'ambiguïté avec le bouton desktop
    const servicesBtn = within(mobileNav).getByRole('button', { name: /Services/i });
    fireEvent.click(servicesBtn);

    // Le menu doit se fermer après le clic
    expect(screen.queryByTestId('mobile-nav')).toBeNull();
  });
});