import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <section>
        <div className="py-20 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
            Next Themes + Tailwind Dark Mode
          </h1>

          <button
            className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
