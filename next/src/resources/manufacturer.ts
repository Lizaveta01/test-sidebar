import { useQuery } from '@tanstack/react-query';

import { ApiService } from '@/services';
import { IManufacturer } from '@/types';
import { API_PATH } from '@/constants';

export const useGetList = (options?: {}) =>
  useQuery<IManufacturer[]>({
    queryKey: ['manufacturers'],
    queryFn: () => ApiService.get(API_PATH.manufacturers),
    ...options,
  });
