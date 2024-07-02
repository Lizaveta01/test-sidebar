import RoleGuard from "@/utils/RoleGuard";
import AuthorizedGuard from "@/utils/AuthorizedGuard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Profile</p>
      <RoleGuard> {children}</RoleGuard>
    </>
  );
}
