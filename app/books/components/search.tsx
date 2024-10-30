'use client';

// SearchForm.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

type SearchFormInputs = {
  search: string;
};

const Search: React.FC = () => {
  const searchParams = useSearchParams();

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    defaultValues: { search: searchParams.get('search') ?? '' },
  });

  function onSubmit(data: SearchFormInputs) {
    const searchParams = new URLSearchParams({ search: data.search });
    const currentUrl = window.location.href.split('?')[0];
    window.location.href = `${currentUrl}?${searchParams.toString()}`;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        width: '300px',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        {...register('search')}
        fullWidth
      />
      <IconButton type="submit" color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
