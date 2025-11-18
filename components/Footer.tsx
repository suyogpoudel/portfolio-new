import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-900 px-8 py-4 flex justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="font-display text-xl">Suyog Poudel.</h1>
        <Link
          href="mailto:suyogpoudel583@gmail.com"
          className="text-zinc-400 hover:text-teal-400 transition-colors duration-200"
          target="_blank"
        >
          suyogpoudel583@gmail.com
        </Link>
      </div>

      <div className="flex flex-col gap-2 items-end">
        <p className="text-xl">Built using Next.js and Typescript</p>
        <Link
          href=""
          className="text-zinc-400 hover:text-teal-400 transition-colors duration-200"
        >
          Visit Github Repo &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Footer;
