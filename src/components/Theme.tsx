import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Theme() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const theme = savedTheme || "light";
    setCurrentTheme(theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`group: rounded-full border border-zinc-200 p-2 text-zinc-500 transition-transform duration-300 dark:border-white dark:bg-zinc-800 dark:text-primary ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
    >
      {currentTheme === "light" ? <IoSunnyOutline /> : <BsFillMoonStarsFill />}
    </button>
  );
}
