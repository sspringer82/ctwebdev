'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchForm: React.FC = () => {
  const searchParams = useSearchParams();

  const [name, setName] = useState(searchParams.get('name') ?? '');
  const [email, setEmail] = useState(searchParams.get('email') ?? '');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchParams = new URLSearchParams({ name, email });
    const currentUrl = window.location.href.split('?')[0];
    window.location.href = `${currentUrl}?${searchParams.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
