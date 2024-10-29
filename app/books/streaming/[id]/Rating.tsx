import { getBookRating } from '@/app/api/book';
import { Box, Rating as MUIRating, Typography } from '@mui/material';

type Props = {
  id: string;
};

const Rating: React.FC<Props> = async ({ id }) => {
  const book = await getBookRating(id);
  return (
    <Box mt={2}>
      <Typography variant="body1">
        <strong>Rating:</strong>
      </Typography>
      <MUIRating value={book?.rating || 0} precision={1} readOnly />
    </Box>
  );
};

export default Rating;
