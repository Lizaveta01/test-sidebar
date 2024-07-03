'use client';
import { getRandomBreadcrumbsRequest, getBreadcrumbsRequest } from '@/services/breadcrumbs';
import { IBreadcrumbs } from '@/types';
import { all } from 'axios';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
// 	title: 'Авторизация',
// };

export default function Algo() {
  const [breadcrumbs, setBreadcrumbs] = useState<string>('click button');
  const [allBreadcrumbs, setAllBreadcrumbs] = useState<IBreadcrumbs[]>([]);

  const buildHierarchyChain = (items: IBreadcrumbs[], itemId: number) => {
    const chain = [];
    let currentItem = items.find((item) => item.id === itemId);

    while (currentItem) {
      chain.unshift(currentItem);
      const parentId = currentItem.parent;
      currentItem = items.find((item) => item.id === parentId);
    }

    return chain;
  };

  const getAllBreadcrumbs = async () => {
    const res = await getBreadcrumbsRequest();
    setAllBreadcrumbs(res);
  };

  useEffect(() => {
    getAllBreadcrumbs();
  }, []);

  const getBreadcrumbs = async () => {
    const res = await getRandomBreadcrumbsRequest();
    const hierarchyChain = buildHierarchyChain(allBreadcrumbs, res.id);
    const chain = hierarchyChain.map((curr) => curr.name_en_us).join(' > ');

    setBreadcrumbs(chain);
  };

  return (
    <div className="flex p-[10px] flex flex-col bg-slate-100 text-zinc-900 w-[1024px]">
      <button
        className="btn bg-[#C9CFD8] w-[185px] font-medium text-base px-[25px] py-[10px] rounded-md font-medium text-base transition duration-200 hover:bg-slate-400"
        onClick={getBreadcrumbs}
      >
        Получить новую конечную точку
      </button>
      <div className="flex gap-[10px] mt-[30px]">
        {' '}
        <h3 className="text-xl">{breadcrumbs}</h3>
      </div>
    </div>
  );
}
