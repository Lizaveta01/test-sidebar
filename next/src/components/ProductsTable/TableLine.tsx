'use client';
import { FC } from 'react';

import { RemoveIcon, UpdateIcon } from '@/assets/icons';
import { IProduct } from '@/types';

interface ITableLineProps {
  product: IProduct;
  index: number;
  onDelete: () => void;
  onUpdate: () => void;
  onClickProduct: () => void;
}
const TableLine: FC<ITableLineProps> = ({ product, onDelete, onUpdate, onClickProduct, index }) => {
  return (
    <tr
      key={product.id}
      className={`${index % 2 === 0 ? 'bg-transparent' : 'bg-gray-table-bg'} `}
      onClick={() => {
        onClickProduct();
      }}
    >
      <td className="h-[56px] py-[12px] px-[10px] rounded-md">
        <img src={product.photoUrl} alt={product.name} className="w-16 h-16 object-cover rounded-[5px]" />
      </td>
      <td className="h-[56px] py-[12px] px-[17px]">{product.name}</td>
      <td className="h-[56px] py-[12px] px-[17px] text-center">{product.quantity}</td>
      <td className="h-[56px] py-[12px] px-[17px]">{product.manufacturerName}</td>
      <td className="h-[56px] py-[12px] px-[17px] text-center">{product.price} p</td>
      <td className="h-[56px] py-[12px] px-[17px] rounded-r-md">
        <div className="flex gap-1">
          <button
            className="px-1 py-1 rounded-md transition duration-200  hover:bg-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <RemoveIcon />
          </button>
          <button
            className="px-1 py-1 rounded-md transition duration-200  hover:bg-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              onUpdate();
            }}
          >
            <UpdateIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableLine;
