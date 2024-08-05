"use client";

import Image from "next/image";

import { people } from "@/data/people";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function PeopleSection() {
  return (
    <section className="py-16 w-full rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          People
        </h2>
        <div className="flex flex-wrap justify-evenly gap-8">
          {people.slice(0, 3).map((p, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-gray-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-1/2 md:w-1/8"
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
      </div>
    </section>
  );
}
