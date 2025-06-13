"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

interface NavbarProps {
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gap-4 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 md:px-6 flex justify-between items-center">
        <div className="flex " onClick={() => handleSectionClick("home")}>
          <Image
            src="/promise-profile-picture.png"
            alt="Profile picture"
            width={500}
            height={300}
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <div className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mt-[5px]">
            E.Promise
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <div className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 capitalize transition-colors py-2"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
