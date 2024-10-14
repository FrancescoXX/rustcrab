"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Rspack",
    image: "/logos/rspack.png",
    href: "https://www.rspack.dev/",
    description:
      "A fast Rust-Based web bundler that aims to ve a drop-in replacement for webpack.",
  },
  {
    title: "Zed IDE",
    image: "/logos/zed.png",
    href: "https://zed.dev/",
    description:
      "A high-performance, multiplayer code editor, built with Rust.",
  },
  {
    title: "Helix Editor",
    image: "/logos/helixs.png",
    href: "https://helix-editor.com/",
    description:
      "A post-modern modal text editor lightweight and keyoard-centric. Built with Rust.",
  },
  {
    title: "Actix Web",
    image: "/logos/actixweb.png",
    href: "https://actix.rs/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tokio",
    image: "/logos/tokio.png",
    href: "https://tokio.rs/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="font-normal">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#books" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Books
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/#lessons">Lessons</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/lessons"
                  >
                    <Image
                      src="/icons/rustlogo.webp"
                      alt="Rust Logo"
                      width={50}
                      height={50}
                    />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Rust Lessons
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Every Thing You Need To Know About Rust Programming
                      Language
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Block Chain">
                Learn how to build a blockchain from scratch
              </ListItem>
              <ListItem href="/docs" title="Web Devlopment">
                Learn how to build a website from scratch
              </ListItem>
              <ListItem
                href="/docs"
                title="System Programming"
              >
                Learn the fundamentals of system programming, including memory
                management and concurrency.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/#dev_tools">Dev Tools</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-5 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  image={component.image}
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#dsas" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              DSA Example
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://dly.to/vRJ9aTACP65"
            target="_blank"
            rel="noopener noreferrer"
            title="Rustdevs on daily.dev"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  image?: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, image, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors rounded-2xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {image && <Image src={image} alt={title} width={50} height={50} />}
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
