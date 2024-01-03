'use client';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import { home } from '@/data/dummy';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Pagination from './_component/ui/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(home.length / itemsPerPage);

  // 현재 페이지에 필요한 데이터 추출
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = home.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="container">
      <CardList>
        {currentPageData.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </CardList>
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
