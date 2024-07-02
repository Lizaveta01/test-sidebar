"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isUnauthenticated, setIsUnauthenticated] = useState(true);

  useEffect(() => {
   const token = localStorage.getItem("token");
  
    if (!token) {
      router.push("/");
    }else {
      setIsUnauthenticated(false);
    }
  }, [router]);

  if (isUnauthenticated) {
    return <><p>LOADING</p></>; /// add spiner
  }


  return (
    <>
      {children}
    </>
  );
}
