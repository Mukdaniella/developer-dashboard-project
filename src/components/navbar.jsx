import React, { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`flex justify-between items-center gap-12 p-4 rounded
        ${theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"} transition-colors duration-500`}
    >
     
      <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
        Developer Dashboard
      </h1>

      <button
        onClick={toggleTheme}
        className={`px-15 py-2 rounded
          ${theme === "light" ? "bg-gray-300 text-gray-900" : "bg-gray-700 text-white"} transition-colors duration-500`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
