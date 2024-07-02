import Sidebar from "@/components/layouts/sidebar";
import AuthorizedGuard from "../../utils/AuthorizedGuard";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthorizedGuard>
      <Sidebar />
      {children}
    </AuthorizedGuard>
  );
}
