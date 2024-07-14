"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import GitHubStars from '../components/GitHubStars';
import SubstackEmbed from '../components/SubstackEmbed';
import SubstackCustom from '../components/SubstackCustom';
import CookieConsentBanner from '../components/CookieConsent';
import Books from '../components/BooksSection';
import DevToolsSection from '../components/DevToolsSection';
import ProjectsSection from '../components/ProjectsSection';
import DSAToolSection from '@/components/DSASection';

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
      case 'dsas':
        return <DSAToolSection/>
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center space-y-6 p-4">
            <br />
            <h1 className="text-5xl font-bold flex items-center space-x-2">
              <a
                href="https://github.com/FrancescoXX/rustcrab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-brown-500 to-orange-700"
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
            <br />
            <p className="text-2xl md:text-3xl lg:text-4xl text-current">
              An Open source project with everything you need to learn about Rust
            </p>
            <br />
            <p className="text-lg md:text-xl text-current">Subscribe to get the latest updates</p>
            <div className="w-full max-w-md">
              <SubstackEmbed />
            </div>
            <div className="w-full max-w-md">
              <SubstackCustom />
            </div>
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
      <CookieConsentBanner />
      <Footer />
    </div>
  );
}
