'use client';

import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';

export default function OauthPage() {
  const searchParams = useSearchParams();
  const params = qs.parse('');

  const getProfile = useCallback(async (access_token: string) => {
    try {
      const response = await fetch('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getToken = useCallback(
    async (code: string) => {
      params.grant_type = 'authorization_code';
      params.client_id = process.env.NEXT_PUBLIC_KAKAO_API_KEY as string;
      params.redirect_uri = process.env
        .NEXT_PUBLIC_KAKAO_REDIRECT_URL as string;
      params.code = code;

      try {
        const response = await fetch(
          `https://kauth.kakao.com/oauth/token?${qs.stringify(params)}`,
          {
            method: 'POST',
          }
        );
        const { access_token } = await response.json();
        const profile = await getProfile(access_token);
        // 회원가입 or 로그인 로직 추가
        console.log(profile);
        return profile;
      } catch (err) {
        console.log(err);
      }
    },
    [params, getProfile]
  );

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;
    getToken(code);
  }, [searchParams, getToken]);

  return <div>카카오 로그인중...</div>;
}
