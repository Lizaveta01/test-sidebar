'use client';
import { IUser } from '@/types/auth';
import { create } from 'zustand';

interface IUserStore {
  user: IUser | null;
  token: string;
  updateUser: (user: IUser) => void;
  updateToken: (token: string) => void;
}

const storedUser = localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;
const initToken = localStorage.getItem('token') || '';

const useUserStore = create<IUserStore>((set) => ({
  user: initialUser,
  token: initToken,
  updateUser: (user: IUser) =>
    set((state) => ({
      ...state,
      user,
    })),
  updateToken: (token: string) =>
    set((state) => ({
      ...state,
      token,
    })),
}));

export default useUserStore;
