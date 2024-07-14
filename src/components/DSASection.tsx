"use client";

import React, { useState } from "react";
import { dsas, DSA } from "@/data/dsa";
import Link from "next/link";

const DSAToolSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<DSA | null>(null);
  const [copySuccess, setCopySuccess] = useState("");

  const handleOpenModal = (tool: DSA) => {
    setSelectedTool(tool);
  };

  const handleCloseModal = () => {
    setSelectedTool(null);
    setCopySuccess("");
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
    <section className="py-16 dark:bg-gray-800 bg-gray-200 rounded-md my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-current">
          Data Structures in Rust
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dsas.slice(0, 3).map((dsa, index) => (
            <div
              key={index}
              className="dark:bg-gray-900 bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3 text-current">
                  {dsa.data_structure}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 mb-4">
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
        <div className="mt-12 text-center">
          <Link href="/dsas">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Show More
            </button>
          </Link>
        </div>
      </div>

      {selectedTool && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-8">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg z-50 max-w-full sm:max-w-3xl w-full">
            <h3 className="text-2xl font-semibold mb-4 text-current">
              {selectedTool.data_structure}
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-96">
              <code>{selectedTool.snippet}</code>
            </pre>
            <button
              onClick={handleCopyCode}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Copy Code
            </button>
            {copySuccess && (
              <p className="mt-2 text-sm text-green-500">{copySuccess}</p>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DSAToolSection;
