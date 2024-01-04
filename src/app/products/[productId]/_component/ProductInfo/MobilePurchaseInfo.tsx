'use client';

import Modal from '@/components/common/Modal';
import SellingOption from './SellingOption';
import { Product } from '@/types/Product';
import { useState } from 'react';
import TotalPrice from './TotalPrice';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  product: Product;
}

export default function MobilePurchaseInfo({ isOpen, closeModal, product }: Props) {
  const [count, setCount] = useState(1);
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <SellingOption name={product.name} sale={product.sale} count={count} setCount={setCount} />
      </div>
      <div className="mt-6">
        <TotalPrice sale={product.sale} count={count} />
      </div>
    </Modal>
  );
}
