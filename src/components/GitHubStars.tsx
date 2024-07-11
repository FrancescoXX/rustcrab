"use client";

import { useEffect, useState } from 'react';

interface GitHubStarsProps {
  repo: string;
}

export default function GitHubStars({ repo }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    }

    fetchStars();
  }, [repo]);

  if (stars === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center">
      <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer" className="text-2xl">
        ⭐ {stars} stars on GitHub
      </a>
    </div>
  );
}
