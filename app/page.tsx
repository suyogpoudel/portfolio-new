import { Metadata } from "next";

import * as motion from "motion/react-client";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Suyog Poudel | Full-Stack Web Developer Portfolio",
  description:
    "I make websites, break things, fix them, and sometimes even make them look good. Explore my portfolio and see what I can build for you.",
  twitter: {
    card: "summary",
    title: "Suyog Poudel | Portfolio",
    description:
      "Full-stack web developer building clean and responsive web apps.",
    creator: "@__suyogpoudel",
  },
};

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start gap-1 mb-4">
        <p className="px-4 text-zinc-300">Hi, I am</p>

        <motion.h1
          className="font-display font-semibold lg:text-6xl text-5xl"
          initial={{
            color: "#4dabf7",
          }}
          animate={{
            color: ["#4dabf7", "#3bc9db", "#38d9a9", "#3bc9db", "#4dabf7"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        >
          Suyog Poudel.
        </motion.h1>
      </div>

      <h3 className="text-lg text-zinc-300 font-headings mb-5">
        A guy with a laptop, building websites that actually work (and look
        decent too).
      </h3>

      <CTAButton />
    </div>
  );
};

export default Home;
