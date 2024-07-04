import { API_PATH } from '@/constants';
import { IManufacturers, IProduct } from '@/types';

import axiosInstance from './axiosInstance';

export const getProductsRequest = async (page?: number, query?: string, limit: number = 8): Promise<IProduct[]> => {
  try {
    let requestUrl = `${API_PATH.products}?_limit=${limit}`;
    if (page) {
      requestUrl += '&_page=' + page;
    }
    if (query) {
      requestUrl += '&q=' + query;
    }

    const response = await axiosInstance.get(requestUrl);
    console.log("PRODUCTS", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductRequest = async (id: number): Promise<IProduct> => {
  try {
    const response = await axiosInstance.get(`${API_PATH.products}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProductRequest = async (data: IProduct): Promise<IProduct> => {
  try {
    const response = await axiosInstance.post(API_PATH.products, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProductRequest = async (data: IProduct, id: number): Promise<IProduct> => {
  try {
    const response = await axiosInstance.patch(`${API_PATH.products}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProductRequest = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`${API_PATH.products}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getManufacturersRequest = async (): Promise<IManufacturers[]> => {
  try {
    const response = await axiosInstance.get(API_PATH.manufacturers);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
