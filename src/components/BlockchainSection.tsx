import Link from "next/link";
import { blockchains } from "@/data/blockchains";
import Card from "./Card";

export default function BlockchainsSection() {
  return (
    <section className="py-16 w-full rounded-md my-4">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-current">
      Blockchains that use Rust
      </h2>
        <div className="grid md:grid-cols-2 w-full gap-5">
          {blockchains.slice(0, 3).map((blockchain, index) => (
            <Card item={blockchain} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/blockchain">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            See More Blockchains
          </button>
        </Link>
      </div>
    </section>
  );
}
