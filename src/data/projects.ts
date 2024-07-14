export interface Projects {
  name: string;
  description: string;
  alt: string;
  icon: string;
  darkModeIcon?: string;
  link: string;
  size?: number;
}

export const projects: Array<Projects> = [
  {
    name: "Tauri",
    description: "Build smaller, faster, secure apps with a web frontend.",
    alt: "Tauri",
    icon: "/logos/tauri-app.png",
    darkModeIcon: "/logos/tauri-app.png",
    link: "https://tauri.app/",
  },
  // {
  //   alt: "Google",
  //   icon: "/logos/google.png",
  //   link: "https://google.com/",
  // },
  // {
  //   alt: "Meta",
  //   icon: "/logos/meta.png",
  //   link: "https://www.meta.com/",
  // },
  // {
  //   alt: "Microsoft",
  //   icon: "/logos/microsoft.png",
  //   link: "https://microsoft.com/",
  // },
  // {
  //   alt: "Zed IDE",
  //   icon: "/logos/zed.png",
  //   link: "https://zed.dev/",
  // },
];
