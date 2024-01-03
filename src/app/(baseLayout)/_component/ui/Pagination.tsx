'use client';

import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  handlePageChange: (pageIndex: number) => void;
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  handlePageChange,
  currentPage,
  totalPages,
}: Props) {
  const renderPageButtons = () => {
    const buttons = [];

    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`py-1 px-3 border ${
            currentPage === i && 'text-indigo-500 border-indigo-500'
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  return (
    <div className="flex justify-center gap-4 mt-16 text-stone-600 font-medium text-sm">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`py-1 px-2 border ${
          currentPage === 1 && 'text-slate-300'
        } bg-slate-50`}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      <div className="flex gap-4">{renderPageButtons()}</div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`py-1 px-2 border ${
          currentPage === totalPages && 'text-slate-300'
        } bg-slate-50 rotate-180`}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
}
