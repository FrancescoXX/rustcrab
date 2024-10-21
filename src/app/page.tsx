"use client";

import Image from "next/image";
import Books from "../components/BooksSection";
import DevToolsSection from "../components/DevToolsSection";
import ProjectsSection from "../components/ProjectsSection";
import SubstackCustom from "../components/SubstackCustom";
import DSAToolSection from "@/components/DSASection";
import LessonSection from "@/components/LessonSection";
import Header from "@/components/Header";


export default function Home() {
  return (
    <><Header /><div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[600px] -top-64 left-1/2 transform -translate-x-1/2"></div>
    <main className="relative flex-grow flex flex-col items-center extra-small:text-[0.75em] small:text-[1rem] justify-center text-center space-y-6 bg-background bg-opacity-5 w-full overflow-hidden">

      <div className="flex flex-col items-center justify-center text-center space-y-6 m-20">
        <div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[500px] top-28 -right-48 transform translate-x-0"></div>
        <Image
          src="/rust_lgo_720.png"
          alt="Rust Logo"
          width={70}
          height={70}
          className="mx-auto mt-5" />
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
        <p className="text-5xl md:text-3xl lg:text-4xl text-foreground font-normal uppercase mb-6">
          An Open source project with everything <br /> you need to
          <span className="bg-gradient-to-r from-[#F5742E] to-[#D93A29] bg-clip-text text-transparent"> learn about Rust</span>
        </p>
        <br />
        <div className="w-full max-w-md ">
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
      <div id='dsas' className='min-h-dvh'>
        <DSAToolSection />
      </div>
      <div id='projects' className='min-h-dvh'>
        <ProjectsSection />
      </div>
    </main></>
  );
}
