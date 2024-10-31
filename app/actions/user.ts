'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(
  error: string,
  formdata: FormData
): Promise<string> {
  try {
    const user = {
      name: formdata.get('name') as string,
      email: formdata.get('email') as string,
    };

    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      return 'Failed to create user';
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'An error occurred';
  }
  revalidatePath('/users');
  redirect('/users');
}
