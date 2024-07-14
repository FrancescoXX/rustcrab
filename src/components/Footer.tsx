import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 p-4 bg-white dark:bg-black">
      <a
        href="https://x.com/FrancescoCiull4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-black dark:text-white"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/francesco-ciulla-roma/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-black dark:text-white"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.youtube.com/@francescociulla"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-black dark:text-white"
      >
        <FaYoutube />
      </a>
      <a
        href="https://discord.gg/4c-784142072763383858"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-black dark:text-white"
      >
        <FaDiscord />
      </a>
      <a
        href="https://www.instagram.com/francescociull4/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-black dark:text-white"
      >
        <FaInstagram />
      </a>
    </footer>
  );
}
