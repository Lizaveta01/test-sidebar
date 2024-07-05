'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Auth from '@/app/(auth)/auth/page';
import useUserStore from '@/store/userStore';

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      router.push('/');
    } 
    if(path === '/' && token) {
      router.back();
    }
  }, [token, path]);

  if (!token) {
    return <Auth />;
  }

  return <>{children}</>;
}
