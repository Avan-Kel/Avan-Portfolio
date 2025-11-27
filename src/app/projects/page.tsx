"use client";
import React from "react";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import LetterGlitch from "@/components/LetterGlitch";
import Navbar from "@/components/navbar";

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 container mx-auto px-4 md:px-6 mt-[70px]">
        
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          All Occupational Projects
        </span>
      </h2>
      <div className="w-40 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

      <section></section>
      <section
        id="projects"
        className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
      >
        {/* 🔥 Background Glitch Effect */}
        <div className="absolute inset-0 h-full w-full">
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="relative z-10 bg-white dark:bg-black p-4 rounded-lg inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Software Engineering Projects
                </span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
            </div>
          </div>

          <div className="text-left mb-16">
            <div className="relative z-10 bg-white dark:bg-black p-4 rounded-lg inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  - Full Stack Engineering
                </span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      >
                        Code <Github size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left mb-16">
          <div className="relative z-10 bg-white dark:bg-black p-4 rounded-lg inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                - DevOps
              </span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          </div>
        </div>

        <div className="text-left mb-16">
          <div className="relative z-10 bg-white dark:bg-black p-4 rounded-lg inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                - Cyber Security
              </span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
