"use client";

import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, } from 'react-icons/fa6';


const data = [
  {
    href: 'https://x.com/FrancescoCiull4',
    icon: FaXTwitter,
  },
  {
    href: 'https://www.linkedin.com/in/francesco-ciulla-roma/',
    icon: FaLinkedin,
  },
  {
    href: 'https://www.youtube.com/@francescociulla',
    icon: FaYoutube,
  },
  {
    href: 'https://discord.gg/4c-784142072763383858',
    icon: FaDiscord,
  },
  {
    href: 'https://www.instagram.com/francescociull4/',
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 p-4">

      {data.map((data,index) => (
        <Link href={data.href} key={index} target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        {<data.icon/>}
      </Link>
))}
    </footer>
  );
}
