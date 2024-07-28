"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { books } from "@/data/books";
import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";

export default function Books() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Books to Learn Rust
        </h1>

        <SearchInput data={books} globalFunc={setFilteredBooks} searchBy={'title,description'}  />


        <div className="grid md:grid-cols-2 w-full gap-5">
          {filteredBooks.map((book, index) => (
            <Card item={book} key={index} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No Books found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
