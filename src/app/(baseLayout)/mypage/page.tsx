import { auth } from '@/auth';
import LogOutButton from './_component/LogOutButton';

export default async function MyPage() {
  // const session = await auth();
  const session = await auth();

  console.log(session, 'mypage');

  return (
    <div>
      {/* <div>{user.email}</div> */}
      <LogOutButton />
    </div>
  );
}
