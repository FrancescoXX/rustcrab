"use client";

import React, { useState } from "react";
import { dsas, DSA } from "@/data/dsa"; // Update the path to your data
import { Search } from "lucide-react";

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
        dsa.description.toLowerCase().includes(term)
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
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg z-50 max-w-full sm:max-w-3xl w-full text-center dark:text-white">
            <h3 className="text-2xl font-semibold mb-4 text-current">
              {selectedTool.data_structure}
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-96 dark:text-white">
              <code>{selectedTool.snippet}</code>
            </pre>

            <button
              onClick={handleCopyCode}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Copy Code
            </button>
            <button
              onClick={handleCloseModal}
              className="mt-4 ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Close
            </button>
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
