'use client';
import { ArrowIcon, ExitIcon, HomeIcon } from '@/assets/icons';
import useUserStore from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface ISearchProps {
  searchQuery: string;
  onSetSearch: (query: string) => void;
}
const Search: FC<ISearchProps> = ({ searchQuery, onSetSearch }) => {
  return (
    <div className="flex items-center">
      <input
        value={searchQuery}
        onChange={(e) => onSetSearch(e.target.value)}
        placeholder="Поиск"
        className="p-text w-60 h-7 bg-[#C9CFD8] placeholder:text-[#888F99] pl-[10px] py-[6px] block rounded-md border focus:border-[#C9CFD8] focus:bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
