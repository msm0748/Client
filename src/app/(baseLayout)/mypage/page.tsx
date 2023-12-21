import LogOutButton from './_component/LogOutButton';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function MyPage() {
  // const session = await auth();
  const session = await getServerSession(authOptions);

  console.log(session, 'mypage');

  // const response = await fetch(
  //   process.env.NEXT_PUBLIC_API_URI + `/user/${session?.user.email}`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       authorization: `Bearer ${session?.backendTokens.accessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );
  // const user = await response.json();
  // console.log(user, 'user');
  // console.log(session);
  return (
    <div>
      {/* <div>{user.email}</div> */}
      <LogOutButton />
    </div>
  );
}
