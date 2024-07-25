"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { FaCopy } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

import { dsas, DSA } from "@/data/dsa"; // Update the path to your data

const DSAPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredDSAs, setFilteredDSAs] = useState<DSA[]>(dsas);
  const [selectedTool, setSelectedTool] = useState<DSA | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();

    const filtered = dsas.filter(
      (dsa) =>
        dsa.data_structure.toLowerCase().includes(term) ||
        dsa.description.toLowerCase().includes(term)
    );
    
    setSearchTerm(term);
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Data Structures in Rust
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search data structures..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDSAs.map((dsa, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {dsa.data_structure}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
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
    </div>
  );
};

export default DSAPage;
