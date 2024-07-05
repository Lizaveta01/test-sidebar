import { FC } from 'react';

import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@/assets/icons';

interface IPaginationProps {
  currentPage: number;
  pagesCount: number;
  setPage: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ currentPage, pagesCount, setPage }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagesCount) {
      setPage(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];

    if (pagesCount <= 8) {
      for (let i = 1; i <= pagesCount; i++) {
        buttons.push(
          <button
            key={i}
            className={`px-[5px] py-0 rounded-sm min-w-[20px] transition duration-200 hover:bg-slate-300 ${currentPage === i ? 'bg-gray-300' : ''}`}
            onClick={() => setPage(i)}
          >
            <p>{i}</p>
          </button>
        );
      }
    } else {
 
      const firstPages = [1];
      const lastPages = [pagesCount];

      firstPages.forEach((page) => {
        buttons.push(
          <button
            key={page}
            className={`px-[5px] py-0 rounded-sm min-w-[20px]  transition duration-200 hover:bg-slate-300 ${currentPage === page ? 'bg-gray-300' : ''}`}
            onClick={() => setPage(page)}
          >
            <p>{page}</p>
          </button>
        );
      });

      if (currentPage > 4) {
        buttons.push(
          <button key="start-dots" className="px-1 py-1 rounded-md" disabled>
            <p>...</p>
          </button>
        );
      }

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(pagesCount - 1, currentPage + 1); i++) {
        buttons.push(
          <button
            key={i}
            className={`px-[5px] py-0 rounded-sm min-w-[20px]  transition duration-200 hover:bg-slate-300 ${currentPage === i ? 'bg-gray-300' : ''}`}
            onClick={() => setPage(i)}
          >
            <p>{i}</p>
          </button>
        );
      }

      if (currentPage < pagesCount - 3) {
        buttons.push(
          <button key="end-dots" className="px-1 py-1 rounded-md" disabled>
            <p>...</p>
          </button>
        );
      }

      lastPages.forEach((page) => {
        buttons.push(
          <button
            key={page}
            className={`px-[5px] py-0 rounded-sm min-w-[20px] transition duration-200 hover:bg-slate-300 ${currentPage === page ? 'bg-gray-300' : ''}`}
            onClick={() => setPage(page)}
          >
            <p>{page}</p>
          </button>
        );
      });
    }

    return buttons;
  };

  return (
    <div className="flex gap-1 justify-center">
      <button className="px-1 py-1 rounded-md transition duration-200 hover:bg-slate-300" onClick={handlePrevPage}>
        <DoubleArrowLeftIcon />
      </button>
      {renderPageButtons()}
      <button className="px-1 py-1 rounded-md transition duration-200 hover:bg-slate-300" onClick={handleNextPage}>
        <DoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
