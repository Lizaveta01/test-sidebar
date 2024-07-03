'use client';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createProductRequest, deleteProductRequest, updateProductRequest } from '@/services';
import { IProduct } from '@/types';
import { CrossIcon, UploadIcon } from '@/assets/icons';
import useModalStore from '@/store/modalStore';

const schema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  quantity: z.number().min(1, 'Количество должно быть положительным числом'),
  price: z.number().min(0, 'Цена должна быть неотрицательной'),
  manufacturer: z.string().min(1, 'Производитель обязателен'),
  photo: z.any(),
});

const DeleteProductModal: FC = ({}) => {
  const { updateModalType, selectedProduct } = useModalStore();

  const deleteItem = () => {
    deleteProductRequest(selectedProduct?.id!);
    closeModal();
  };

  const closeModal = () => {
    updateModalType(null);
  };

  return (
    <div className="flex flex-col w-[338px]  bg-slate-100 rounded-[10px] gap-[25px]">
      <h2 className=" text-2xl font-medium px-4 pt-4">Вы действительно хотите удалить товар?</h2>

      <div className="flex justify-end gap-[10px] px-[10px] pb-4">
        <button
          type="submit"
          className="bg-slate-300 hover:bg-slate-400  text-zinc-900 px-[25px] py-[10px] rounded-md"
          onClick={closeModal}
        >
          Отменить
        </button>
        <button
          type="button"
          className="bg-neutral-700 hover:bg-neutral-600 text-white px-[25px] py-[10px] rounded-md"
          onClick={deleteItem}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
