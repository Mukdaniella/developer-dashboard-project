import React from "react";

export default function GitHubCard({ data }) {
  if (!data) return <p>Loading GitHub data...</p>;

  return (
    <div className="p-4 shadow rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
      <img src={data.avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
      <h2 className="text-xl font-bold mt-2">{data.login}</h2>
      <p>Repos: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
    </div>
  );
}
