import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
      duration: 1.2,
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

  const router = useRouter();

  const handleThemeChange = (theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      setDarkTheme(true);
      localStorage.setItem("theme", theme);
    } else if (theme === 'light') {
      setDarkTheme(false);
      localStorage.setItem("theme", theme);
    } else {
      return;
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition duration-1000 bg-white dark:bg-black">
      <nav className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
        <motion.div
          initial={{
            x: -500,
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
        >
          <h1 className="font-semibold transition duration-1000 text-black dark:text-white">
            Antony{" "}
            <span className="transition duration-1000 text-red-500 dark:text-amber-500">
              Chiramel
            </span>
          </h1>
        </motion.div>

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
          className="md:hidden"
        >
          <Hamburger
            toggled={isSidebarOpen}
            toggle={setSidebarOpen}
            label="Show menu"
            color={darkTheme ? "#ffffff" : "#000000"}
            duration={0.8}
          />
        </motion.div>

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
          className="hidden md:block"
        >
          <ul className="flex items-center gap-14">
            <Link href="/">
              <li
                className={`${
                  router.asPath === "/"
                    ? "text-red-500 border-b-2 border-red-500 dark:text-amber-500 dark:border-amber-500"
                    : "text-black dark:text-white"
                } transition duration-1000`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`${
                  router.asPath === "/about"
                    ? "text-red-500 border-b-2 border-red-500 dark:text-amber-500 dark:border-amber-500"
                    : "text-black dark:text-white"
                } transition duration-1000`}
              >
                About
              </li>
            </Link>
            <Link href="/work">
              <li
                className={`${
                  router.asPath === "/work"
                    ? "text-red-500 border-b-2 border-red-500 dark:text-amber-500 dark:border-amber-500"
                    : "text-black dark:text-white"
                } transition duration-1000`}
              >
                Work
              </li>
            </Link>
            {/* <Link href="/contact">
              <li
                className={`${
                  router.asPath === "/contact"
                    ? "text-red-500 border-b-2 border-red-500 dark:text-amber-500 dark:border-amber-500"
                    : "text-black dark:text-white"
                } transition duration-1000`}
              >
                Contact
              </li>
            </Link> */}
            {darkTheme ? (
              <button
                className="flex items-center gap-1 text-black dark:text-white"
                onClick={() => handleThemeChange("light")}
              >
                {/* <span>Light</span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            ) : (
              <button
                className="flex items-center gap-1 text-black dark:text-white"
                onClick={() => handleThemeChange("dark")}
              >
                {/* <span>Dark</span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </ul>
        </motion.div>
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
          className="absolute left-0 right-0 top-0 z-50 transition duration-1000 bg-red-500 dark:bg-amber-500"
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
                <span className="transition duration-1000 text-white dark:text-black">
                  Chiramel
                </span>
              </h1>

              <div className="md:hidden">
                <Hamburger
                  toggled={isSidebarOpen}
                  toggle={setSidebarOpen}
                  label="Show menu"
                  color={darkTheme ? "#000000" : "#ffffff"}
                  duration={0.8}
                />
              </div>
            </nav>
            <ul className="flex flex-col gap-8 px-4 mt-20">
              <Link href="/" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className={`${
                    router.asPath === "/"
                      ? "border-b-2 border-white dark:border-black"
                      : ""
                  } inline-block font-light text-4xl text-white dark:text-black`}
                >
                  Home
                </motion.li>
              </Link>
              <Link href="/about" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className={`${
                    router.asPath === "/about"
                      ? "border-b-2 border-white dark:border-black"
                      : ""
                  } inline-block font-light text-4xl text-white dark:text-black`}
                >
                  About
                </motion.li>
              </Link>
              <Link href="/work" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className={`${
                    router.asPath === "/work"
                      ? "border-b-2 border-white dark:border-black"
                      : ""
                  } inline-block font-light text-4xl text-white dark:text-black`}
                >
                  Work
                </motion.li>
              </Link>
              {/* <Link href="/contact" onClick={() => setSidebarOpen(false)}>
                <motion.li
                  variants={navItem}
                  className={`${
                    router.asPath === "/contact"
                      ? "border-b-2 border-white dark:border-black"
                      : ""
                  } inline-block font-light text-4xl text-white dark:text-black`}
                >
                  Contact
                </motion.li>
              </Link> */}
              <motion.div variants={navItem}>
                {darkTheme ? (
                  <button
                    className="flex items-center gap-1 font-light text-xl text-white dark:text-black"
                    onClick={() => handleThemeChange("light")}
                  >
                    <span>Let there be light</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="flex items-center gap-2 font-light text-xl text-white dark:text-black"
                    onClick={() => handleThemeChange("dark")}
                  >
                    <span>{`Light's out`}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </motion.div>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
