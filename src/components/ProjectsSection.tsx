import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Card from "./Card";

export default function ProjectsSection() {
  return (
    <section className="py-16 w-full rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Rust Projects
        </h2>
        <div className="flex flex-wrap justify-evenly gap-8">
          {projects.slice(0, 5).map((project, index) => <Card item={project} key={index} />)}
        </div>
      </div>
    </section>
  );
}
