"use client";

import React from "react";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Front End Engineering Encyclopedia Documentation",
      date: "Nov 15, 2025",
      author: "KC",
      category: "Web Development",
      image: "/front-end.jpg",
      description:
        "A deep dive into the fundamentals and important highlights in Front End Engineering.",
      slug: "front-end-pedia",
    },
    {
      title: "Back End Encyclopedia Documentation",
      date: "Nov 15, 2025",
      author: "KC",
      category: "Web Development",
      image: "/back-end.jpg",
      description:
        "Everything you need to understand the foundations and workflow of Back End Engineering.",
      slug: "back-end-pedia",
    },
    {
      title: "Full Stack Engineering Encyclopedia Documentation",
      date: "Nov 20, 2025",
      author: "KC",
      category: "Web Development",
      image: "/fullstack.webp",
      description:
        "A complete breakdown of Full Stack Engineering concepts, tools, and architecture.",
      slug: "full-stack-pedia",
    },
    {
      title: "Cyber Security Encyclopedia Documentation",
      date: "Nov 15, 2025",
      author: "KC",
      category: "Web Security",
      image: "/cyber.webp",
      description: "Coming Soon...",
      slug: "cyber-pedia",
    },
    {
      title: "Dev-Ops Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Web Developement",
      image: "/dev-ops.jpg",
      description: "Coming Soon...",
      slug: "dev-ops-pedia",
    },
    {
      title: "Mobile Engineering Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Web Developement",
      image: "/mobile.png",
      description: "Coming Soon...",
      slug: "mobile-pedia",
    },
    {
      title: "Software Engineering Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Web Developement",
      image: "/software.jpg",
      description: "Coming Soon...",
      slug: "software-pedia",
    },
    {
      title: "Hardware Engineering Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Electronics Developement",
      image: "/hardware.jpg",
      description: "Coming Soon...",
      slug: "hardware-pedia",
    },
    {
      title: "Mechanical Engineering Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Industrial Developement",
      image: "/mechanic.jpg",
      description: "Coming Soon...",
      slug: "mechanic-pedia",
    },
    {
      title: "Aero-Space ENgineering Encyclopeida Documentation",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Industrial Developement",
      image: "/space.jpg",
      description: "Coming Soon...",
      slug: "Aero-space-pedia",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold h-[60px] bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Encyclopedia Blog Documentation
          </h2>

          <div className="w-[300px] h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Dive into deep-dive engineering guides, breakdowns, and documented
            knowledge.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="overflow-hidden h-52 relative w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-medium inline-flex items-center gap-1">
                    <Tag size={16} /> {post.category}
                  </span>

                  <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
