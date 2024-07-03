'use client';
import { FC } from 'react';
import useModalStore from '@/store/modalStore';
import { ModalTypes } from '@/types';
import DeleteProductModal from '../DeleteProductModal';
import UpdateProductModal from '../UpdateProductModal';
import ProductInfoModal from '../ProductInfoModal';

interface IModalManagerProps {}
const ModalManager: FC<IModalManagerProps> = ({}) => {
  const modalType = useModalStore((state) => state.modalType);
  let modal = null;

  if (modalType === ModalTypes.CREATE_PRODUCT_MODAL) {
    modal = <UpdateProductModal />;
  }

  if (modalType === ModalTypes.UPDATE_PRODUCT_MODAL) {
    modal = <UpdateProductModal />;
  }

  if (modalType === ModalTypes.DELETE_PRODUCT_MODAL) {
    modal = <DeleteProductModal />;
  }

  if (modalType === ModalTypes.INFO_PRODUCT_MODAL) {
    modal = <ProductInfoModal />;
  }

  if (modal) {
    return (
      <div className="absolute bg-modal-shadow-bg z-10 w-full h-full flex justify-center items-center">{modal}</div>
    );
  }
  return <></>;
};

export default ModalManager;
