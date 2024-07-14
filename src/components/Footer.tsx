import { FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 p-4 border-t-2 bg-white dark:bg-black">
      <div className="flex justify-center space-x-6">
        <a
          href="https://x.com/FrancescoCiull4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/francesco-ciulla-roma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaLinkedin className="transition-all ease-in-out hover:fill-blue-500" />
        </a>
        <a
          href="https://www.youtube.com/@francescociulla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaYoutube className="transition-all ease-in-out hover:fill-red-500" />
        </a>
        <a
          href="https://discord.gg/4c-784142072763383858"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaDiscord className="transition-all ease-in-out hover:fill-[#5871EA]" />
        </a>
        <a
          href="https://www.instagram.com/francescociull4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaInstagram className="transition-all ease-in-out hover:fill-pink-500" />
        </a>
        <a
          href="https://www.threads.net/@francescociull4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-black dark:text-white hover:scale-125 transition-all ease-in-out"
        >
          <FaThreads />
        </a>
      </div>
      <p className="text-black dark:text-white text-xs">
        © 2024 Rustcrab. All rights reserved.
      </p>
    </footer>
  );
}
