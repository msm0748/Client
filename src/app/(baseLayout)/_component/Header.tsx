'use client';
/* eslint-disable @next/next/no-img-element */

import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdSearch } from 'react-icons/io';

const rubikBubbles = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
});

const category = [
  {
    href: '/',
    text: '홈',
    segment: null,
  },
  {
    href: '/interior',
    text: '인테리어',
    segment: 'interior',
  },
  {
    href: '/stationery',
    text: '문구용품',
    segment: 'stationery',
  },
  {
    href: '/toy',
    text: '장난감',
    segment: 'toy',
  },
  {
    href: '/bag',
    text: '가방',
    segment: 'bag',
  },
  {
    href: '/shoes',
    text: '신발',
    segment: 'shoes',
  },
  {
    href: '/accessories',
    text: '잡화',
    segment: 'accessories',
  },
  {
    href: '/vintage',
    text: '빈티지',
    segment: 'vintage',
  },
];

export default function Header() {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="border-b">
      <div className="md:container">
        <div className="flex justify-between pb-6 pt-8 items-center">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <span className="block w-10 h-10">
                <img src="/logo.png" alt="로고" className="w-full h-full" />
              </span>
              <span
                className={`${rubikBubbles.className} text-4xl text-[#F494A9] tracking-wider`}
              >
                koharu
              </span>
            </Link>
          </div>
          <div className="border-b-2 border-black h-10 flex pb-1 items-center w-72">
            <input type="text" className="outline-none flex-1 px-1" />
            <button className="text-3xl">
              <IoMdSearch />
            </button>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <button className="text-3xl flex justify-center items-center">
                <BsCart2 />
              </button>
              <button className="text-3xl flex justify-center items-center">
                <IoMdHeartEmpty />
              </button>
              <button className="text-3xl flex justify-center items-center">
                <BsPerson />
              </button>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex items-center justify-between font-semibold overflow-x-auto flex-nowrap no-scroll">
              {category.map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    href={item.href}
                    className="block py-3 md:px-2 px-3 md:text-lg whitespace-nowrap"
                  >
                    {item.text}
                  </Link>
                  {item.segment === segment && (
                    <span className="block md:w-full w-[calc(100%-1rem)] mx-auto h-1 bg-black mt-3 absolute bottom-0 right-0 left-0"></span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
