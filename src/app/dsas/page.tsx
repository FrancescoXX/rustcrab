"use client";

import React, { useState } from "react";
import { dsas, DSA } from "@/data/dsa"; // Update the path to your data
import { Search } from "lucide-react";
import { FaCopy } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Header from "@/components/Header";

const DSAPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDSAs, setFilteredDSAs] = useState(dsas);
  const [selectedTool, setSelectedTool] = useState<DSA | null>(null);
  const [copySuccess, setCopySuccess] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = dsas.filter(
      (dsa) =>
        dsa.data_structure.toLowerCase().includes(term) ||
        dsa.description.toLowerCase().includes(term),
    );
    setFilteredDSAs(filtered);
  };

  const handleOpenModal = (dsa: DSA) => {
    setSelectedTool(dsa);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
    setCopySuccess(""); // Reset the copy success state on close
  };

  const handleCopyCode = async () => {
    if (selectedTool) {
      try {
        await navigator.clipboard.writeText(selectedTool.snippet);
        setCopySuccess("Code copied!");
      } catch (err) {
        setCopySuccess("Failed to copy!");
      }
    }
  };

  return (

    <><Header /><div className="absolute w-[262px] h-[262px] bg-gradient-to-r from-[#f5742e] to-[#d93a29] rounded-full blur-[600px] -top-64 left-1/2 transform -translate-x-1/2"></div><div className="min-h-screen bg-backgroun bg-opacity-5 mb-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-semibold text-center text-foreground mt-8 uppercase">
          Data sturctures in <span className="bg-gradient-to-r from-[#F5742E]/90 to-[#D93A29] bg-clip-text text-transparent">RUST</span>
        </h1>

        <div className="mb-8 mt-16 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search data structures..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-14 rounded-full border border-foreground/40 bg-transparent text-foreground/80 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-muted-foreground/80" />
            <Search
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground/80"
              size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDSAs.map((dsa, index) => (
            <div
              key={index}
              className="bg-foreground/5 border-2 border-foreground/10 p-6 rounded-3xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {dsa.data_structure}
                </h3>
                <p className="text-accent-foreground/70 mb-4">
                  {dsa.description}
                </p>
                <button
                  onClick={() => handleOpenModal(dsa)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  View Code
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDSAs.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No data structures found matching your search.
          </p>
        )}
      </div>

      {selectedTool && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-8">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg z-50 max-w-full sm:max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4 ml-3 mr-1">
              <h3 className="text-2xl font-semibold dark:text-white  text-current">
                {selectedTool.data_structure}
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center justify-center"
                >
                  <FaCopy className="text-slate-800  dark:text-slate-300 text-2xl" />
                </button>
                <button onClick={handleCloseModal} className="">
                  <IoCloseSharp className="text-3xl text-red-500" />
                </button>
              </div>
            </div>
            <pre className="bg-gray-100 dark:bg-slate-900  rounded-md overflow-auto max-h-96">
              <code className="text-left ">
                <SyntaxHighlighter
                  language="Rust"
                  style={nightOwl}
                  className="rounded-lg"
                >
                  {selectedTool.snippet}
                </SyntaxHighlighter>
              </code>
            </pre>
            {copySuccess && (
              <p className="mt-2 text-sm text-green-500">{copySuccess}</p>
            )}
          </div>
        </div>
      )}
    </div></>
  );
};

export default DSAPage;
