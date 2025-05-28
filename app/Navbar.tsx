"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
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
              className={classNames({
                "text-zinc-900": currentPath == item.href,
                "text-zinc-400": currentPath !== item.href,
                "hover:text-zinc-800": true,
              })}
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
