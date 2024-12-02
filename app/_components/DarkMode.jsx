"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((p) => !p);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark")
    );
  };

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="bg-violet-400 size-8 lg:size-12 rounded-full fixed bottom-8 right-12"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8 }}
    >
      {isDark ? (
        <i className="fa-regular text-xl hover:text-yellow-300 fa-sun"></i>
      ) : (
        <i className="fa-regular text-xl  fa-moon"></i>
      )}
    </motion.button>
  );
};

export default DarkMode;
