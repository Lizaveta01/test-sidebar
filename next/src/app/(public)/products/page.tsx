'use client';
import { useState } from 'react';

import { TableCardsIcon, TableLinesIcon } from '@/assets/icons';
import { Pagination, ProductsCards, ProductsTable, Search } from '@/components';
import useModalStore from '@/store/modalStore';
import { ModalTypes } from '@/types';
import { manufacturerApi, productApi } from '@/resources';

type CatalogViewType = 'cards' | 'table';

export default function Products() {
  const [catalogView, setCatalogView] = useState<CatalogViewType>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const updateModalType = useModalStore((state) => state.updateModalType);
  const { data: products } = productApi.useGetList({ page, searchQuery: searchQuery, limit: 8 });
  manufacturerApi.useGetList();

  const openCreateProductModal = () => {
    updateModalType(ModalTypes.CREATE_PRODUCT_MODAL);
  };

  return (
    <div className="flex p-[20px]  flex-col bg-slate-100 text-zinc-900 w-[1024px] gap-[30px]">
      <div className="flex justify-between items-center m-[10px]">
        <Search searchQuery={searchQuery} onSetSearch={(search) => setSearchQuery(search)} />
        <div className="flex gap-4">
          <div className="flex">
            <button
              className={`px-4 py-3 rounded-l-md transition duration-200 ${
                catalogView === 'table' ? 'bg-slate-400' : 'bg-slate-300'
              }  hover:bg-slate-400`}
              onClick={() => setCatalogView('table')}
            >
              <TableLinesIcon />
            </button>
            <button
              className={`px-4 py-3 rounded-r-md transition duration-200 ${
                catalogView === 'cards' ? 'bg-slate-400' : 'bg-slate-300'
              }  hover:bg-slate-400`}
              onClick={() => setCatalogView('cards')}
            >
              <TableCardsIcon />
            </button>
          </div>
          <button
            className="px-[25px] py-[10px] rounded-md font-medium text-base transition duration-200 bg-slate-300 hover:bg-slate-400"
            onClick={openCreateProductModal}
          >
            Добавить
          </button>
        </div>
      </div>
      {products && !!products.length && (
        <>{catalogView === 'table' ? <ProductsTable products={products} /> : <ProductsCards products={products} />}</>
      )}
      <Pagination currentPage={page} pagesCount={13} setPage={(newPage) => setPage(newPage)} />
    </div>
  );
}
