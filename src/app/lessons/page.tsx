"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { lessons } from "@/data/lessons";

export default function DevTools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTools, setFilteredTools] = useState(lessons);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = lessons.filter((lessons) =>
      lessons.title.toLowerCase().includes(term)
    );
    setFilteredTools(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Lessons
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((lesson, index) => (
            <Link
              href={lesson.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {lesson.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  <p className="w-[300px] text-start mb-3">
                    In this lesson, We will talk about:
                  </p>
                  {lesson.topics.map((topic, id) => (
                    <p key={id}>- {topic}</p>
                  ))}
                </div>
                <span className="text-red-500 hover:text-red-600 font-medium flex items-center gap-1">
                  Learn More <ArrowRight size={20} />
                </span>
              </div>
            </Link>
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
