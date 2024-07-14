"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import GitHubStars from '../components/GitHubStars';
import SubstackEmbed from '../components/SubstackEmbed';
import CookieConsentBanner from '../components/CookieConsent';
import Books from '../components/BooksSection';
import DevToolsSection from '../components/DevToolsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'books':
        return <Books />;
      case 'dev tools':
        return <DevToolsSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-4 p-4">
            <br />
            <h1 className="text-4xl font-bold flex items-center space-x-2">
              <a
                href="https://github.com/FrancescoXX/rustcrab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rustcrab
              </a>
              <Image
                src="/rust_lgo_720.png"
                alt="Rust Logo"
                width={50}
                height={50}
              />
            </h1>
            {/* <p className="text-xl">The non-crap resource for Rust Developers.</p> */}
            <GitHubStars repo="FrancescoXX/rustcrab" />
            <br />
            <br />
            <p className="text-xl md:text-2xl lg:text-3xl">
              🦀 An Open source project with everything you need to learn about Rust 🦀
            </p>
            <br />
            <p className="text-lg md:text-xl">Subscribe to get the latest updates</p>
            <div className="w-full max-w-md">
              <SubstackEmbed />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white flex flex-col">
      <Header setSection={setCurrentSection} />
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
        {renderSection()}
      </main>
      <CookieConsentBanner />
      <Footer />
    </div>
  );
}
