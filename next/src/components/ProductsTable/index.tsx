'use client';
import { FC } from 'react';

import { IProduct, ModalTypes } from '@/types';
import useModalStore from '@/store/modalStore';
import { manufacturerApi } from '@/resources';

import TableLine from './TableLine';

interface IProductsTableProps {
  products: IProduct[];
}

const ProductsTable: FC<IProductsTableProps> = ({ products }) => {
  const { updateModalType, setSelectedProduct } = useModalStore();
  const { data: manufacturers } = manufacturerApi.useGetList();
  
  const openProductModal = (product: IProduct, modalType: ModalTypes) => {
    setSelectedProduct(product);
    updateModalType(modalType);
  };

  return (
    <div className="overflow-x-auto">
      <table className=" table-fixed w-full">
        <thead className="py-[31px] px-[17px] gap-[77px]">
          <tr>
            <th className="text-left font-normal text-15 py-[31px] px-[17px] w-[100px]">Фото</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px] truncate">Название</th>
            <th className="text-center font-normal text-15 py-[31px] px-[17px] ">Количество</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px] truncate ">Производитель</th>
            <th className="text-center font-normal text-15 py-[31px] px-[17px] w-[152px]">Цена</th>
            <th className="text-left font-normal text-15 py-[31px] px-[17px]"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableLine
              product={product}
              index={index}
              manufacturers={manufacturers!}
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
