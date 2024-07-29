import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="bg-black text-green-500 border-gray-200 border p-4 flex justify-between items-center">
      <div>
        <Link href="/">
          <span className="text-xl font-bold flex items-center">
            <FaChartLine className="mr-2" />
            Stock Management
          </span>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 cursor-pointer">
          <Link
            href="/login"
            className="cursor-pointer text-white hover:underline"
          >
            <LogoutButton />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
