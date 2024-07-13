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
                  width={144}
                  height={144}
                  className="rounded-md mb-4 w-20 h-20 p-2 object-contain dark:hidden"
                />
                <Image
                  src={
                    project.darkModeIcon ? project.darkModeIcon : project.icon
                  }
                  alt={project.alt}
                  width={144}
                  height={144}
                  className="rounded-md mb-4 w-20 h-20 p-2 object-contain hidden dark:block"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
