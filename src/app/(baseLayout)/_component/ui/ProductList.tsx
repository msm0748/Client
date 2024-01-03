'use client';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import { useEffect, useState } from 'react';
import ListBox from '@/components/common/ListBox';
import useCategoryFilter from '@/hooks/useCategoryFilter';
import { sortingOptions } from '@/data/sortingOptions';
import Pagination from './Pagination';
import { Product } from '@/types/product';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { data, categorySelected, setCategorySelected } = useCategoryFilter(products, sortingOptions);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 현재 페이지에 필요한 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="container">
      <div className="md:mb-12 mb-8 flex justify-end">
        <div className="w-48">
          <ListBox data={sortingOptions} selected={categorySelected} setSelected={setCategorySelected} />
        </div>
      </div>
      <CardList>
        {currentPageData.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </CardList>
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
