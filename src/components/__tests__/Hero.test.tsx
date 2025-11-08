import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { site } from '../../config/site';

describe('Hero', () => {
  it('rend le bouton CTA et le lien téléphone', () => {
    render(<Hero />);

    // CTA button
    expect(
      screen.getByRole('button', { name: /Demander un devis gratuit/i })
    ).toBeInTheDocument();

    // Phone link
    const phoneLink = screen.getByRole('link', { name: new RegExp(site.phone) });
    expect(phoneLink).toHaveAttribute('href', site.phoneHref);
  });
});