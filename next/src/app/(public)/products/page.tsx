'use client';
import { TableCardsIcon, TableLinesIcon } from '@/assets/icons';
import { Pagination, ProductModal, ProductsCards, ProductsTable, Search } from '@/components';
import { AuthService, getProductsRequest } from '@/services';
import useModalStore from '@/store/modalStore';
import { IProduct, ModalTypes } from '@/types';
import { Metadata } from 'next';
import { FormEvent, useEffect, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Авторизация',
// };

const productsEx: IProduct[] = [
  { id: 1, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 2, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 3, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 4, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 5, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 4, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 5, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
  { id: 4, name: 'Лампа', quantity: 12, manufacturerId: 12, price: '12.57 р', image: '/path-to-photo.jpg' },
];

type CatalogViewType = 'cards' | 'table';

export default function Products() {
  const [catalogView, setCatalogView] = useState<CatalogViewType>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(productsEx);
	const updateModalType = useModalStore((state) => state.updateModalType);
	const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    // const response = await getProductsRequest({ searchQuery });
    // setProducts(response);
  };

	const openCreateProductModal = () =>{
		updateModalType(ModalTypes.CREATE_PRODUCT_MODAL);
	}

  useEffect(() => {
    getProducts();
  }, [searchQuery]);

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
            <button className="px-[25px] py-[10px] rounded-md font-medium text-base transition duration-200 bg-slate-300 hover:bg-slate-400"
						onClick={openCreateProductModal}
						>
              Добавить
            </button>
          </div>
        </div>
        {catalogView === 'table' ? <ProductsTable products={products} /> : <ProductsCards products={products} />}
        <Pagination currentPage={page} pagesCount={10} setPage={(newPage) => setPage(newPage)} />
      </div> 
  );
}
