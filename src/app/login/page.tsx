import LoginButton from './_component/LoginButton';

export default function LoginPage() {
  return (
    <main className="max-w-sm mx-auto my-16">
      <h1 className="font-semibold text-3xl text-center mb-8">로그인</h1>
      <p className="text-center">아이디와 비밀번호 입력하기 귀찮으시죠?</p>
      <p className="text-center">1초 회원가입으로 입력없이 간편하게 로그인 하세요.</p>
      <div className="mt-10">
        <LoginButton />
      </div>
    </main>
  );
}
