import RoleGuard from '@/utils/RoleGuard';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <RoleGuard>{children}</RoleGuard>;
}
