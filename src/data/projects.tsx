"use client";
import { Project } from "../types/page";

export const projects: Project[] = [
  {
    id: "1",
    title: "Task Management App",
    description:
      "A task management application that helps users organize their work with features like task categorization, deadlines, priority levels, and team collaboration.",
    image: "/pngtree-task-management.jpg",
    tags: [
      "React",
      "TypeScript",
      "NextJS",
      "ShadCN UI",
      "Tailwind CSS",
      "Lucide React",
      "Responsive Design",
      "Task Management",
    ],
    link: "https://avan-tasks.vercel.app",
    github: "https://github.com/Avan-Kel/Avan-Tasks.git",
  },
  {
    id: "2",
    title: "Weather Forecast App",
    description:
      "A weather application that provides real-time forecasts. Features include location-based weather and animated visualizations.",
    image: "/weather-background.jpg",
    tags: [
      "React",
      "Next.js", 
      "TypeScript",
      "Tailwind CSS", 
      "OpenWeather API",
      "Responsive Design",
      "Data Visualization",
      "Geolocation",
      "Weather Forecast",
    ],
    link: "https://avan-portfolio-weather-app-promises-projects-3ed1ac1b.vercel.app/",
    github: "https://github.com/Avan-Kel/Avan-PortfolioWeatherApp.git",
  },
 {
  id: "3",
  title: "YouTube Clone Dashboard",
  description:
    "A responsive YouTube-style dashboard that mimics the UI and user experience of the original platform. Includes a custom navigation bar, embedded video sections, layout toggles, and subscription categorization.",
  image: "/youtube-background.jpg",
  tags: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Clone",
    "Video Embeds",
    "Component Design"
  ],
  link: "https://avan-yt-promises-projects-3ed1ac1b.vercel.app",
  github: "https://github.com/Avan-Kel/Avan-YT.git"
},
  {
  id: "4",
  title: "Crypto Currency App",
  description:
    "A responsive cryptocurrency dashboard that fetches live market data using the CoinGecko API. Features include dynamic charts, real-time price tracking, coin search, and interactive UI components for visualizing market trends.",
  image: "/crypto-background.jpg",
  tags: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "CoinGecko API",
    "Recharts",
    "Responsive Design",
    "Crypto Dashboard"
  ],
  link: "https://avan-crypto.vercel.app",
  github: "https://github.com/Avan-Kel/Avan-Crypto.git"
}
];
