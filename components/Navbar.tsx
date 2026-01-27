"use client";

import { IconAlignRight, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Picture from "@/public/face.jpg";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

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

  const renderLinks = () =>
    links.map(({ href, title }) => (
      <li key={title}>
        <Link
          href={href}
          onClick={() => setIsOpen(false)}
          className={`hover:text-teal-400 px-2 py-1 transition-colors duration-300 ${
            isActive(href) ? "border-b-2 border-teal-500" : ""
          }`}
        >
          {title}
        </Link>
      </li>
    ));

  return (
    <div className="w-[85%] max-sm:w-[95%] mx-auto bg-zinc-900 px-8 py-4 flex justify-between items-center rounded-b-4xl shadow-lg">
      <Link href="/">
        <Image
          src={Picture}
          alt="Picture of Suyog Poudel"
          width={45}
          height={45}
          className="rounded-full w-full h-full aspect-square hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <ul className="flex justify-center items-center gap-14 max-md:gap-5 max-sm:hidden">
        {renderLinks()}
      </ul>

      <Link
        href="/hire-me"
        className="px-3 py-1.5 font-medium rounded-lg border-2 border-teal-500 hover:bg-teal-500 hover:text-zinc-800 transition-colors duration-300 max-sm:hidden"
      >
        Hire Me!
      </Link>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hover:text-zinc-400 cursor-pointer transition-colors duration-300 z-100 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IconX /> : <IconAlignRight />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 flex flex-col bg-zinc-900 w-full gap-5 py-10 px-3 shadow-xl justify-center items-center sm:hidden"
          >
            <ul className="flex flex-col justify-center items-center gap-4">
              {renderLinks()}
            </ul>

            <Link
              href="/hire-me"
              className="px-3 py-1.5 font-medium rounded-lg border-2 border-teal-500 hover:bg-teal-500 hover:text-zinc-800 transition-colors duration-300"
            >
              Hire Me!
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
