import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 px-8 py-12 text-zinc-300">
      <div className="max-w-6xl mx-auto flex justify-between items-start max-sm:flex-col max-sm:items-center gap-8">
        {/* Branding & Email */}
        <div className="flex flex-col gap-2 items-start max-sm:items-center">
          <h1 className="font-display text-2xl max-sm:text-xl text-white">
            Suyog Poudel.
          </h1>
          <Link
            href="mailto:suyogpoudel583@gmail.com"
            className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
          >
            suyogpoudel583@gmail.com
          </Link>
        </div>

        {/* Social / Links */}
        <div className="flex flex-col gap-3 items-center">
          <p className="text-lg font-semibold text-zinc-200">
            Connect with me:
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/suyogpoudel"
              target="_blank"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <IconBrandGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/poudelsuyog/"
              target="_blank"
              className="hover:text-teal-400 transition-colors duration-200"
            >
              <IconBrandLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Tech note / copyright */}
        <div className="flex flex-col gap-2 items-end max-sm:items-center">
          <p className="text-sm text-zinc-500">
            Built with Next.js & TypeScript
          </p>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Suyog Poudel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
