import { wait } from '@/util/wait';
import { User } from '../types/User';

export async function getAllUsers(search?: {
  name: string;
  email: string;
}): Promise<User[]> {
  const response = await fetch(`http://localhost:3001/users`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const users = (await response.json()) as User[];

  if (search) {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.name.toLowerCase()) &&
        user.email.toLowerCase().includes(search.email.toLowerCase())
    );
  }
  return users;
}

export async function getUser(id: string): Promise<User> {
  // await wait(10_000);
  const response = await fetch(`http://localhost:3001/usersxxx/${id}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}

export async function getName(id: string): Promise<Pick<User, 'id' | 'name'>> {
  await wait(5_000);
  const response = await fetch(`http://localhost:3001/users/${id}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const user = await response.json();
  delete user.email;
  return user;
}

export async function getEmail(
  id: string
): Promise<Pick<User, 'id' | 'email'>> {
  await wait(10_000);
  const response = await fetch(`http://localhost:3001/users/${id}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const user = await response.json();
  delete user.name;
  return user;
}
