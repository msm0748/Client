'use client';

import { signIn } from 'next-auth/react';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Button() {
  const onClick = async () => {
    await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <button className="w-full bg-[#fae502] h-11 flex items-center px-5 rounded-md" onClick={onClick}>
      <span className="text-2xl">
        <RiKakaoTalkFill />
      </span>
      <span className="mx-auto">카카오 로그인</span>
    </button>
  );
}
