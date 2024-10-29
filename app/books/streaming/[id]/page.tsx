import { getAllBooks, getBook } from '@/app/api/book';
import { Book } from '@/app/types/Book';
import {
  Container,
  Paper,
  Box,
  Typography,
  Alert,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { NextPage } from 'next';
import { Suspense } from 'react';
import { BookDetailsSkeleton, BookRatingSkeleton } from './skeleton';
import Details from './Details';
import Rating from './Rating';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Suspense fallback={<BookDetailsSkeleton />}>
          <Details id={id} />
        </Suspense>
        <Suspense fallback={<BookRatingSkeleton />}>
          <Rating id={id} />
        </Suspense>
        <Box mt={4}>
          <Link href="/books" passHref>
            <Button variant="contained" color="primary">
              Back to list
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookDetailPage;

export async function generateStaticParams() {
  const books = (await getAllBooks()).filter((book) => book.id !== '2');

  return books.map((book) => ({
    id: book.id,
  }));
}
