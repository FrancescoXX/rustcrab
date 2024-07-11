import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center text-black dark:text-white">
      <Header />
      <main className="text-center">
        <h1 className="text-4xl font-bold">
          Rustcrab 🦀
        </h1>
        <p className="text-xl mt-2">
          The repo for Rust developers.
        </p>
      </main>
    </div>
  );
}
