import Link from "next/link";
import * as motion from "motion/react-client";

const CTAButton = () => {
  return (
    <Link href="/hire-me">
      <motion.div
        initial={{
          backgroundColor: "#4dabf7",
        }}
        animate={{
          backgroundColor: ["#4dabf7", "#3bc9db", "#38d9a9", "#3bc9db"],
          transition: {
            duration: 5,
            repeat: Infinity,
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="px-4 py-2 font-medium rounded-lg text-zinc-800"
      >
        Hire Me!
      </motion.div>
    </Link>
  );
};

export default CTAButton;
