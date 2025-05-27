"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { books } from "@/data/books";
import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";

export default function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.description.toLowerCase().includes(term)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Books to Learn Rust
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <SearchInput
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="grid md:grid-cols-2 w-full gap-5">
          {filteredBooks.map((book, index) => (
            <Card key={index} item={book} index={index} />
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
