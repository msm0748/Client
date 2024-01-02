'use client';

import { signOut } from 'next-auth/react';
import { deleteCookie } from 'cookies-next';

export default function LogOutButton() {
  const handleLogOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' }).then(() => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
    });
  };
  return <button onClick={handleLogOut}>LogOutButton</button>;
}
