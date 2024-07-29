import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-green-500 border border-gray-200 flex-shrink-0 h-screen mt-4">
      <nav>
        <ul>
          <li className="my-4 pb-4  text-center ">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="my-4 pb-4  text-center ">
            <Link href="/dashboard" className="">
              Dashboard
            </Link>
          </li>
          <li className="my-4 pb-4 text-center">
            <Link href="/profile" className="">
              Profile
            </Link>
          </li>
          <li className="my-4 pb-4 text-center">
            <Link href="/holdings" className="">
              My Holdings
            </Link>
          </li>
          <li className="my-4 pb-4 text-center">
            <Link href="/wallet" className="">
              My Wallet
            </Link>
          </li>
          <li className="my-4 pb-4 text-center">
            <Link href="/gold" className="">
              Gold
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
