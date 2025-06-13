"use client";
import React from "react";
import { skills } from "../data/skills";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { ChevronRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I&#39;m a budding Front-End Developer with a strong passion for
              building clean, responsive, and interactive web experiences. While
              I&#39;m still early in my career, I&#39;ve already worked on a
              variety of projects using modern tools like Next.js, Tailwind CSS,
              and ShadCN UI. I enjoy turning ideas into polished, user-friendly
              interfaces and constantly push myself to learn new technologies,
              refine my skills, and build meaningful digital experiences. This
              portfolio is a reflection of my journey so far — and it&#39;s just
              the beginning.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in React ecosystem and modern JavaScript, with a
              focus on building performant and accessible user interfaces.
              I&#39;m also experienced in backend development with Node.js and
              database design.
            </p>

            {/* Experience */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Experience
              </h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="transition-transform hover:translate-x-1"
                  >
                    <div className="flex items-start">
                      <ChevronRight
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <div className="ml-2">
                        <div className="font-medium text-gray-800 dark:text-white">
                          {exp.position}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {exp.company} | {exp.duration}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="transition-transform hover:translate-x-1"
                  >
                    <div className="flex items-start">
                      <ChevronRight
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <div className="ml-2">
                        <div className="font-medium text-gray-800 dark:text-white">
                          {edu.degree}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {edu.institution} | {edu.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              {skills.map((skill) => {
                // const Icon = require('lucide-react')[skill.icon];
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 mr-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        {/* <Icon size={18} /> */}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: "300ms",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
