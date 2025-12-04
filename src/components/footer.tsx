"use client";

import React from "react";
import { socials } from "../data/socials";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-4 md:mb-0">
            E.Promise
          </div>

          <div className="flex space-x-6">
            {socials.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center relative">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} E.Promise. All rights reserved.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            Made with <FaHeart size={14} className="mx-1 text-red-500" /> by
            E.Promise
          </p>

          {/* Stealthy Admin Button */}
          <button
            onClick={() => router.push("/login")}
            className="
    absolute top-2 left-2 
    text-gray-400 dark:text-gray-600 
    text-xs opacity-70 
    hover:opacity-100 
    hover:text-red-500 
    hover:bg-gray-900 dark:hover:bg-gray-200 
    transition-all 
    px-2 py-1 
    rounded
  "
            aria-label="Admin Login"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
