import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
    };
    expires: string;
    role: 'admin' | 'user';
  }
}

import { JWT } from '@auth/core/jwt';

declare module '@auth/core/jwt' {
  interface JWT {
    user: {
      name: string;
      email: string;
      image: string;
    };
    expires: string;
    role: 'admin' | 'user';
  }
}
