'use client';

import { useState, useEffect } from 'react';
import { ListBox as IListBox } from '@/types/ListBox';
import { Product } from '@/types/product';

const category = [
  {
    id: 1,
    name: '인기순',
  },
  {
    id: 2,
    name: '구매후기 많은순',
  },
  {
    id: 3,
    name: '낮은 가격순',
  },
  {
    id: 4,
    name: '높은 가격순',
  },
];

export default function useCategoryFilter(initialData: Product[], initialCategory: IListBox[]) {
  const [data, setData] = useState(initialData);
  const [categorySelected, setCategorySelected] = useState(initialCategory[0]);

  useEffect(() => {
    switch (categorySelected.id) {
      case 1:
        setData(initialData);
        break;
      case 2:
        setData((prev) => [...prev].sort((a, b) => b.reviewCount - a.reviewCount));
        break;
      case 3:
        setData((prev) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case 4:
        setData((prev) => [...prev].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  }, [categorySelected, initialData]);

  return {
    data,
    categorySelected,
    setCategorySelected,
  };
}
