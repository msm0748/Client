'use client';

import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Button() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  const KAKAO_LOGIN_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const onClick = () => {
    location.href = KAKAO_LOGIN_URI;
  };
  return (
    <button
      className="w-full bg-[#fae502] h-11 flex items-center px-5 rounded-md"
      onClick={onClick}
    >
      <span className="text-2xl">
        <RiKakaoTalkFill />
      </span>
      <span className="mx-auto">카카오 로그인</span>
    </button>
  );
}
