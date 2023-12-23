import { cookies } from 'next/headers';

export function POST(request: Request) {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');

  return new Response('', {
    status: 302,
    headers: {
      Location: '/',
    },
  });
}
