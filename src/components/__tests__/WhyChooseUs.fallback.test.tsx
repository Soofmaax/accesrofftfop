import { render } from '@testing-library/react';
import { vi } from 'vitest';

// Mock des données pour forcer un fallback d'icône
vi.mock('../../data/mockData', () => ({
  whyChooseUs: [
    {
      id: 'fallback',
      title: 'Avantage avec icône inconnue',
      description: 'Devrait utiliser le fallback Shield',
      icon: 'Inconnue',
    },
  ],
}));

import WhyChooseUs from '../WhyChooseUs';

describe('WhyChooseUs fallback', () => {
  it('utilise Shield quand l’icône n’est pas reconnue', () => {
    const { container } = render(<WhyChooseUs />);
    const shield = container.querySelector('svg.lucide-shield');
    expect(shield).not.toBeNull();
  });
});