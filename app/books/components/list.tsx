import { Book } from '@/app/types/Book';
import { getAllBooks } from '@/app/api/book';
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
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Rating from '../components/rating';
import FAB from './fab';
import { Edit } from '@mui/icons-material';

type Props = {
  search?: string;
};

const List: React.FC<Props> = async ({ search }) => {
  let books: Book[] = [];
  let errorMessage: string | null = null;

  try {
    books = await getAllBooks(search);
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
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Edit</TableCell>
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
                  <TableCell>
                    <Rating book={book} />
                  </TableCell>
                  <TableCell align="center">
                    <Link href={`/books/${book.id}`} passHref>
                      <IconButton aria-label="details" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Link href={`/books/form/${book.id}`} passHref>
                      <IconButton aria-label="details" color="primary">
                        <Edit />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <FAB linkTarget="/books/form" />
    </Container>
  );
};

export default List;
