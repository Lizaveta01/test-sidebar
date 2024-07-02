export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginDataResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  roles: number[];
}
