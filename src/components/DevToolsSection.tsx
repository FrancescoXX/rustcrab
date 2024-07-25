import Link from "next/link";

import { tools } from "@/data/tools";
import Card from "./Card";

export default function DevToolsSection() {
  return (
    <section className="py-16 w-full rounded-md my-4">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-current">
      Rust Developer Tools
      </h2>
        <div className="grid md:grid-cols-3 w-full gap-5">
          {tools.slice(0, 3).map((tool, index) => (
            <Card item={tool} key={index} />
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
