import { NextPage } from 'next';
import { Book } from '@/app/types/Book';
import { getAllBooks } from '../api/book';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
} from '@mui/material';

const BooksListPage: NextPage = async () => {
  let books: Book[] = [];
  let errorMessage: string | null = null;

  try {
    books = await getAllBooks();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <Container>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {books.length === 0 && <Typography>No book found.</Typography>}
      {books.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>ISBN</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>Pages</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow
                  key={book.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.isbn}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.release.getFullYear()}</TableCell>
                  <TableCell>{book.pages}</TableCell>
                  <TableCell>{book.language}</TableCell>
                  <TableCell>{book.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default BooksListPage;
