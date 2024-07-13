import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-16 w-full rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Where is Rust Used
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 5).map((project, index) => (
            <Link
              target="_blank"
              href={project.link}
              key={index}
              className="hover:shadow-xl hover:scale-105 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={project.icon}
                  alt={project.alt}
                  width={75}
                  height={75}
                  className="rounded-md mb-4 w-20 h-20 p-2 object-contain"
                />
              </div>
            </Link>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-evenly gap-8">
          {projects.slice(0, 5).map((project, index) => (
            <Link
              target="_blank"
              href={project.link}
              key={index}
              className="hover:shadow-xl hover:scale-105 w-full sm:w-1/2 md:w-1/4"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={project.icon}
                  alt={project.alt}
                  width={75}
                  height={75}
                  className="rounded-md mb-4 w-20 h-20 p-2 object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
