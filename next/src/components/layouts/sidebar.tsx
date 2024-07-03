import { ArrowIcon, ExitIcon, HomeIcon } from '@/assets/icons';
import useUserStore from '@/store/userStore';

const Sidebar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="h-screen w-56 bg-slate-100 flex flex-col">
      <div className="h1-text flex items-center gap-1 justify-center py-3 text-slate-100 mb-6 bg-gray-800 rounded-br-2xl">
        Test
        <HomeIcon />
      </div>
      <ul className="p-[10px] flex flex-col gap-4">
        <li className="pr-1 relative flex justify-between items-center text-slate-800 font-medium text-xl transition group">
          <h3>Товары</h3>
        </li>
        <li className="pr-1 relative flex justify-between items-center text-slate-800 font-medium text-xl transition group">
          <h3>Алгоритмы</h3>
          <ArrowIcon />
        </li>
      </ul>
      <div className="mt-auto p-5 text-slate-900">
        <div className="flex space-x-2 mb-4">
          <span className="bg-gray-300 px-2 py-1 rounded text-sm">{user?.roles.includes(1) ? 'Админ' : 'Юзер'}</span>
          <span className="bg-gray-300 px-2 py-1 rounded text-sm">Пользователь</span>
        </div>
        <div className=" w-full flex justify-between">
          <h6>{user?.name}</h6>
          <button>
            <ExitIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
