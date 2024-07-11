import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white flex flex-col">
      <Header />
      <div className="border-t-4 border-orange-500"></div> {/* Orange line */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">
          <a href="https://github.com/FrancescoXX/rustcrab" target="_blank" rel="noopener noreferrer">
            Rustcrab 🦀
          </a>
        </h1>
        <p className="text-xl mt-2">
          The repo for Rust developers.
        </p>
      </main>
      <Footer />
    </div>
  );
}