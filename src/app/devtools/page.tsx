"use client";

import React, { useState } from "react";
import { tools } from "@/data/tools";
import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";

export default function DevTools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTools, setFilteredTools] = useState(tools);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(term) ||
        tool.description.toLowerCase().includes(term)
    );
    setFilteredTools(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Developer Tools
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <SearchInput
            placeholder="Search tools..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          {filteredTools.map((tool, index) => (
            <Card key={index} item={tool} index={index} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No tools found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
