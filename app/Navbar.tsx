"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const list = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b border-zinc-300 mb-5 py-4  px-5">
      <Container>
        <Flex gap="6" align="center" justify="between">
          <Flex align="center" gap="3">
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
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Log out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Log in</Link>
            )}
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
