import React from "react";

export default function GitHubCard({ data }) {
  if (!data) return <p>Loading GitHub data...</p>;

  return (
    <div className="p-4 shadow rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
      {/* Title at the top */}
      <h1 className="text-2xl font-bold mb-4">GitHub</h1>

      {/* Avatar and stats in a row */}
      <div className="flex items-center">
        {/* Avatar image on the left */}
        <img src={data.avatar_url} alt="avatar" className="w-20 h-20 rounded-full mr-4" />

        
        <div>
          <p className="font-bold">Repos: {data.public_repos}</p>
          <p>Followers: {data.followers}</p>
          <p>Following: {data.following}</p>
        </div>
      </div>
    </div>
  );
}
