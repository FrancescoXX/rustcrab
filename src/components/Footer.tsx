import React from "react";
import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { Heart, Gift } from "lucide-react";
import Image from "next/image";
import SubstackCustom from "./SubstackCustom";
import SocialLink from "@/components/ui/socialLink";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-muted-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start ">
              <SocialLink
                href="https://x.com/FrancescoCiull4"
                icon={<FaXTwitter className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/in/francesco-ciulla-roma/"
                icon={<FaLinkedin className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="LinkedIn"
              />
              <SocialLink
                href="https://www.youtube.com/@francescociulla"
                icon={<FaYoutube className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="YouTube"
              />
              <SocialLink
                href="https://discord.com/invite/cRjhjFRRre"
                icon={<FaDiscord className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="Discord"
              />
              <SocialLink
                href="https://www.instagram.com/francescociull4/"
                icon={<FaInstagram className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="Instagram"
              />
              <SocialLink
                href="https://www.threads.net/@francescociull4"
                icon={<FaThreads className="text-muted-foreground group-hover:text-primary" size={28} />}
                ariaLabel="Threads"
              />
            </div>
          </div>

          {/* Support Button */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent">
              Support Our Project
            </h3>
            <a
              href="https://github.com/sponsors/FrancescoXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-accent-foreground rounded-full hover:opacity-90 transition duration-300 relative overflow-hidden"
            >
              <Gift className="mr-2" /> Sponsor Us
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shimmer hover:animate-none"></span>
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#F5742E]/80 via-[#FAD141]/80 to-[#D93A29]/80 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <SubstackCustom />
          </div>
        </div>

        {/* Curved divider */}
        <div className="my-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full border-4 border-gray-800 flex items-center justify-center">
            <Image
              src="/icons/rustlogo.webp"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>&copy; {new Date().getFullYear()} Rustcrab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;