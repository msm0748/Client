import { auth } from '@/auth';
import LogOutButton from './_component/LogOutButton';

export default async function MyPage() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      MyPage
      <LogOutButton />
    </div>
  );
}
