import { render, screen, fireEvent, within } from '@testing-library/react';
import Gallery from '../Gallery';
import { projects } from '../../data/mockData';

describe('Gallery', () => {
  it('rend le heading et les projets par défaut', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('#realisations')!;
    const heading = within(section).getByRole('heading', { name: /Nos Réalisations/i, level: 2 });
    expect(heading).toBeInTheDocument();

    // Nombre de cartes correspond au nombre de projets (cards = project-card)
    const cards = within(section).getAllByTestId('project-card');
    expect(cards.length).toBe(projects.length);
  });

  it('filtre les projets par catégorie "Escaliers"', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('#realisations')!;

    // Cliquer sur le filtre "Escaliers"
    const escaliersBtn = within(section).getByRole('button', { name: /Escaliers/i });
    fireEvent.click(escaliersBtn);

    // Les cards reflètent le nombre de projets filtrés
    const cards = within(section).getAllByTestId('project-card');
    const escaliersCount = projects.filter((p) => p.category === 'escaliers').length;
    expect(cards.length).toBe(escaliersCount);
  });

  it('CTA "Démarrer votre projet" est présent et cliquable', () => {
    render(<Gallery />);
    const cta = screen.getByRole('button', { name: /Démarrer votre projet/i });
    fireEvent.click(cta);
    expect(cta).toBeInTheDocument();
  });
});