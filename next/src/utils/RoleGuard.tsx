'use client';

import Products from '@/app/(public)/products/page';
import useUserStore from '@/store/userStore';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
