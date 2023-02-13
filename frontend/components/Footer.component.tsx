import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import useDarkTheme from "../store/useDarkTheme.store";

function Footer() {
  const { darkTheme } = useDarkTheme((state) => state);

  return (
    <main className="fixed z-40 bottom-0 left-0 right-0">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-end"
      >
        <div
          className={`h-1 w-24 ${darkTheme ? "bg-amber-500" : "bg-red-500"}`}
        ></div>
        <SocialIcon
          url="https://www.linkedin.com/in/antony-chiramel-a40a3a169"
          fgColor={darkTheme ? "#ffffff" : "#000000"}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/5thComrade"
          fgColor={darkTheme ? "#ffffff" : "#000000"}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://antonychiramel.medium.com/"
          fgColor={darkTheme ? "#ffffff" : "#000000"}
          bgColor="transparent"
        />
        <div
          className={`h-1 w-8 ${darkTheme ? "bg-amber-500" : "bg-red-500"}`}
        ></div>
      </motion.div>
    </main>
  );
}

export default Footer;
