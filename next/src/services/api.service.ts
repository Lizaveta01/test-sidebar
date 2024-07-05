import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from '@/constants';

export class ApiError extends Error {
  __proto__: ApiError;

  data: any;

  status: number;

  constructor(data: any, status = 500, statusText = 'Internal Server Error') {
    super(`${status} ${statusText}`);

    this.constructor = ApiError;
    this.__proto__ = ApiError.prototype;

    this.name = this.constructor.name;
    this.data = data;
    this.status = status;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  inspect() {
    return this.stack;
  }
}
const throwApiError = ({
  status,
  statusText,
  data,
}: any) => {
  console.error(`API Error: ${status} ${statusText}`, data);
  throw new ApiError(data, status, statusText);
};

class ApiClient {
  _api: AxiosInstance;

  _handlers: Map<string, any>;

  constructor(axiosConfig: AxiosRequestConfig) {
    this._handlers = new Map();

    this._api = axios.create(axiosConfig);

    this._api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Token ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this._api.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        if (axios.isCancel(error)) {
          throw error;
        }

        const errorResponse = error.response || {
          status: error.code,
          statusText: error.message,
          data: error.data,
        };

        const errorHandlers = this._handlers.get('error') || [];
        errorHandlers.forEach((handler: any) => {
          handler(errorResponse);
        });

        return throwApiError(errorResponse);
      },
    );
  }

  get(url: string, params: any = {}, requestConfig: AxiosRequestConfig<any> = {}): Promise<any> {
    return this._api({
      method: 'get',
      url,
      params,
      ...requestConfig,
    });
  }

  post(url: string, data: any = {}, requestConfig: AxiosRequestConfig<any> = {}): Promise<any> {
    return this._api({
      method: 'post',
      url,
      data,
      ...requestConfig,
    });
  }

  patch(url: string, data: any = {}, requestConfig: AxiosRequestConfig<any> = {}): Promise<any> {
    return this._api({
      method: 'patch',
      url,
      data,
      ...requestConfig,
    });
  }

  delete(url: string, data: any = {}, requestConfig: AxiosRequestConfig<any> = {}): Promise<any> {
    return this._api({
      method: 'delete',
      url,
      data,
      ...requestConfig,
    });
  }
}

export default new ApiClient({
  baseURL: BASE_URL,
  withCredentials: true,
  responseType: 'json',
});
