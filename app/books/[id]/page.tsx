import { getAllBooks, getBook } from '@/app/api/book';
import { Book } from '@/app/types/Book';
import {
  Container,
  Paper,
  Box,
  Typography,
  Rating,
  Alert,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { NextPage } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  let book: Book | null = null;
  let errorMessage: string | null = null;

  try {
    book = await getBook(id);

    if (!book) {
      errorMessage = 'Book not found';
    }
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {errorMessage ? (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        ) : (
          <>
            <Box mb={2}>
              <Typography variant="h4" component="h1">
                {book?.title}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                by {book?.author}
              </Typography>
            </Box>
            <Typography variant="body1">
              <strong>ISBN:</strong> {book?.isbn}
            </Typography>
            <Typography variant="body1">
              <strong>Release Date:</strong>{' '}
              {book?.release.toLocaleDateString()}
            </Typography>
            <Typography variant="body1">
              <strong>Pages:</strong> {book?.pages}
            </Typography>
            <Typography variant="body1">
              <strong>Language:</strong> {book?.language}
            </Typography>
            <Box mt={2}>
              <Typography variant="body1">
                <strong>Rating:</strong>
              </Typography>
              <Rating value={book?.rating || 0} precision={1} readOnly />
            </Box>
          </>
        )}
        <Box mt={4}>
          <Link href="/books" passHref>
            <Button variant="contained" color="primary">
              Zurück zur Liste
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
