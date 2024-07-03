'use client';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { createProductRequest, updateProductRequest } from '@/services';
import { IProduct, ModalTypes } from '@/types';
import { CrossIcon, UploadIcon } from '@/assets/icons';
import useModalStore from '@/store/modalStore';

const schema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  quantity: z.number().min(1, 'Количество должно быть положительным числом'),
  price: z.number().min(0, 'Цена должна быть неотрицательной'),
  manufacturer: z.string().min(1, 'Производитель обязателен'),
  photo: z.any(),
});

const UpdateProductModal: FC = () => {
  const { modalType, updateModalType, selectedProduct, setSelectedProduct } = useModalStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues:
      {
        name: selectedProduct?.name || '',
        quantity: selectedProduct?.quantity || 0,
        price: selectedProduct?.price || 0,
        manufacturer: selectedProduct?.manufacturerId || '',
        photo: selectedProduct?.image || '',
      } || {},
  });

  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState<string | null>(null);

  useEffect(() => {
    setFilePreview(selectedProduct?.image!);
    setFileName(selectedProduct?.image!);
  }, [selectedProduct]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFileName('');
      setFilePreview(null);
    }
  };

  const handleRemoveFile = () => {
    setFileName('');
    setFilePreview(null);
    const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    const productData: IProduct = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      manufacturerId: data.manufacturer,
      image: filePreview!,
    };

    if (modalType === ModalTypes.UPDATE_PRODUCT_MODAL) {
      updateProductRequest(productData, selectedProduct?.id!);
    } else {
      createProductRequest(productData);
    }
    closeModal();
  };

  const closeModal = () => {
    updateModalType(null);
    setSelectedProduct(null);
  };

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[338px] py-4 px-[10px] bg-slate-100 rounded-[10px] gap-[20px]"
      >
        <h2 className="text-center text-2xl font-medium">
          {modalType === ModalTypes.UPDATE_PRODUCT_MODAL ? 'Редактирование товара' : 'Создание товара'}
        </h2>

        <div className="px-[10px]">
          <label className="block mb-1">Название</label>
          <input
            {...register('name')}
            className="w-full px-[10px] py-[6px] h-[28px] rounded-md bg-[#C9CFD8] placeholder:text-[#888F99] border focus:border-[#C9CFD8] focus:bg-transparent outline-none"
            placeholder="Название"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div className="px-[10px]">
          <label className="block mb-1">Количество</label>
          <input
            {...register('quantity', { valueAsNumber: true })}
            type="number"
            className="w-full px-[10px] py-[6px] h-[28px] rounded-md bg-[#C9CFD8] placeholder:text-[#888F99] border focus:border-[#C9CFD8] focus:bg-transparent outline-none"
            placeholder="Количество"
          />
          {errors.quantity && <p className="text-red-600">{errors.quantity.message}</p>}
        </div>

        <div className="px-[10px]">
          <label className="block mb-1">Цена</label>
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            className="w-full px-[10px] py-[6px] h-[28px] rounded-md bg-[#C9CFD8] placeholder:text-[#888F99] border focus:border-[#C9CFD8] focus:bg-transparent outline-none"
            placeholder="Цена"
          />
          {errors.price && <p className="text-red-600">{errors.price.message}</p>}
        </div>

        <div className="px-[10px]">
          <label className="block mb-1">Производитель</label>
          <select
            {...register('manufacturer', { required: 'Выберите производителя' })}
            className="w-full px-[10px] py-[6px] h-[28px] rounded-md bg-[#C9CFD8] placeholder:text-[#888F99] border focus:border-[#C9CFD8] focus:bg-transparent outline-none"
          >
            <option value="Компания1">Компания1</option>
            <option value="Компания2">Компания2</option>
            <option value="Компания3">Компания3</option>
          </select>

          {errors.manufacturer && <p className="text-red-600">{errors.manufacturer.message}</p>}
        </div>

        <div className="px-[10px] ">
          <label className="block mb-1">Фото</label>
          <input {...register('photo')} type="file" className="hidden" id="file-input" onChange={handleFileChange} />
          {fileName ? (
            <div>
              <div className="flex items-center py-1 justify-between">
                <img src={filePreview!} alt="Preview" className="w-14 h-14 object-cover rounded-md" />
                <div className="flex flex-row">
                  <p className="text-gray-600 text-13">{fileName}</p>
                  <button type="button" className="bg-transparent px-[5px] py-[5px]" onClick={handleRemoveFile}>
                    <CrossIcon />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <button
                type="button"
                className="bg-transparent flex flex-col justify-center items-center gap-[10px] my-[10px]"
                onClick={handleButtonClick}
              >
                <p className="text-gray-600 text-13">Загрузить фото</p>
                <UploadIcon />
              </button>
            </div>
          )}
          {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
        </div>

        <div className="flex justify-end gap-[10px] px-[10px]">
          <button
            type="button"
            className="bg-neutral-700 hover:bg-neutral-600 text-white px-[25px] py-[10px] rounded-md"
            onClick={closeModal}
          >
            Отмена
          </button>
          <button
            type="submit"
            className="bg-slate-300 hover:bg-slate-400  text-zinc-900 px-[25px] py-[10px] rounded-md"
          >
            {modalType === ModalTypes.UPDATE_PRODUCT_MODAL ? 'Сохранить' : 'Создать'}
          </button>
        </div>
      </form>
  );
};

export default UpdateProductModal;
