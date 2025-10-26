import React, { useState } from "react";
import Navbar from "./components/navbar"

export default function App() {
  

  return (
    <div className={theme === "light" ? "bg-gray-100 min-h-screen" : "bg-gray-900 min-h-screen"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      
    </div>
  );
}
