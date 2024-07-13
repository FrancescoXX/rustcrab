import React from "react";
import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonSection() {
  return (
    <section className="py-16 dark:bg-gray-800 bg-gray-200 rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Rust lessons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lessons.slice(0, 3).map((lesson, index) => (
            <Link
              target="_blank"
              href={lesson.link}
              key={index}
              className="dark:bg-gray-900 bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-[350px] overflow-hidden h-0 pb-[56.25%]">
                  {/* <iframe
                    width="350"
                    height="350"
                    src={lesson.embed}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-current">
                  {lesson.title}
                </h3>
                <div className="dark:text-gray-400 text-gray-600 mb-4">
                  <p className="w-[300px] text-start mb-3">
                    In this lesson, We will talk about:
                  </p>
                  {lesson.topics.map((topic) => {
                    return (
                      <>
                        <p>- {topic}</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/lessons">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            See More Lessons
          </button>
        </Link>
      </div>
    </section>
  );
}
