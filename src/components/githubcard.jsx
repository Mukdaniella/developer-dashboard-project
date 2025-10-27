import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function GitHubCard({ data }) {
  const { theme } = useContext(ThemeContext);
  if (!data) return <p>Loading GitHub data...</p>;

  return (
    <div
      className={`p-4 shadow rounded
        ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-700 text-white"} transition-colors duration-500`}
    >
      
      <h2 className="text-xl font-bold mb-10">GitHub</h2>

      <div className="flex items-center">
        <img src={data.avatar_url} alt="avatar" className="w-20 h-20 rounded-full mr-4" />
        <div>
          <p>Repos: {data.public_repos}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
        </div>
      </div>
    </div>
  );
}
