export interface Tool {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export const tools: Array<Tool> = [
  {
    name: "Rspack",
    description:
      "A fast Rust-based web bundler that aims to be a drop-in replacement for webpack.",
    icon: "/logos/rspack.svg",
    link: "https://www.rspack.dev/",
  },
  {
    name: "Zed IDE",
    description:
      "A high-performance, multiplayer code editor, built with Rust.",
    icon: "/logos/zed.png",
    link: "https://zed.dev/",
  },
  {
    name: "Helix Editor",
    description:
      "A post-modern modal text editor. lightweight, and keyboard-centric. Built with Rust.",
    icon: "/logos/helix.svg",
    link: "https://helix-editor.com/",
  },
  {
    name: "Actix Web",
    description:
      "A powerful, pragmatic, and extremely fast web framework for Rust.",
    icon: "/logos/actix.png",
    link: "https://actix.rs/",
  },
  {
    name: "Tokio",
    description:
      "A runtime for writing reliable asynchronous applications with Rust.",
    icon: "/logos/tokio.png",
    link: "https://tokio.rs/",
  },
];
