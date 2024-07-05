import { API_PATH } from '@/constants';
import { IBreadcrumbs } from '@/types';
import axiosInstance from '@/utils/axiosInstance';

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
