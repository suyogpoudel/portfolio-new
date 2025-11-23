import { Metadata } from "next";

import * as motion from "motion/react-client";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Portfolio | Suyog Poudel",
  description: "ill write smth here",
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
            color: ["#4dabf7", "#3bc9db", "#38d9a9", "#3bc9db"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          Suyog Poudel.
        </motion.h1>
      </div>

      <h3 className="text-lg text-zinc-300 font-headings mb-5">
        A guy with a laptop, can make somewhat decent looking websites, just
        learning currently.
      </h3>

      <CTAButton />
    </div>
  );
};

export default Home;
