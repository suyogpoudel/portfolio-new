"use client";

import { IconAlignRight, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };

  const links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" },
  ];

  return (
    <div className="w-[85%] max-sm:w-[95%] mx-auto bg-zinc-900 px-8 py-4 flex justify-between items-center rounded-b-4xl shadow-lg">
      <Link href="/" className="font-display text-xl">
        Suyog.
      </Link>

      <ul className="flex justify-center items-center gap-14 max-sm:hidden">
        {links.map(({ href, title }) => (
          <li key={title}>
            <Link
              href={href}
              className={`hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors duration-500 active:bg-zinc-700 ${
                isActive(href) ? "bg-zinc-800" : ""
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/hire-me"
        className="px-3 py-1.5 font-medium rounded-lg border-2 border-teal-500 hover:bg-teal-500 hover:text-zinc-800 transition-colors duration-300 max-sm:hidden"
      >
        Hire Me!
      </Link>

      {isOpen ? (
        <button
          className="hover:text-zinc-400 cursor-pointer transition-colors duration-300 z-100 sm:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IconX />
        </button>
      ) : (
        <button
          className="hover:text-zinc-400 cursor-pointer transition-colors duration-300 z-100 sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <IconAlignRight />
        </button>
      )}

      {isOpen && (
        <motion.div
          initial={{
            y: -50,
          }}
          animate={{
            y: [-50, 0],
          }}
          className="absolute top-0 left-0 flex flex-col bg-zinc-900 w-full gap-5 py-10 px-3 shadow-xl justify-center items-center"
        >
          <ul className="flex flex-col justify-center items-center gap-4">
            {links.map(({ href, title }) => (
              <li key={title}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors duration-500 active:bg-zinc-700 ${
                    isActive(href) ? "bg-zinc-800" : ""
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/hire-me"
            className="px-3 py-1.5 font-medium rounded-lg border-2 border-teal-500 hover:bg-teal-500 hover:text-zinc-800 transition-colors duration-300"
          >
            Hire Me!
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
