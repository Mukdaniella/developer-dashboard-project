import React, { useContext } from "react";
import Navbar from "./components/navbar";
import GitHubCard from "./components/githubcard";
import WeatherCard from "./components/weathercard";
import { useFetchGitHub } from "./hooks/usefetchgithub";
import { useFetchWeather } from "./hooks/usefetchweather";
import { ThemeContext } from "./context/themecontext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  const { data: githubData } = useFetchGitHub("Mukdaniella");
  const { weather } = useFetchWeather("Kigali");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 flex flex-col items-center pt-10">
        
        {/* Main box */}
        <div className="w-full max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center gap-6 transition-colors duration-500">
          
          {/* Navbar */}
          <Navbar />

          {/* Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <GitHubCard data={githubData} />
            <WeatherCard weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}
