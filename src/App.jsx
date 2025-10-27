import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GitHubCard from "./components/GitHubCard";
import WeatherCard from "./components/WeatherCard";
import { useFetchGitHub } from "./hooks/useFetchGitHub";
import { useFetchWeather } from "./hooks/useFetchWeather";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const { data: githubData } = useFetchGitHub("Mukdaniella");
  const { weather } = useFetchWeather("Kigali");

  return (
    <div className={theme === "light" ? "bg-gray-100 min-h-screen" : "bg-gray-900 min-h-screen"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <GitHubCard  data={githubData} />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}
