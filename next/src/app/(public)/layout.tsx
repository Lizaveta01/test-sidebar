import Sidebar from '@/components/Sidebar';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="flex align-center justify-center bg-[#F1F5F9] py-[10px] w-full">{children}</div>
    </div>
  );
}
