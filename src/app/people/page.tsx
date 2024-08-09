"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { people } from "@/data/people";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function People() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = people.filter(
      (people) =>
        people.name.toLowerCase().includes(term) ||
        people.description.toLowerCase().includes(term),
    );
    setFilteredPeople(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          People's
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search people..."
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

        <div className="flex flex-wrap justify-evenly gap-8">
          {filteredPeople.map((p, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-gray-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-1/2 md:w-1/4"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={p.profileIcon}
                  alt={p.name}
                  width={144}
                  height={144}
                  className="rounded-full mb-4 w-20 h-20 p-2 object-contain"
                />
                <h3 className="text-2xl font-semibold mb-2 text-current">
                  {p.name}
                </h3>
                <h4 className="text-blue-600 mb-2">{p.role}</h4>
                <p className="dark:text-gray-400 text-gray-600 mb-4">
                  {p.description}
                </p>
                <Link
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No one found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
