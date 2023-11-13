import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      console.log('asdf');
      if (isOnAdmin) {
        console.log('asdf1');
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        console.log('asdf2');
        console.log('redirect');
        return Response.redirect(new URL('/admin', nextUrl));
      }
      console.log('asdf3');
      return true;
    },
  },
} satisfies NextAuthConfig;
