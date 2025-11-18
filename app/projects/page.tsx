import { Metadata } from "next";
import * as motion from "motion/react-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Suyog Poudel",
  description: "ill write smth here",
};

const Projects = () => {
  const personalProjects = [
    {
      title: "To-Do List App",
      desc: "A to-do list app made using HTML, CSS, Javascript. I also used a little bit of OOP or Object Oriented Programming for this.",
      link: "https://todo-list-suyog.vercel.app/",
    },
    {
      title: "To-Do List App React",
      desc: "This is a to-Do list app which I made using React. I used Tailwind CSS for the styling and I tried to make a decent looking UI.",
      link: "https://react-todo-list-suyog.vercel.app/",
    },
    {
      title: "QR Code Generator",
      desc: "A React app which I made to learn about API integration in React. It uses an API to turn the provided url into a QR code.",
      link: "https://qr-code-generator-react-app.vercel.app/",
    },
    {
      title: "Random Useless Facts",
      desc: "This app uses an API to fetch random and useless facts and displays one fact at a time.",
      link: "https://random-useless-fact.vercel.app/",
    },
    {
      title: "Kitty Facts",
      desc: "I used an API to fetch random cat facts and another API to fetch cute pictures of cat and display lots of facts at once in a grid.",
      link: "https://random-kitty-facts.vercel.app/",
    },
    {
      title: "blogs.",
      desc: "blogs. is a minimal blogs website made using Next.js. It has multiple blogs which are shown in a nice minimal UI.",
      link: "https://blog-site-eosin.vercel.app/",
    },
    {
      title: "Quizzzle",
      desc: "Quizzzle is a fun quiz app with 50 fun questions. It also has database integration so users can provide their own questions for others to answer.",
      link: "https://quizzzle.vercel.app/",
    },
  ];

  const projectsForClients = [
    {
      title: "Triple K Sports",
      desc: "My first project for a client which I made using React. This is a sports management organization based in Nepal.",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="font-display text-4xl mb-10">My Projects</h1>

      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-2 w-[80%] items-center justify-center">
          <h3 className="font-headings text-3xl text-zinc-100 px-2">
            Personal Projects
          </h3>
          <p className="text-lg text-justify text-zinc-300">
            These are the projects I made for myself mainly for the purpose of
            learning.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-4 mb-3">
            {personalProjects.map(({ title, desc, link }) => (
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
                  <Link
                    href={link}
                    target="_blank"
                    className="text-teal-500 border-b-2 px-1 border-zinc-900 hover:border-teal-500 transition-colors duration-300"
                  >
                    Visit Project &rarr;
                  </Link>
                </div>
                <p className="text-zinc-400">{desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-zinc-300">and many more to come...</p>
        </div>

        <div className="flex flex-col gap-2 w-[80%] items-center justify-center">
          <h3 className="font-headings text-3xl text-zinc-100 px-2">
            Projects for Clients
          </h3>
          <p className="text-lg text-justify text-zinc-300">
            These are the projects I made for myself mainly for the purpose of
            learning.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-4 mb-3">
            {projectsForClients.map(({ title, desc, link }) => (
              <motion.div
                key={title}
                className="bg-zinc-900 w-full px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl"
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
                  <Link
                    href={link}
                    target="_blank"
                    className="text-teal-500 border-b-2 px-1 border-zinc-900 hover:border-teal-500 transition-colors duration-300"
                  >
                    Visit Project &rarr;
                  </Link>
                </div>
                <p className="text-zinc-400">{desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-zinc-300">and many more to come...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
