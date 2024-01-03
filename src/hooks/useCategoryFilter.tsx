'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { sortingOptions } from '@/data/sortingOptions';

export default function useCategoryFilter(initialData: Product[]) {
  const [data, setData] = useState(initialData);
  const [categorySelected, setCategorySelected] = useState(sortingOptions[0]);

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
