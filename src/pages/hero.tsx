
"use client"
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (button) {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
      setTimeout(() => {
        button.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-30 dark:opacity-20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400 opacity-30 dark:opacity-20 rounded-full filter blur-3xl" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">

        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 p-[12px] bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Eguh Promise
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Full-Stack Developer & UI/UX Designer creating beautiful and functional web experiences.
        </p>
        <button
          ref={buttonRef}
          onClick={onExploreClick}
          className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
          Explore My Work
          <ArrowDown className="ml-2 group-hover:animate-bounce" size={18} />
        </button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;