import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { tools } from "@/data/tools";
import { FaArrowRight } from "react-icons/fa";

export default function DevToolsSection() {
  const updateCursor = (event: PointerEvent) => {
    document.documentElement.style.setProperty('--x', event.clientX + 'px');
    document.documentElement.style.setProperty('--y', event.clientY + 'px');
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', updateCursor);

    return () => {
      document.body.removeEventListener('pointermove', updateCursor);
    };
  }, []);

  return (
    <section className="py-16 pt-10  rounded-md my-4">
      <div className="mx-auto px-4 container">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Rust Developer Tools
        </h2>
        <div className="grid md:grid-cols-2 w-full gap-5">
          {tools.slice(0, 3).map((tool, index) => (
            <Link
              target="_blank"
              href={tool.link}
              key={index}
              className="dark:bg-gray-900 group bg-gray-100 rounded-lg shadow-lg transition duration-300 hover:shadow-xl min-w-full toolsInnerCard"
            >
              <div className="flex items-center gap-5 sm:gap-10 relative hover:scale-105 p-6 px-10 transition duration-300">
                <div className="flex flex-col md:flex-row gap-5 items-start w-full">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={75}
                    height={75}
                    className="rounded-md mb-4 w-20 h-20 p-2 object-contain"
                  />
                  <div className="grid gap-2 text-left">
                    <h3 className="text-2xl font-semibold mb-3 text-current">
                      {tool.name}
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 mb-4">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <FaArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition duration-300"/>
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
