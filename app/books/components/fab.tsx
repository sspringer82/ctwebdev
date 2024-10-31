'use client';

import React from 'react';
import Link from 'next/link';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FloatingActionButtonProps {
  linkTarget: string;
}

const FAB: React.FC<FloatingActionButtonProps> = ({ linkTarget }) => {
  return (
    <Link href={linkTarget} passHref>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 64,
          right: 16,
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s ease-in-out',
          },
        }}
      >
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default FAB;
