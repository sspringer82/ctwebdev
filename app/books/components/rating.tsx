'use client';

import { Book } from '@/app/types/Book';
import { Star, StarBorder } from '@mui/icons-material';
import { useState } from 'react';

type Props = {
  book: Book;
};

const Rating: React.FC<Props> = ({ book }) => {
  const [currentRating, setCurrentRating] = useState<number>(book.rating);
  const stars = [];

  async function handleRate(rating: number) {
    await fetch(`/books/api/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...book, rating }),
    });
    setCurrentRating(rating);
  }

  for (let i = 1; i <= 5; i++) {
    if (i <= currentRating) {
      stars.push(<Star key={i} onClick={() => handleRate(i)} />);
    } else {
      stars.push(<StarBorder key={i} onClick={() => handleRate(i)} />);
    }
  }
  return <span>{stars}</span>;
};

export default Rating;
