import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';

const users = [{ id: 1, email: 'admin@example.com', password: 'test123' }];

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
          const user = users.find(
            (user) => user.email === email && user.password === password
          );
          if (!user) {
            return null;
          }

          return user as unknown as User;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
