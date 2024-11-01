import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Rating from './rating';
import { Book } from '@/app/types/Book';
import { describe, expect, it, vi } from 'vitest';
import { afterEach } from 'node:test';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

// Mock the global fetch function
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe('Rating Component', () => {
  afterEach(() => {
    cleanup();
  });

  const book: Book = {
    id: '1',
    title: 'Test Book',
    author: 'Test Author',
    rating: 3,
    isbn: '123-456-789',
    release: new Date('2023-01-01'),
    pages: 300,
    language: 'English',
  };

  it('renders the correct number of stars', () => {
    render(<Rating book={book} />);
    const filledStars = screen.getAllByTestId('StarIcon');
    const emptyStars = screen.getAllByTestId('StarBorderIcon');
    expect(filledStars.length).toBe(3);
    expect(emptyStars.length).toBe(2);
  });
});
