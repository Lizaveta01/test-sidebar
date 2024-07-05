import { useMutation, useQuery } from '@tanstack/react-query';

import { ApiService } from '@/services';
import { IProduct } from '@/types';
import { API_PATH } from '@/constants';

import queryClient from '../app/queryClient';

interface IGetListParams {
  limit: number;
  page: number;
  searchQuery: string;
}

export const useCreate = <T>() =>
  useMutation<IProduct, unknown, T>({
    mutationFn: (data: T) => ApiService.post(API_PATH.products, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

export const useGet = (options?: {}) =>
  useQuery<IProduct>({
    queryKey: ['products'],
    queryFn: () => ApiService.get(API_PATH.products),
    ...options,
  });

export const useGetList = ({ page = 1, searchQuery = '', limit = 8 }: IGetListParams, options?: {}) =>
  useQuery<IProduct[]>({
    queryKey: ['products', page, searchQuery],
    queryFn: () => ApiService.get(`${API_PATH.products}?_limit=${limit}&_page=${page}&q=${searchQuery}`),
    ...options,
  });

export const useUpdate = <T>(productId: number) =>
  useMutation<IProduct, unknown, T>({
    mutationFn: (data: T) => ApiService.patch(`${API_PATH.products}/${productId}`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

export const useDelete = () =>
  useMutation({
    mutationFn: (productId: number) => ApiService.delete(`${API_PATH.products}/${productId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
