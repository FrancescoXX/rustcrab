import React from "react";
import Link from "next/link";
import Image from "next/image";
import { tools } from "@/data/tools";

export default function DevToolsSection() {
  return (
    <section className="py-16 dark:bg-gray-800 bg-gray-200 rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Rust Developer Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.slice(0, 3).map((tool, index) => (
            <Link
              target="_blank"
              href={tool.link}
              key={index}
              className="dark:bg-gray-900 bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={75}
                  height={75}
                  className="rounded-md mb-4 w-20 h-20 p-2 object-contain"
                />
                <h3 className="text-2xl font-semibold mb-3 text-current">
                  {tool.name}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 mb-4">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/devtools">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            See More Tools
          </button>
        </Link>
      </div>
    </section>
  );
}
