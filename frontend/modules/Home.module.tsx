import Head from "next/head";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import useDarkTheme from "../store/useDarkTheme.store";

function Home() {
  const { darkTheme } = useDarkTheme((state) => state);

  const [text] = useTypewriter({
    words: [
      "I am a web developer, serverless enthusiast, and a wannabe designer.",
      "You've found the right guy. What are you waiting for?",
      "Let's work together!",
    ],
    loop: true,
    delaySpeed: 3000,
  });

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
        className="max-w-7xl mx-auto min-h-screen px-6 py-7 flex flex-col items-start justify-center"
      >
        <div className="max-w-xl xl:max-w-3xl">
          <h1 className="transition duration-1000 text-red-500 text-5xl md:text-6xl xl:text-7xl dark:text-amber-500">
            Hello.
          </h1>
          <h1 className="transition duration-1000 text-black text-3xl md:text-4xl xl:text-5xl dark:text-white">
            <span>
              {text}
              <Cursor cursorColor={darkTheme ? "#ffffff" : "#000000"} />
            </span>
          </h1>
        </div>
        <a
          href="https://cdn.jsdelivr.net/gh/5thComrade/assets_jsdelivr/resume/Antony_Chiramel.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="transition duration-1000 mt-10 border rounded px-4 py-3 border-black text-black dark:border-white dark:text-white"
        >
          Download resume
        </a>
      </motion.main>
    </>
  );
}

export default Home;
