'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdSearch } from 'react-icons/io';
import Category from './Category';
import Search from './Search';
import { useRouter } from 'next/navigation';

const rubikBubbles = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
});

export default function Header() {
  const router = useRouter();
  return (
    <header className="border-b">
      <div className="md:container">
        <div className="flex justify-between md:pb-6 md:pt-8 pb-3 pt-4 items-center px-4 md:px-0">
          <div>
            <Link href="/" className="flex items-center md:gap-4 gap-2">
              <span className="block md:w-10 w-8 md:h-10 h-8">
                <img src="/logo.png" alt="로고" className="w-full h-full" />
              </span>
              <span
                className={`${rubikBubbles.className} md:text-4xl text-2xl text-primary-400 md:tracking-wider tracking-wide`}
              >
                koharu
              </span>
            </Link>
          </div>
          <Search />
          <div>
            <div className="flex md:gap-5 gap-4 items-center">
              <button type="button" className="text-2xl md:hidden justify-center items-center flex pt-1">
                <IoMdSearch />
              </button>
              <button
                type="button"
                onClick={() => router.push('/cart')}
                className="md:text-3xl text-2xl flex justify-center items-center"
              >
                <BsCart2 />
              </button>
              <button
                type="button"
                onClick={() => router.push('/favor')}
                className="text-3xl justify-center items-center md:flex hidden"
              >
                <IoMdHeartEmpty />
              </button>
              <button
                type="button"
                onClick={() => router.push('/mypage')}
                className="text-3xl justify-center items-center md:flex hidden"
              >
                <BsPerson />
              </button>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-0">
          <Category />
        </div>
      </div>
    </header>
  );
}
