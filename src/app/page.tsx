"use client";
import Books from "../components/BooksSection";
import DevToolsSection from "../components/DevToolsSection";
import ProjectsSection from "../components/ProjectsSection";
import SubstackCustom from "../components/SubstackCustom";
import DSAToolSection from "@/components/DSASection";
import LessonSection from "@/components/LessonSection";
import { MoveRight } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="relative -mt-[65px] bg-lightprimary-bg dark:bg-primary-bg">
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-[400px] lg:h-[600px]",
            "[background-size:24px_24px]",
            "[background-image:radial-gradient(#a1a1aa_1.5px,transparent_1.5px)]",
            "dark:[background-image:radial-gradient(#ffffff33_1.5px,transparent_1.5px)]",
            "[mask-image:linear-gradient(to_top,black,transparent)]",
            "dark:[mask-image:linear-gradient(to_top,black,transparent)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-white dark:bg-[#121212]"></div>
        <div className="sm:py-18 h-screen container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-20 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
          <div className="relative">
            <div className="mx-auto">
              <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
                <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="z-40 w-full flex justify-center -mt-4 lg:-mt-12 mb-8">
                      <div className="relative w-fit max-w-xl flex justify-center">
                        <a
                          href="https://mybook.to/YJI6DI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/10 dark:bg-white/10 border-black/20 dark:border-white/20 announcement-link group/announcement relative flex flex-row items-center p-1 pr-3 text-sm w-auto gap-2 text-left rounded-full bg-opacity-20 border border-secondary-border hover:border-secondary-strongerborder shadow-md overflow-hidden focus-visible:outline-none focus-visible:ring-brand-600 focus-visible:ring-2 focus-visible:rounded-full"
                        >
                          <div className="border-black/20 dark:border-white/20 inline-flex items-center bg-opacity-10 px-3 rounded-full text-sm py-1 announcement-badge">
                            Preorder the Rust Book 📖
                          </div>
                          <MoveRight
                            strokeWidth={1}
                            className="text-lightprimary-text dark:text-primary-text ml-2 -translate-x-1 transition-transform group-hover/announcement:translate-x-0"
                          />
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover/announcement:opacity-100 transition-opacity overflow-hidden rounded-full from-background-surface-100 to-background-surface-300 backdrop-blur-md " />
                        </a>
                      </div>
                    </div>
                    <h1 className="bricolage text-foreground font-extrabold text-3xl lg:text-5xl tracking-tight select-none">
                      <span className="block cursor-pointer text-lightprimary-text dark:text-primary-text lg:mb-2">
                        Learn everything about Rust
                      </span>
                      <span className="text-lightaccent-text dark:text-accent-text block md:ml-0">
                        <a
                          href="https://github.com/FrancescoXX/rustcrab"
                          target="_blank"
                          aria-label="Preorder the Rust programming book - opens in new tab"
                          rel="noopener noreferrer"
                        >
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 relative">
                            Open Source
                            <span className="absolute left-[0.5em] top-[1.1em] w-[80%] h-[0.2em]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1418 125"
                              >
                                <path
                                  d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                                  className="fill-[black] dark:fill-[white]"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>{" "}
                        and{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 relative">
                          Free
                          <span className="absolute left-0 top-[1.1em] w-full h-[0.6em]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1418 125"
                            >
                              <path
                                d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                                className="fill-[black] dark:fill-[white]"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </h1>
                    <p className="pt-2 my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                      Rustcrab is an open-source initiative offering curated
                      content, tools, and community support to help you learn
                      Rust — from your first{" "}
                      <code className="font-bold">fn main()</code> to advanced
                      systems programming.
                    </p>
                  </div>
                  <div className="w-full mt-5">
                    <SubstackCustom />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="books" className="min-h-dvh max-w-7xl mx-auto">
        <Books />
      </div>
      <div id="dev_tools" className="min-h-dvh max-w-7xl mx-auto">
        <DevToolsSection />
      </div>
      <div id="lessons" className="min-h-dvh max-w-7xl mx-auto">
        <LessonSection />
      </div>
      <div id="dsas" className="min-h-dvh max-w-7xl mx-auto">
        <DSAToolSection />
      </div>
      <div id="projects" className="min-h-dvh max-w-7xl mx-auto">
        <ProjectsSection />
      </div>
    </main>
  );
}
