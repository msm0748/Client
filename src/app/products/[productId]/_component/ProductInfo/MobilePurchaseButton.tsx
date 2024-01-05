'use client';

import { useCallback, useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import MobilePurchaseInfo from './MobilePurchaseInfo';
import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

export default function MobilePurchaseButton({ product }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className="sticky bottom-0 z-50 bg-white py-2 md:hidden">
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
      <MobilePurchaseInfo isOpen={isOpen} closeModal={closeModal} product={product} />
    </>
  );
}
