'use client';

import { Product } from '@/types/Product';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import PurchaseInfo from './PurchaseInfo';
import { useCallback, useState } from 'react';
import MobilePurchaseInfo from './MobilePurchaseInfo';
import MobilePurchaseButton from './MobilePurchaseButton';

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="md:flex">
      <div className="md:w-6/12">
        <div className="md:mr-14">
          <ProductImage src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="md:flex-1 md:mt-0 mt-5">
        <div className="mt-2">
          <ProductDetails product={product} />
        </div>
        <div className="mt-10 hidden md:block">
          <PurchaseInfo product={product} count={count} setCount={setCount} />
        </div>
        <div className="md:hidden block">
          <MobilePurchaseButton openModal={openModal} />
          <MobilePurchaseInfo
            product={product}
            isOpen={isOpen}
            closeModal={closeModal}
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
    </div>
  );
}
