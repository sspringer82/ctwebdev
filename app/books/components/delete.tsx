'use client';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBook } from '@/app/actions/book';
import { IconButton } from '@mui/material';

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  return (
    <IconButton
      aria-label="details"
      color="error"
      onClick={() => deleteBook(id)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default Delete;
