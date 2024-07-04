export type IProduct = {
  id?: number;
  name: string;
  quantity: number;
  price: string;
  photoUrl: string;
  manufacturerId: number;
  manufacturerName?: string;
};

export type IManufacturers = {
  id: number;
  name: string;
};
