'use client';

import { Product } from '@/types/Product';
import Buttons from './Buttons';
import { useState } from 'react';
import Select from '../common/Select';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

interface Props {
  product: Product;
}

export default function PurchaseInfo({ product }: Props) {
  const [selectedOption, setSelectedOption] = useState<null | Option['value']>(null);

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };
  return (
    <div>
      <div>
        <span className="font-semibold">옵션 선택</span>
      </div>
      <div className="mt-4">
        <Select options={options} onChange={handleSelectChange} value={selectedOption} />
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-end">
          <span className="text-lg">총 상품 금액</span>
          <div className="text-orange-700">
            <span className="font-bold text-3xl">{(product.sale + 3500).toLocaleString('ko-KR')}</span>
            <span className="text-xl">원</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Buttons />
      </div>
    </div>
  );
}
