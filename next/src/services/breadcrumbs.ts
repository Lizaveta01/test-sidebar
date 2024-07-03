import { API_PATH } from '@/constants';
import axiosInstance from './axiosInstance';
import { IBreadcrumbs } from '@/types';

export const getBreadcrumbsRequest = async (): Promise<IBreadcrumbs[]> => {
  try {
    const response = await axiosInstance.get(API_PATH.breadcrumbs);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRandomBreadcrumbsRequest = async (): Promise<IBreadcrumbs> => {
  try {
    const response = await axiosInstance.get(API_PATH.randomBreadcrumb);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
