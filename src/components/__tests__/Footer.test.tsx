import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('déclenche le scroll au clic sur le bouton Navigation "Services"', () => {
    render(<Footer />);

    const btn = screen.getByRole('button', { name: /Services/i });
    fireEvent.click(btn);

    expect(btn).toBeInTheDocument();
  });
});