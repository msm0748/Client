'use client';

import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  const handleLogOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' }).then(() => {
      fetch(`/api/signout`, {
        method: 'POST',
      });
    });
  };
  return <button onClick={handleLogOut}>LogOutButton</button>;
}
