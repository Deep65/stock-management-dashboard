"use client";

import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    deleteCookie("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const token = getCookie("token");
      setIsLoggedIn(!!token);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return isLoggedIn ? (
    <div
      onClick={handleLogout}
      className="cursor-pointer text-white hover:underline"
    >
      Logout
    </div>
  ) : (
    <></>
  );
};

export default LogoutButton;
