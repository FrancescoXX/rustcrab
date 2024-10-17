"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { tools } from "@/data/tools";
import Card from "@/components/Card";

export default function DevTools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTools, setFilteredTools] = useState(tools);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(term) ||
        tool.description.toLowerCase().includes(term),
    );
    setFilteredTools(filtered);
  };

  return (
    <div className="min-h-screen bg-background bg-opacity-5 mb-24">
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl font-semibold text-center text-foreground mt-8 uppercase">
          Rust<span className="bg-gradient-to-r from-[#F5742E]/90 to-[#D93A29] bg-clip-text text-transparent"> Developer</span> tool
        </h1>

        <div className="mb-8 mt-16 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/80"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          {filteredTools.map((tool, index) => (
            <Card item={tool} key={index} />
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
