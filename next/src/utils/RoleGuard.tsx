'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Products from '@/app/(public)/products/page';
import useUserStore from '@/store/userStore';

export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();
  const user = useUserStore((state) => state.user);
 
  useEffect(() => {   
    if (!user?.roles.includes(1)) {
      router.push('/products');
    }
  }, [path]);

  if (!user?.roles.includes(1)) {
    return <Products/>;
  }

  return <>{children}</>;
}
