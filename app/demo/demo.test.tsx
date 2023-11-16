import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Demo from './demo';

describe('demo', () => {
  it('should render', () => {
    render(<Demo />);

    expect(screen.getByRole('heading')).toHaveTextContent('Dies ist ein Test');
  });
});
