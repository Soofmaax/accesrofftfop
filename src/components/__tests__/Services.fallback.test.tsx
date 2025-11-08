import { render } from '@testing-library/react';
import { vi } from 'vitest';

// Mock des données pour forcer un fallback d'icône
vi.mock('../../data/mockData', () => ({
  services: [
    {
      id: 'fallback',
      title: 'Service avec icône inconnue',
      description: 'Devrait utiliser le fallback CheckCircle',
      icon: 'Inconnue',
    },
  ],
}));

import Services from '../Services';

describe('Services fallback', () => {
  it('utilise CheckCircle quand l’icône n’est pas reconnue', () => {
    const { container } = render(<Services />);
    const check = container.querySelector('svg.lucide-check-circle');
    expect(check).not.toBeNull();
  });
});