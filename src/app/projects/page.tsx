"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { tools } from "@/data/tools";
import Card from "@/components/Card";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(tools);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = tools.filter(
      (project) =>
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term),
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Projects
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search project..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 w-full gap-5">
          {filteredProjects.map((project, index) => (
            <Card item={project} key={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No tools found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
