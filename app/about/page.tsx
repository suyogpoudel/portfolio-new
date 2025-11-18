import { Metadata } from "next";
import Picture from "@/public/face.jpg";
import Image from "next/image";
import * as motion from "motion/react-client";
import {
  IconBrandCss3,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandInstagram,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Suyog Poudel",
  description: "ill write smth here",
};

const About = () => {
  const links = [
    { src: "/", title: "Linkedin", icon: IconBrandLinkedin },
    {
      src: "https://github.com/suyogpoudel",
      title: "Github",
      icon: IconBrandGithub,
    },
    {
      src: "https://www.facebook.com/suyogpoudel01",
      title: "Facebook",
      icon: IconBrandFacebook,
    },
    { src: "/", title: "Instagram", icon: IconBrandInstagram },
    { src: "/", title: "X", icon: IconBrandX },
  ];

  const skills = [
    {
      title: "HTML",
      desc: "HTML is the first thing I learnt on my journey of web development. I learned about all the different tags and I also learned about SEO.",
      icon: IconBrandHtml5,
    },

    {
      title: "CSS",
      desc: "CSS is what I learnt next to make the pages I made using HTML prettier. I learnt all about it including flexbox, grids and media queries.",
      icon: IconBrandCss3,
    },
    {
      title: "Javascript",
      desc: "I learnt Javascript to add interactivity to the bland and basic sites I made. I have quite a good understanding of all the array and object methods and I have a basic knowledge of OOP too.",
      icon: IconBrandJavascript,
    },
    {
      title: "Tailwind CSS",
      desc: "I use Tailwind CSS to style all the sites I make. I am pretty good at it thanks to all the time I gave to learning the fundamentals of CSS.",
      icon: IconBrandTailwind,
    },
    {
      title: "React",
      desc: "I learnt React to help me make good-looking websites easily and efficiently. I use reusable components and hooks to make my life easier when coding websites.",
      icon: IconBrandReact,
    },
    {
      title: "Next.js",
      desc: "Next.js is what I am currently learning and I am hoping to use it to make full-stack applications in the future. I enjoy working with Next.js as I can utilise all my knowledge of React in it.",
      icon: IconBrandNextjs,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={Picture}
          alt="Picture of Suyog Poudel"
          width={200}
          height={200}
          className="rounded-full object-cover aspect-square mb-3"
        />
        <h1 className="text-4xl font-display mb-3">Suyog Poudel</h1>
        <div className="flex justify-center items-center gap-4">
          {links.map(({ src, title, icon: Icon }) => (
            <Link href={src} key={title} target="_blank">
              <Icon className="w-7 h-7 text-zinc-300 hover:text-teal-500 transition-colors duration-200" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-start w-[80%] mt-10">
          <h3 className="font-headings text-2xl text-zinc-100 px-2">Profile</h3>
          <p className="text-lg text-justify">
            I am an 18yo student from Nepal who's just learning web development
            because that's what I enjoy doing a lot. I have always been
            fascinated by coding and computers, so web development is kinda
            perfect for me. I enjoy making webs and I enjoy designing them. I
            can make somewhat decent looking webs and I am always proud of
            whatever I come up with.
          </p>
        </div>

        <div className="flex flex-col justify-start w-[80%] mt-10">
          <h3 className="font-headings text-2xl text-zinc-100 px-2">Skills</h3>
          <p className="text-lg text-justify mb-5">
            I enjoy learning new languages and technologies and here are the
            things I know right now
          </p>

          <div className="grid grid-cols-2 gap-8">
            {skills.map(({ title, desc, icon: Icon }) => (
              <motion.div
                key={title}
                className="bg-zinc-900 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.01,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="flex justify-between mb-2 ">
                  <p className="font-headings text-xl">{title}</p>
                  <Icon className="text-teal-500 scale-110" />
                </div>
                <p className="text-zinc-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
