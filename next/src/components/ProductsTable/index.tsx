'use client';
import { FC } from 'react';

import { IProduct, ModalTypes } from '@/types';
import useModalStore from '@/store/modalStore';

import TableLine from './TableLine';

interface IProductsTableProps {
  products: IProduct[];
}

const ProductsTable: FC<IProductsTableProps> = ({ products }) => {
  const { updateModalType, setSelectedProduct } = useModalStore();

  const openProductModal = (product: IProduct, modalType: ModalTypes) => {
    console.log(modalType);
    setSelectedProduct(product);
    updateModalType(modalType);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="py-[31px] px-[17px]">
          <tr>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]">Фото</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]">Название</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]">Количество</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]">Производитель</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]">Цена</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableLine
              product={product}
              index={index}
              onClickProduct={() => openProductModal(product, ModalTypes.INFO_PRODUCT_MODAL)}
              onDelete={() => openProductModal(product, ModalTypes.DELETE_PRODUCT_MODAL)}
              onUpdate={() => openProductModal(product, ModalTypes.UPDATE_PRODUCT_MODAL)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
