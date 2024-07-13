import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import GitHubStars from '../components/GitHubStars';
import SubstackEmbed from '../components/SubstackEmbed';
import DevToolsSection from '@/components/DevToolsSection';

const REPO_URL = "https://github.com/FrancescoXX/rustcrab";
const REPO_NAME = "Rustcrab";
const IMAGE_SRC = "/rust_lgo_720.png";
const ALT_TEXT = "Rust Logo";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white flex flex-col">
      <Header />
      <div className="border-t-4 border-rust-orange"></div> {/* Orange line */}
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
        <br />
        <h1 className="text-4xl font-bold flex items-center space-x-2">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" aria-label={REPO_NAME}>
            {REPO_NAME}
          </a>
          <Image src={IMAGE_SRC} alt={ALT_TEXT} width={50} height={50} onError={(e) => e.target.style.display='none'} />
        </h1>
        <p className="text-xl">The non-crap resource for Rust Developers.</p>
        <GitHubStars repo="FrancescoXX/rustcrab" />
        <br />
        <br />
        <p className="text-xl">🦀 An Open source project with everything you need to learn about Rust 🦀</p>
        <br />
        <p className="text-xl">Subscribe to get the latest updates</p>
        <SubstackEmbed /> {/* Embedding Substack iframe */}
        <DevToolsSection />
      </main>
      <Footer />
    </div>
  );
}
