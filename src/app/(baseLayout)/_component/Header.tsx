'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

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
  console.log(segment);
  return (
    <header className="border-b">
      <div className="md:container mt-8">
        <div></div>
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
