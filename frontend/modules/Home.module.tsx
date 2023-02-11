import Head from "next/head";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ y: "-100%", opacity: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="transition duration-1000 text-red-500 text-3xl dark:text-amber-500">
          Home
        </h1>
      </motion.main>
    </>
  );
}

export default Home;
