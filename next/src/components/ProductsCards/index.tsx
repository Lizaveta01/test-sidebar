'use client';
import { FC } from 'react';

import { IProduct, ModalTypes } from '@/types';
import useModalStore from '@/store/modalStore';
import { manufacturerApi } from '@/resources';

import CardItem from './ProductCard';

interface IProductsCardsProps {
  products: IProduct[];
}

const ProductsCards: FC<IProductsCardsProps> = ({ products }) => {
  const { updateModalType, setSelectedProduct } = useModalStore();
  const { data: manufacturers } = manufacturerApi.useGetList();

  const openProductModal = (product: IProduct) => {
    setSelectedProduct(product);
    updateModalType(ModalTypes.INFO_PRODUCT_MODAL);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((item) => {
        const manufacturer = manufacturers!.find((manufacturer) => item.manufacturerId == manufacturer.id);
        return (
          <CardItem key={item.id} item={item} onClickCard={() => openProductModal(item)} manufacturer={manufacturer!} />
        );
      })}
    </div>
  );
};

export default ProductsCards;
