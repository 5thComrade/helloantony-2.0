import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import useDarkTheme from "../store/useDarkTheme.store";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const navItem: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { darkTheme, setDarkTheme } = useDarkTheme((state) => state);

  return (
    <div className="relative">
      <nav className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
        <h1 className="font-semibold transition duration-1000 text-black dark:text-white">
          Antony{" "}
          <span className="transition duration-1000 text-red-500 dark:text-amber-500">
            Chiramel
          </span>
        </h1>
        <div className="md:hidden">
          <Hamburger
            toggled={isSidebarOpen}
            toggle={setSidebarOpen}
            label="Show menu"
            color={darkTheme ? "#ffffff" : "#000000"}
            duration={0.8}
          />
        </div>
      </nav>

      {isSidebarOpen && (
        <motion.div
          initial={{
            clipPath: "circle(0px at 40px 40px)",
          }}
          animate={{
            clipPath: "circle(2200px at 40px 40px)",
          }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 1000,
            damping: 1000,
          }}
          className="absolute left-0 right-0 top-0 transition duration-1000 bg-white dark:bg-black"
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto h-screen"
          >
            <nav className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
              <h1 className="font-semibold transition duration-1000 text-black dark:text-white">
                Antony{" "}
                <span className="transition duration-1000 text-red-500 dark:text-amber-500">
                  Chiramel
                </span>
              </h1>

              <div className="md:hidden">
                <Hamburger
                  toggled={isSidebarOpen}
                  toggle={setSidebarOpen}
                  label="Show menu"
                  color={darkTheme ? "#ffffff" : "#000000"}
                  duration={0.8}
                />
              </div>
            </nav>
            <ul className="flex flex-col gap-8 px-4 mt-20">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className="font-light text-4xl text-black dark:text-white dark:px-4"
                >
                  Home
                </motion.li>
              </Link>
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className="font-light text-4xl text-black dark:text-white dark:px-4"
                >
                  About
                </motion.li>
              </Link>
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className="font-light text-4xl text-black dark:text-white dark:px-4"
                >
                  Work
                </motion.li>
              </Link>
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className="font-light text-4xl text-black dark:text-white dark:px-4"
                >
                  Contact
                </motion.li>
              </Link>
              <motion.div
                variants={navItem}
                className="flex gap-8 items-center"
              >
                <button
                  className={`${
                    !darkTheme ? "bg-red-500 text-white" : "text-white"
                  } px-4 py-3 rounded-xl font-light text-2xl`}
                  onClick={() => setDarkTheme(false)}
                >
                  Light
                </button>
                <button
                  className={`${
                    darkTheme ? "bg-amber-500 text-black" : "text-black"
                  } px-4 py-3 rounded-xl font-light text-2xl`}
                  onClick={() => setDarkTheme(true)}
                >
                  Dark
                </button>
              </motion.div>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
