"use client";

import Image from "next/image";
import Books from "../components/BooksSection";
import DevToolsSection from "../components/DevToolsSection";
import ProjectsSection from "../components/ProjectsSection";
import SubstackCustom from "../components/SubstackCustom";
import DSAToolSection from "@/components/DSASection";
import PeopleSection from "@/components/PeopleSection";
import LessonSection from "@/components/LessonSection";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
      <div className="flex flex-col items-center justify-center text-center space-y-6 p-4 h-dvh">
        <Image
          src="/rust_lgo_720.png"
          alt="Rust Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-5xl font-bold flex items-center space-x-2">
          <a
            href="https://github.com/FrancescoXX/rustcrab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"
          >
            Rustcrab
          </a>
        </h1>
        <br />
        <p className="text-2xl md:text-3xl lg:text-4xl text-current">
          An Open source project with everything you need to learn about Rust
        </p>
        <br />
        <div className="w-full max-w-md">
          <SubstackCustom />
        </div>
        <br />
        <a
          href="https://mybook.to/YJI6DI"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-yellow-600 transition duration-300"
        >
          Preorder the Rust Book Now!
        </a>
      </div>
      <div id='books' className='min-h-dvh'>
        <Books />
      </div>
      <div id='dev_tools' className='min-h-dvh'>
        <DevToolsSection />
      </div>
      <div id='lessons' className='min-h-dvh'>
        <LessonSection />
      </div>
      <div id='people' className='min-h-dvh'>
        <PeopleSection />
      </div>
      <div id='dsas' className='min-h-dvh'>
        <DSAToolSection />
      </div>
      <div id='projects' className='min-h-dvh'>
        <ProjectsSection />
      </div>
    </main>
  );
}
