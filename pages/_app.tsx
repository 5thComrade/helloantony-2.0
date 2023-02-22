import { useEffect } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import useDarkTheme from "@/frontend/store/useDarkTheme.store";
import Navbar from "@/frontend/components/Navbar.component";
import Footer from "@/frontend/components/Footer.component";
import { Roboto_Mono } from "@next/font/google";
import "@/styles/globals.css";

const roboto_mono = Roboto_Mono({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  const { darkTheme: isDarkTheme, setDarkTheme } = useDarkTheme(
    (state) => state
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      setDarkTheme(true);
    } else if (theme && theme === "light") {
      setDarkTheme(false);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <main className={isDarkTheme ? "dark" : ""}>
      <style jsx global>{`
        html {
          font-family: ${roboto_mono.style.fontFamily};
        }
      `}</style>
      <div className="relative min-h-screen transition duration-1000 bg-white dark:bg-black">
        <Navbar />
        <AnimatePresence>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </main>
  );
}
