"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { lessons } from "@/data/lessons";
import Header from "@/components/Header";

export default function Lessons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLessons, setFilteredLessons] = useState(lessons);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = lessons.filter((lessons) =>
      lessons.title.toLowerCase().includes(term),
    );
    setFilteredLessons(filtered);
  };

  return (
    <><Header /><div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[600px] -top-64 left-1/2 transform -translate-x-1/2"></div>
    <div className="min-h-screen bg-background bg-opacity-5 mb-24">
      <div className="container mx-auto px-4 py-12">
        <div className="m-8">
          <h1 className="text-6xl font-semibold text-center text-foreground mt-8">
            RUST <span className="bg-gradient-to-r from-[#F5742E]/90 to-[#D93A29] bg-clip-text text-transparent">LESSONS</span>
          </h1>
          <h6 className="text-foreground/90 font-light text-base text-center ">Everything you need to learn about Rust</h6>
        </div>

        <div className="mb-8 mt-20 mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-14 rounded-full border-[0.5px] border-muted-foreground/70 bg-transparent   text-accent-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary/95 placeholder:text-muted-foreground/80" />
            <Search
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground/80 "
              size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredLessons.map((lesson, index) => (
            <Link
              href={lesson.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground/5  p-6 rounded-3xl border-2 border-foreground/10 shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="group flex flex-col items-center text-center">
                <div className="relative w-[350px] overflow-hidden h-0 pb-[56.25%] rounded-lg">
                  <iframe
                    width="350"
                    height="200"
                    src={lesson.embed}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-3xl"
                  ></iframe>
                </div>
                <h3 className="text-2xl mt-4 font-medium mb-3 text-foreground/95">
                  {lesson.title}
                </h3>

                <span className="text-primary/95 group-hover:text-primary font-medium flex items-center gap-1">
                  Learn More <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <p className="text-center text-foreground/60 mt-8">
            No lessons found matching your search.
          </p>
        )}
      </div>
    </div></>
  );
}
