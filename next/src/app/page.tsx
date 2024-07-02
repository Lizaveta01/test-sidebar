"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Auth from "./(auth)/auth/page";

export default function App({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    }
  }, [router]);

  console.log("INIIII");
  if (!isAuthenticated) {
    return <Auth />;
  }

  console.log("PAss");

  return <>{children}</>;
}
