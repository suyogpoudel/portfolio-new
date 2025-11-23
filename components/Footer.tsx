import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-900 px-8 py-4 flex justify-between max-sm:flex-col max-sm:items-center gap-5">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="font-display text-xl max-sm:text-lg">Suyog Poudel.</h1>
        <Link
          href="mailto:suyogpoudel583@gmail.com"
          className="text-zinc-400 hover:text-teal-400 transition-colors duration-200"
          target="_blank"
        >
          suyogpoudel583@gmail.com
        </Link>
      </div>

      <div className="flex flex-col gap-2 items-end">
        <p className="text-xl max-sm:text-lg">
          Built using Next.js and Typescript
        </p>
        <Link
          href="/"
          className="text-zinc-400 hover:text-teal-400 transition-colors duration-200"
        >
          Visit Github Repo &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Footer;
