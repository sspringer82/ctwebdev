'use client';
import { useActionState } from 'react';
import { createUser } from '@/app/actions/user';
import { NextPage } from 'next';

const UserFormPage: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<string, FormData>(
    createUser,
    ''
  );

  if (isPending) {
    return <div>Saving...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserFormPage;
