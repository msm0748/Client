'use client';

import { BsPerson, BsPersonFill, BsGrid, BsGridFill } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

export default function MobileMenubar() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  return (
    <div>
      <nav>
        <ul className="flex justify-around bg-primary-200 items-center py-4">
          <li>
            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center text-2xl"
            >
              {segment === null ? <IoHomeSharp /> : <IoHomeOutline />}
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center text-2xl">
              {segment === 'category' ? <BsGridFill /> : <BsGrid />}
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center text-2xl">
              {segment === 'favorite' ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          </li>
          <li>
            <button className="flex items-center justify-center text-2xl">
              {segment === 'mypage' ? <BsPersonFill /> : <BsPerson />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
