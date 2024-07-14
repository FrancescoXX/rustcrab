import Link from "next/link";
import { books } from "@/data/books";
import Card from "./Card";

export default function BooksSection() {

  return (
    <section className="py-16 pt-10  rounded-md my-4">
      <div className="mx-auto px-4 container">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Books to Learn Rust
        </h2>
        <div className="grid md:grid-cols-2 w-full gap-5">
          {books.slice(0, 3).map((book, index) => <Card item={book} key={index}  />)} 
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/books">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            See More Books
          </button>
        </Link>
      </div>
    </section>
  );
}
