"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { GridScan } from "@/components/ChromaGrid/GridScan";
import TorusCanvas from "@/components/TorusCanvas";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Theme-aware torus colors
  const [themeColors, setThemeColors] = useState({
    color: "#3b82f6", // blue-500
    emissive: "#2dd4bf", // teal-400
  });

  // Detect system dark mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (mq.matches) {
        setThemeColors({
          color: "#60a5fa", // blue-400 (brighter neon)
          emissive: "#14b8a6", // teal-600 (deep glow)
        });
      } else {
        setThemeColors({
          color: "#3b82f6", // blue-500
          emissive: "#2dd4bf", // teal-400
        });
      }
    };

    updateTheme();
    mq.addEventListener("change", updateTheme);
    return () => mq.removeEventListener("change", updateTheme);
  }, []);

  // Fade-in animation
  useEffect(() => {
    const fadeIn = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    };

    fadeIn(titleRef.current, 100);
    fadeIn(subtitleRef.current, 300);
    fadeIn(buttonRef.current, 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* GridScan */}
      <div className="absolute inset-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="rgba(0, 180, 255, 0.15)"
          gridScale={0.1}
          scanColor="rgba(0, 255, 180, 1)"
          scanOpacity={0.35}
          enablePost
          bloomIntensity={0.7}
          chromaticAberration={0.0015}
          noiseIntensity={0.01}
        />
      </div>

      {/* Gradient blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-30 dark:opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400 opacity-30 dark:opacity-20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl  bg-gradient-to-r from-blue-700 to-purple-700 
    bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-400 
    dark:bg-clip-text dark:text-transparent font-bold mb-6 p-[12px]"
        >
          Eguh Promise
        </h1>

      

        <p
          ref={subtitleRef}
          className="
    text-xl md:text-2xl font-black max-w-2xl mx-auto mb-10
    bg-gradient-to-r from-blue-700 to-purple-700 
    bg-clip-text text-transparent 
    dark:bg-gradient-to-r dark:from-blue-400 dark:to-green-400 
    dark:bg-clip-text dark:text-transparent
  "
        >
          Full-Stack Engineer building scalable backend systems, modern
          interfaces, and seamless experiences.
        </p>

        <button
          ref={buttonRef}
          onClick={onExploreClick}
          className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
          Explore My Work
          <ArrowDown className="ml-2 group-hover:animate-bounce" size={18} />
        </button>

        {/* Floating 3D Torus (Bottom-right) */}
        <div className="fixed bottom-1 right-8 w-20 h-40 z-80 pointer-events-none">
          <TorusCanvas
            color={themeColors.color}
            emissive={themeColors.emissive}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
