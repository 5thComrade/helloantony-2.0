import Head from "next/head";
import { motion } from "framer-motion";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import useDarkTheme from "../store/useDarkTheme.store";

function About() {
  const { darkTheme } = useDarkTheme((state) => state);

  const generateTagCloudRadius = (windowWidth: number) => {
    if (windowWidth < 500) {
      return 150;
    } else if (windowWidth >= 500 && windowWidth < 900) {
      return 200;
    } else {
      return 250;
    }
  };

  return (
    <>
      <Head>
        <title>Antony Chiramel - Web Developer and Designer</title>
        <meta name="author" content="Antony Chiramel" />
        <meta
          name="description"
          content="Antony Chiramel is a web developer and designer based in Bengaluru, India. With several years of experience as an IT Consultant, Antony would be the right guy to build your ideas into scalable Minimum Viable Products(MVP)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <motion.main
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ y: "-100%", opacity: 0 }}
        className="max-w-7xl mx-auto min-h-screen px-6 py-7"
      >
        <div className="mt-10">
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              // radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              radius: generateTagCloudRadius(w.innerWidth),
              maxSpeed: "normal",
              containerClass: "m-auto",
              itemClass: darkTheme
                ? "text-white text-xs md:text-base hover:text-amber-500"
                : "text-black text-xs md:text-base hover:text-red-500",
            })}
            onClickOptions={{ passive: true }}
          >
            {[
              "ReactJS",
              "TypeScript",
              "NextJS",
              "JavaScript",
              "Git",
              "DynamoDB",
              "HTML",
              "Framer Motion",
              "CSS",
              "SASS",
              "Postman",
              "VSCode",
              "AWS Lambda",
              "NodeJS",
              "Axios",
              "React Query",
              "Zustand",
              "Recharts",
              "Zod",
              "TailwindCSS",
            ]}
          </TagCloud>

          <p className="font-light transition duration-1000 text-black dark:text-white">
            {`Hello World! My name is Antony Chiramel and I'm from India. I build solutions using modern web technologies. I'm currently helping Infosys build compelling user interfaces in my capacity as a Senior Associate Consultant.`}
          </p>
          <p className="font-light mt-3 transition duration-1000 text-black dark:text-white">{`I've recently stumbled upon a tech-stack and I'm inclined to call it the LAND stack(Lambda, AWS, NextJS, DynamoDB). So I'm currently busy exploring this tech-stack.`}</p>
          <p className="font-light mt-3 transition duration-1000 text-black dark:text-white">{`And I'm also fascinated by Minimalism.`}</p>
        </div>
      </motion.main>
    </>
  );
}

export default About;
