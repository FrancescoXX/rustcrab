"use client";

import React, { useState } from "react";
import { tools } from "@/data/tools";
import Card from "@/components/Card";
import GlobalSearchInput from "@/components/GlobalSearchInput";

export default function DevTools() {
  const [filteredTools, setFilteredTools] = useState(tools);

  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Developer Tools
        </h1>

        <GlobalSearchInput name={'tools'} globalFunc={setFilteredTools} />


        <div className="grid md:grid-cols-3 w-full gap-5">
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
