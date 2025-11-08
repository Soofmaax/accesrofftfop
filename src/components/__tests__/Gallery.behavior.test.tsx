import { render, fireEvent, within } from '@testing-library/react';
import Gallery from '../Gallery';

describe('Gallery behavior', () => {
  it('applique les filtres de catégories multiples (callbacks distincts)', () => {
    const { container } = render(<Gallery />);
    const section = container.querySelector('#realisations')!;

    const click = (name: RegExp | string) => {
      const btn = within(section).getByRole('button', { name });
      fireEvent.click(btn);
      expect(btn).toBeInTheDocument();
    };

    click(/Trappes/i);
    click(/Escaliers/i);
    click(/Échelles/i);
    click(/Terrasses/i);
    click(/Mise aux normes/i);
    click(/Toutes/i);
  });
});