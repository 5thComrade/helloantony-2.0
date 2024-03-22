import Head from "next/head";
import { motion } from "framer-motion";

const featuredWork = [
  {
    id: 1,
    name: "Learn DynamoDb",
    tech: "TypeScript, NextJS, TailwindCSS, Shadcn/ui, Vercel, DynamoDb",
    description:
      "This is a site I built to help people learn DynamoDb in an interactive way. I am a big fan of DynamoDb and it only made sense to make a site for other fans out there.",
    siteUrl: "https://learn-dynamodb.vercel.app/",
    github: "https://github.com/5thComrade/dynamodb",
  },
  {
    id: 2,
    name: "My Portfolio",
    tech: "TypeScript, NextJS, TailwindCSS, Vercel",
    description:
      "Being a frontend engineer, I always wanted a website of my own to showcase my work.",
    siteUrl: "https://www.helloantony.in/",
    github: "https://github.com/5thComrade/helloantony-2.0",
  },
  {
    id: 3,
    name: "Dorun Group Website",
    tech: "TypeScript, NextJS, TailwindCSS, Vercel, DynamoDb",
    description:
      "This is a freelance work I took up. Dorun Group is into waste management in Kerala and I built them a SaaS product to manage their business.",
    siteUrl: "https://www.dorungroup.com/",
    github: "",
  },
  {
    id: 4,
    name: "NextJS Template",
    tech: "TypeScript, NextJS, TailwindCSS, Shadcn/ui",
    description:
      "This is a NextJS starter template I use for all my sites. Anyone can use this template to get started with their NextJS project.",
    siteUrl: "",
    github: "https://github.com/5thComrade/nextjs-starter-template",
  },
];

function Work() {
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
        <div className="mt-20">
          <h1 className="transition duration-1000 text-red-500 text-3xl dark:text-amber-500">
            Featured Work
          </h1>

          <section className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 text-black dark:text-white">
            {featuredWork.map((work) => {
              return (
                <div
                  key={work.id}
                  className="border border-red-500 dark:border-amber-500 rounded-lg p-8 flex justify-between flex-col"
                >
                  <div>
                    <h3 className="font-light text-2xl">{work.name}</h3>
                    <p className="font-light text-sm mt-2">{work.tech}</p>
                  </div>

                  <p className="font-light mt-6 text-lg">{work.description}</p>
                  <div className="mt-4 flex gap-3">
                    {work.siteUrl && (
                      <a
                        href={work.siteUrl}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="transition duration-1000 inline-block border rounded-lg px-4 py-3 bg-black text-white dark:bg-white dark:text-black"
                      >
                        View Site
                      </a>
                    )}

                    {work.github && (
                      <a
                        href={work.github}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="transition duration-1000 inline-block border rounded-lg px-4 py-3 border-black text-black dark:border-white dark:text-white"
                      >
                        Github Repo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </motion.main>
    </>
  );
}

export default Work;
