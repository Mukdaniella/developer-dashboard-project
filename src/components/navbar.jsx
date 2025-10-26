import React from "react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Developer Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
