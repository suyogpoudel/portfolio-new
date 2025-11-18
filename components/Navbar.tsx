"use client";

import Link from "next/link";
import CTAButton from "./CTAButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
    <div className="w-[85%] mx-auto bg-zinc-900 px-8 py-4 flex justify-between items-center rounded-b-4xl shadow-lg">
      <Link href="/" className="font-display text-xl">
        Suyog.
      </Link>

      <ul className="flex justify-center items-center gap-14">
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
        className="px-3 py-1.5 font-medium rounded-lg border-2 border-teal-500 hover:bg-teal-500 hover:text-zinc-800 transition-colors duration-300"
      >
        Hire Me!
      </Link>
    </div>
  );
};

export default Navbar;
