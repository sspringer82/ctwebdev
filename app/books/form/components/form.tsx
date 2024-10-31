'use client';

import { Alert, Box, Button, TextField } from '@mui/material';
import Link from 'next/link';
import React, {
  useActionState,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateBook } from '@/app/types/Book';
import { saveBook } from '@/app/actions/book';

export type Book = {
  id: string;
  isbn: string;
  title: string;
  author: string;
  release: Date;
  pages: number;
  language: string;
  rating: number;
};

const bookSchema = z.object({
  isbn: z.string().min(1, { message: 'ISBN is required' }),
  title: z.string().min(1, { message: 'Title is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  release: z
    .string()
    .min(1, { message: 'Release date is required' })
    .transform((str) => new Date(str)), // Converts string to Date
  pages: z.coerce
    .number({ invalid_type_error: 'Pages must be a number' })
    .positive({ message: 'Pages must be a positive number' })
    .int({ message: 'Pages must be an integer' }),
  language: z.string().min(1, { message: 'Language is required' }),
  rating: z.coerce
    .number({ invalid_type_error: 'Rating must be a number' })
    .min(0, { message: 'Rating must be at least 0' })
    .max(5, { message: 'Rating must be at most 5' }),
});

type Props = {
  book?: Book;
};

const Form: React.FC<Props> = ({ book }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateBook>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      isbn: '',
      title: '',
      author: '',
      release: '' as unknown as Date,
      pages: 0,
      language: '',
      rating: 0,
    },
  });

  useEffect(() => {
    if (book) {
      const resetBook = {
        ...book,
        release: book.release.toISOString().split('T')[0],
      };
      reset(resetBook as unknown as CreateBook);
    }
  }, [book]);

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');

  if (isPending) {
    return <div>Saving...</div>;
  }

  async function onSubmit(data: CreateBook) {
    startTransition(async () => {
      try {
        if (book && book.id) {
          data.id = book.id;
        }

        await saveBook(data);
      } catch (error) {
        setError((error as Error).message);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Alert severity="error" style={{ display: error ? 'block' : 'none' }}>
        {error}
      </Alert>
      <Controller
        name="isbn"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="ISBN"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.isbn}
            helperText={errors.isbn?.message}
          />
        )}
      />
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <Controller
        name="author"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Author"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.author}
            helperText={errors.author?.message}
          />
        )}
      />
      <Controller
        name="release"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Release Date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            slotProps={{ inputLabel: { shrink: true } }}
            error={!!errors.release}
            helperText={errors.release?.message}
          />
        )}
      />
      <Controller
        name="pages"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Pages"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.pages}
            helperText={errors.pages?.message}
          />
        )}
      />
      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Language"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.language}
            helperText={errors.language?.message}
          />
        )}
      />
      <Controller
        name="rating"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Rating"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            slotProps={{ htmlInput: { min: 0, max: 5 } }}
            error={!!errors.rating}
            helperText={errors.rating?.message}
          />
        )}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Link href="/books" passHref>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
        </Link>
      </Box>
    </form>
  );
};

export default Form;
