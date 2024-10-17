"use client";

import React, { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { books } from "@/data/books";
import Card from "@/components/Card";

export default function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.description.toLowerCase().includes(term),
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-background bg-opacity-5 mb-24">
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl font-semibold text-center text-foreground mt-8 uppercase">
          BOOKS TO LEARN <span className="bg-gradient-to-r from-[#F5742E]/90 to-[#D93A29] bg-clip-text text-transparent">RUST</span>
        </h1>

        <div className="mb-8 mt-16 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-foreground/20 bg-transparent dark:bg-gray-800 text-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary/80"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 w-full gap-5">
          {filteredBooks.map((book, index) => (
            <Card item={book} key={index} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-foreground/60 mt-8">
            No Books found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
