'use client';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import { home } from '@/data/dummy';
import { useEffect, useState } from 'react';
import Pagination from './_component/ui/Pagination';
import ListBox from '@/components/common/ListBox';
import { ListBox as IListBox } from '@/types/ListBox';

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

export default function Home() {
  const [data, setData] = useState(home);
  const [categorySelected, setCategorySelected] = useState<IListBox>(category[0]);
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
    switch (categorySelected.id) {
      case 1:
        setData(home);
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
  }, [categorySelected]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="container">
      <div className="md:mb-12 mb-8 flex justify-end">
        <div className="w-48">
          <ListBox data={category} selected={categorySelected} setSelected={setCategorySelected} />
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
