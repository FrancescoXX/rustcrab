export interface Projects {
  alt: string;
  icon: string;
  darkModeIcon?: string;
  link: string;
  size?: number;
}

export const projects: Array<Projects> = [
  {
    alt: "AWS",
    icon: "/logos/aws.png",
    darkModeIcon: "/logos/aws-dark.png",
    link: "https://aws.amazon.com/",
  },
  {
    alt: "Google",
    icon: "/logos/google.png",
    link: "https://google.com/",
  },
  {
    alt: "Meta",
    icon: "/logos/meta.png",
    link: "https://www.meta.com/",
  },
  {
    alt: "Microsoft",
    icon: "/logos/microsoft.png",
    link: "https://microsoft.com/",
  },
  {
    alt: "Zed IDE",
    icon: "/logos/zed.png",
    link: "https://zed.dev/",
  },
];
