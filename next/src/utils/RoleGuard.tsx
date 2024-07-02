"use client";

import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoleGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const [isAdmin, setIsAdmin] = useState<null | boolean>(null);

  useEffect(() => {
    if (user?.roles.includes(1)) {
      setIsAdmin(true);
    } else {
      router.push("/");
    }
  }, [isAdmin]);

  if(!isAdmin){
 return <p>LOADING PAGE</p>;
  } 

  return <>{children}</>;
}
