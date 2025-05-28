import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const list = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b border-zinc-300 mb-5 h-14 items-center px-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {list.map((item) => (
          <li key={item.href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
