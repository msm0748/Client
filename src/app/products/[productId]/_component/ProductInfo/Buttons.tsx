'use client';

import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function Buttons() {
  return (
    <div className="flex justify-between gap-3">
      <button className="text-white font-semibold text-lg text-center bg-gray-900 py-4 flex-1 rounded-md">
        바로 구매
      </button>
      <button className="flex justify-center items-center w-[60px] h-[60px] text-3xl rounded-md border">
        <BsCart2 />
      </button>
      <button className="flex justify-center items-center w-[60px] h-[60px] text-3xl rounded-md border">
        <IoMdHeartEmpty />
      </button>
    </div>
  );
}
