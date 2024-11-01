import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LegalPage from './page';

describe('Legal page', () => {
  it('should render the legal page', async () => {
    render(<LegalPage />);
    const heading = screen.getByRole('heading', { level: 1, name: /Legal/i });
    expect(heading).toBeDefined();
  });
});
