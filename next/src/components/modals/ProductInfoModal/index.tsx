'use client';
import React, { FC } from 'react';

import useModalStore from '@/store/modalStore';
import { ModalTypes } from '@/types';
import { manufacturerApi } from '@/resources';

const ProductInfoModal: FC = ({}) => {
  const { updateModalType, selectedProduct } = useModalStore();
  const { data: manufacturers } = manufacturerApi.useGetList();
  const manufacturer = manufacturers!.find((manufacturer) => selectedProduct!.manufacturerId == manufacturer.id);
  const deleteItem = () => {
    updateModalType(ModalTypes.DELETE_PRODUCT_MODAL);
  };

  const closeModal = () => {
    updateModalType(null);
  };

  return (
    <div className="flex flex-col w-[338px] py-5 px-[10px] bg-slate-100 rounded-[10px] gap-5">
      <div className="flex flex-col gap-5 items-center">
        <img src={selectedProduct?.photoUrl} alt="photo" className="w-56 h-56 rounded-[10px]" />
        <h3 className="font-medium text-24 text-center">{selectedProduct?.name}</h3>
        <div className="flex flex-col gap-5 items-start w-full pl-[10px]">
          <p className="text-13">Колличестов: {selectedProduct?.quantity} шт</p>
          <p className="text-13">Цена: {selectedProduct?.price} p</p>
          <p className="text-13">Производитель: {manufacturer?.name}</p>
        </div>
      </div>

      <div className="flex justify-end gap-[10px]">
        <button
          type="submit"
          className="bg-slate-300 hover:bg-slate-400  text-zinc-900 px-[25px] py-[10px] rounded-md"
          onClick={deleteItem}
        >
          Удалить
        </button>
        <button
          type="button"
          className="bg-neutral-700 hover:bg-neutral-600 text-white px-[25px] py-[10px] rounded-md"
          onClick={closeModal}
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default ProductInfoModal;
