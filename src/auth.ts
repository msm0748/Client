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
      async profile(profile) {
        const name = profile.kakao_account?.profile?.nickname;
        const email = profile.kakao_account?.email;
        const image = profile.kakao_account?.profile?.profile_image_url;

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

        return {
          id: profile.id.toString(),
          name,
          email,
          image,
          backendTokens: data.backendTokens,
        };
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
});
