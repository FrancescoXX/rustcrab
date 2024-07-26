"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lessons } from "@/data/lessons";
import GlobalSearchInput from "@/components/GlobalSearchInput";

export default function Lessons() {
  const [filteredLessons, setFilteredLessons] = useState(lessons);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Lessons
        </h1>

        <GlobalSearchInput name={'lessons'} globalFunc={setFilteredLessons} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLessons.map((lesson, index) => (
            <Link
              href={lesson.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-[350px] overflow-hidden h-0 pb-[56.25%] rounded-lg">
                  <iframe
                    width="350"
                    height="200"
                    src={lesson.embed}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-2xl mt-4 font-semibold mb-3 text-gray-800 dark:text-white">
                  {lesson.title}
                </h3>

                <span className="text-red-500 hover:text-red-600 font-medium flex items-center gap-1">
                  Learn More <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No lessons found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
