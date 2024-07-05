import { FC } from 'react';

import { IManufacturer, IProduct } from '@/types';

interface ICardItemProps {
  item: IProduct;
  manufacturer: IManufacturer;
  onClickCard: () => void;
}
const CardItem: FC<ICardItemProps> = ({ item, onClickCard, manufacturer }) => {
  return (
    <div className="flex flex-col gap-1 p-[10px] items-center" onClick={onClickCard}>
      <img src={item.photoUrl} alt="photo" className="w-56 h-56 rounded-[10px]" />
      <p className="text-base text-center pt-[5px] pb-[10px]">{item.name}</p>
      <p className="text-13">{manufacturer.name}</p>
      <div className="flex justify-between w-full p-[10px]">
        <p className="text-13">{item.quantity} шт</p>
        <p className="text-13">{item.price} p</p>
      </div>
    </div>
  );
};

export default CardItem;
