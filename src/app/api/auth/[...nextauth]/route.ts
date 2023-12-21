import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';
import { cookies } from 'next/headers';

export const authOptions: AuthOptions = {
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

      const response = await fetch('http://localhost:8000/auth/login', {
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

      const data = await response.json();

      if (data) {
        const { accessToken, refreshToken } = data;
        // 브라우저에 쿠키를 심어주는 것
        cookies().set('accessToken', accessToken);
        cookies().set('refreshToken', refreshToken);
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
