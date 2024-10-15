"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import {

  Heart,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import SubstackEmbed from "./SubstackEmbed";
import SubstackCustom from "./SubstackCustom";
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-background text-foreground overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-50" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="bg-foreground/5 backdrop-blur-xl rounded-3xl border-2 border-foreground/5 p-8 md:p-12">
      <div className="flex flex-wrap justify-around items-center gap-12">

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent">
            Connect With Us
          </h3>
          <div className="flex space-x-1">
            <Link
              href="https://x.com/FrancescoCiull4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaXTwitter className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/francesco-ciulla-roma/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaLinkedin className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>

            <Link
              href="https://www.youtube.com/@francescociulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaYoutube className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>

            <Link
              href="https://discord.gg/4c-784142072763383858"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaDiscord className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>

            <Link
              href="https://www.instagram.com/francescociull4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaInstagram className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>

            <Link
              href="https://www.threads.net/@francescociull4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/50 rounded-full transition duration-300 hover:scale-110 group"
            >
              <FaThreads className="text-foreground/70 group-hover:text-primary" size={28} />
            </Link>
          </div>
        </div>

        {/* Sponsor Button */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent mb-4">
            Support Our Project
          </h3>
          <Link href="#">
            <Button
              variant="outline"
              className="h-12 bg-transparent text-accent-foreground rounded-full hover:opacity-90 transition duration-300 shadow-lg transform flex items-center gap-2 px-6 py-3"
            >
              <Heart /> Sponsor Us
            </Button>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent">
            Stay Updated
          </h3>
          <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-72 h-12 px-6 py-4 bg-background/50 border border-foreground/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition duration-300"
                required
              />
              <Button
                variant="default"
                className="absolute h-10 right-1 top-1 bottom-1 px-6 bg-gradient-to-r from-[#F5742E] to-[#D93A29] text-white rounded-full hover:opacity-90 transition duration-300 flex items-center justify-center"
              >
                Subscribe
              </Button>
            </div>
          </form>
          {/* <SubstackCustom  /> */}
        </div>
      </div>
    </div>

    {/* Curved divider */}
    <div className="w-full h-px bg-gradient-to-r from-background via-foreground to-background my-12 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full border-4 border-foreground/20 flex items-center justify-center">
        <Image src="/icons/rustlogo.webp" alt="Logo" width={48} height={48} />
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center text-sm text-foreground/70 mb-8">
      <p>
        &copy; {new Date().getFullYear()} Rustcrab. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
