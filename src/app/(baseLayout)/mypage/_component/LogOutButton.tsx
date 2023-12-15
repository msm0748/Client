'use client';

import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  const handleLogOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/',
    });
  };
  return <button onClick={handleLogOut}>LogOutButton</button>;
}
