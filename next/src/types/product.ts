export type IProduct = {
  id?: number;
  name: string;
  quantity: number;
  price: string;
  photoUrl: string;
  manufacturerId: string;
  manufacturerName?: string;
};

export type IManufacturer = {
  id: string;
  name: string;
};
