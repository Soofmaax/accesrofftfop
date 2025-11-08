import { render, screen, fireEvent } from '@testing-library/react';
import Process from '../Process';

describe('Process', () => {
  it('rend le heading du processus et le CTA', () => {
    render(<Process />);
    expect(
      screen.getByRole('heading', { name: /Notre Processus en 4 Étapes/i, level: 2 })
    ).toBeInTheDocument();

    const cta = screen.getByRole('button', { name: /Demander un devis/i });
    fireEvent.click(cta);
    expect(cta).toBeInTheDocument();
  });
});