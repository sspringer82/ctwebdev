import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { User } from './app/lib/types';
const dbFilePath = 'backend/db.sqlite';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const response = await fetch(`http://localhost:8080/users/${email}`);
    if (!response.ok) {
      throw new Error('Could not get users');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          const passwordsMatch = password === user.password;
          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
