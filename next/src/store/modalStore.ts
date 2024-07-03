'use client';
import { IProduct, ModalTypes } from '@/types';
import { create } from 'zustand';

interface IModalStore {
  modalType: ModalTypes | null;
  updateModalType: (type: ModalTypes | null) => void;
  selectedProduct: IProduct | null;
  setSelectedProduct: (selectedProduct: IProduct | null) => void;
}

const useModalStore = create<IModalStore>((set) => ({
  modalType: null,
  updateModalType: (modalType: ModalTypes | null) =>
    set((state) => ({
      ...state,
      modalType,
    })),
  selectedProduct: null,
  setSelectedProduct: (selectedProduct: IProduct | null) =>
    set((state) => ({
      ...state,
      selectedProduct,
    })),
}));

export default useModalStore;
