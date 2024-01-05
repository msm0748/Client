'use client';

import { IoMdHeartEmpty } from 'react-icons/io';

interface Props {
  openModal: () => void;
}

export default function MobilePurchaseButton({ openModal }: Props) {
  return (
    <>
      <div className="fixed container left-0 right-0 bottom-0 z-50 bg-[rgba(255,255,255,0.8)] py-2 md:hidden">
        <div className="flex justify-between gap-3">
          <button
            onClick={openModal}
            className="text-white font-semibold text-lg text-center bg-gray-900 flex-1 rounded-md"
          >
            바로 구매
          </button>
          <button className="flex justify-center items-center w-[48px] h-[48px] text-3xl rounded-md border">
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
    </>
  );
}
