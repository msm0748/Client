import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user) {
        throw new Error('No profile');
      }

      const { name, email, image } = user;

      await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          image,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return true;
    },
  },
});
