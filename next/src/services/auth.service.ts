import axios from 'axios';

import { API_PATH } from '@/constants';
import { ILoginData, ILoginDataResponse } from '@/types';

const login = async (data: ILoginData ) => {
  try {
    const response: ILoginDataResponse = await axios
      .post(API_PATH.auth, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });

    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  } catch (err: unknown | Error) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const AuthService = {
  login
};

 
