import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <main className="grid min-h-full place-items-center bg-white">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            죄송합니다. 원하시는 페이지를 찾을 수 없습니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
