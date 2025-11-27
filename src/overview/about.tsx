"use client";
import React from "react";
import { skills } from "../data/skills";
import { experiences } from "../data/experience";
import { ChevronRight } from "lucide-react";

export default function AboutOverview() {
  // Show ONLY first 1–2 items as preview
  const previewExperience = experiences.slice(0, 1);
  const previewSkills = skills.slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A short overview of who I am, my journey as a developer, and the core skills I bring to the table.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* BIO + EXPERIENCE PREVIEW */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I’m a front-end developer passionate about crafting smooth,
              interactive, and visually premium user experiences using
              modern web technologies.
            </p>

            {/* Experience Preview */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Experience (Preview)
              </h4>

              {previewExperience.map((exp, i) => (
                <div
                  key={i}
                  className="flex items-start mb-4 transition-transform hover:translate-x-1"
                >
                  <ChevronRight
                    className="text-blue-500 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <div className="ml-2">
                    <div className="font-medium text-gray-800 dark:text-white">
                      {exp.position}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {exp.company} • {exp.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/routes/about"
              className="inline-block mt-4 text-blue-500 hover:underline font-medium"
            >
              View full about page →
            </a>
          </div>

          {/* SKILLS PREVIEW */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Skills Snapshot
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {previewSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 
                      text-blue-500 dark:text-blue-400 mr-3 
                      group-hover:bg-blue-500 group-hover:text-white transition-colors"></div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-block mt-4 text-blue-500 hover:underline font-medium"
            >
              View all skills →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
