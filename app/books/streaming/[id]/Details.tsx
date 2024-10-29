import { getBookDetails } from '@/app/api/book';
import { Box, Typography } from '@mui/material';

type Props = {
  id: string;
};

const Details: React.FC<Props> = async ({ id }) => {
  const book = await getBookDetails(id);
  return (
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
        <strong>Release Date:</strong> {book?.release.toLocaleDateString()}
      </Typography>
      <Typography variant="body1">
        <strong>Pages:</strong> {book?.pages}
      </Typography>
      <Typography variant="body1">
        <strong>Language:</strong> {book?.language}
      </Typography>
    </>
  );
};

export default Details;
