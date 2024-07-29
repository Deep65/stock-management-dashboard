import Login from "./(auth)/login/page";
import { getCookie } from "cookies-next";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const token = getCookie("token");

  return <>{token ? <LandingPage /> : <Login />}</>;
}
