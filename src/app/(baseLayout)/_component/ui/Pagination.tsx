import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  handlePageChange: (currentIndex: number) => void;
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ handlePageChange, currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-16 text-stone-600 font-medium text-sm">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`py-1 px-2 border ${currentPage === 1 && 'text-slate-300'} bg-slate-50`}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      <div className="flex gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`py-1 px-3 border ${currentPage === index + 1 && 'text-indigo-500 border-indigo-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`py-1 px-2 border ${currentPage === totalPages && 'text-slate-300'} bg-slate-50 rotate-180`}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
}
