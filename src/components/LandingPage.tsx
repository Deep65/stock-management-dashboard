import React from "react";
import Image from "next/image";
import Link from "next/link";
import Groww from "../../public/Groww.jpeg";
import Sidebar from "./Sidebar";
function LandingPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-black text-green-500 p-4">
        <div className="rounded-lg max-w-3xl w-full bg-white shadow-md p-8">
          <div className="flex justify-center mb-8">
            <Image src={Groww} width={300} height={100} alt="groww-logo" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to the Stock Market Exchange
          </h1>
          <p className="text-lg mb-2 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit voluptatum est quo nisi. Ex sint laborum quidem
            temporibus eum sapiente voluptas necessitatibus sed, repellendus
            tempore vitae consequatur cumque vel explicabo!
          </p>
          <div className="text-center">
            <Link
              href="/dashboard"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
