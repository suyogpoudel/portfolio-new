import CopyButton from "@/components/CopyButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Me | Suyog Poudel",
  description:
    "Need a web developer who writes clean code, designs nice UI, and sometimes makes things work on the first try? Let’s chat!",
  twitter: {
    card: "summary",
    title: "Hire Suyog Poudel",
    description:
      "Get in touch to hire a full-stack web developer for your next project.",
    creator: "@__suyogpoudel",
  },
};

const HireMe = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="font-display max-sm:text-3xl text-4xl mb-10">Hire Me</h1>
      <p className="sm:text-lg text-zinc-300 text-center mb-5">
        I am a full-stack developer focused on building clean and responsive web
        apps. If you have a project in mind or need assistance with building a
        website, feel free to reach out to me.
      </p>

      <div className="my-5 flex flex-col justify-center items-center gap-2">
        <p className="text-lg font-semibold text-zinc-200">
          Best way to reach me:
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="mailto:suyogpoudel583@gmail.com"
            className="hover:border-b transition-all duration-150"
          >
            suyogpoudel583@gmail.com
          </Link>
          <CopyButton textToCopy="suyogpoudel583@gmail.com" />
        </div>
        <p className="text-sm">
          I typically reply within{" "}
          <span className="text-teal-400 font-medium">24 hours</span>.
        </p>
      </div>

      <div className="my-5 text-center">
        <p className="text-lg font-semibold text-zinc-200 mb-2">
          What I can help with:
        </p>
        <ul className="list-inside space-y-2 text-zinc-400">
          <li>Clean UI with good UX</li>
          <li>Auth, APIs, and Backend systems</li>
          <li>Beautiful and responsive web apps</li>
          <li>Full-stack web apps (Next.js, TypeScript)</li>
        </ul>
      </div>

      <div className="my-5 text-center">
        <p className="text-lg font-semibold text-zinc-200 mb-2">
          Other ways to reach me:
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="https://www.linkedin.com/in/poudelsuyog/"
            target="_blank"
            className="hover:border-b transition-all duration-150"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/suyogpoudel"
            target="_blank"
            className="hover:border-b transition-all duration-150"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="my-5 text-center">
        <p className="text-lg font-semibold text-zinc-200 mb-2">
          When reaching out, it helps if you include:
        </p>
        <ul className="list-inside space-y-2 text-zinc-400">
          <li>What you're building or hiring for</li>
          <li>What your deadline and budget are</li>
          <li>Any links or context that are relevant</li>
        </ul>
      </div>

      <div className="my-5 text-center">
        <p className="text-lg font-semibold text-zinc-200 mb-2">
          Not sure yet?
        </p>
        <p className="text-zinc-400">
          Feel free to ask a quick question! I will be more than happy to help.
        </p>
      </div>
    </div>
  );
};

export default HireMe;
