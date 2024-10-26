import { User } from '../types/User';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}
