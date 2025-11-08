import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';
import { site } from '../../config/site';

describe('Hero', () => {
  it('rend le bouton CTA et le lien téléphone et déclenche l\'action', () => {
    render(<Hero />);

    // CTA button
    const cta = screen.getByRole('button', { name: /Demander un devis gratuit/i });
    expect(cta).toBeInTheDocument();
    fireEvent.click(cta); // couvre la fonction scrollToContact

    // Phone link
    const phoneLink = screen.getByRole('link', { name: new RegExp(site.phone) });
    expect(phoneLink).toHaveAttribute('href', site.phoneHref);
  });
});