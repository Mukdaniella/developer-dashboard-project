import { useState, useEffect } from "react";

export const useFetchGitHub = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error("GitHub user not found");
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, loading, error };
};
