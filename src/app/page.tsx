"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Books from '../components/BooksSection';
import DevToolsSection from '../components/DevToolsSection';
import ProjectsSection from '../components/ProjectsSection';
import DSAToolSection from '@/components/DSASection';
import SubstackCustom from '../components/SubstackCustom';
import CookieConsent from '../components/CookieConsent';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyMessage('Copied!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const shareOnTwitter = () => {
    const tweetText = "Check this awesome project: ";
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`, '_blank');
    closeModal();
  };
  

  const renderSection = () => {
    switch (currentSection) {
      case 'books':
        return <Books />;
      case 'dev tools':
        return <DevToolsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'dsas':
        return <DSAToolSection />;
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-6 p-4">
            <Image
              src="/rust_lgo_720.png"
              alt="Rust Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h1 className="text-5xl font-bold flex items-center space-x-2">
              <a
                href="https://github.com/FrancescoXX/rustcrab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"
              >
                Rustcrab
              </a>
            </h1>
            <br />
            <p className="text-2xl md:text-3xl lg:text-4xl text-current">
              An open-source project with everything you need to learn about Rust
            </p>
            <br />
            <div className="w-full max-w-md">
              <SubstackCustom />
            </div>
            <br />
            <div className="flex space-x-4">
              <button
                onClick={handleCopy}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Copy URL
              </button>
              <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Share on Twitter
              </button>
            </div>
            {copyMessage && <p className="text-green-500">{copyMessage}</p>}
          </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white flex flex-col">
      <Header setSection={setCurrentSection} />
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
        {renderSection()}
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-600 p-6 rounded shadow-lg max-w-md w-full">
            <h1 className='text-center dark:text-white font-bold text-2xl'>Preview Card</h1>
            <h2 className="text-xl font-bold text-center">Share on Twitter</h2>
            <div className="flex items-start mt-4 border p-4 rounded bg-gray-100 dark:bg-gray-800">
              <img
                src="https://github.com/FrancescoXX.png" 
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="font-bold">Francesco Ciulla</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Check out this awesome project: {window.location.href}
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={shareOnTwitter}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Share
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-white dark:text-black dark:hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <CookieConsent />
      <Footer />
    </div>
  );
}
