"use client";

import React from "react";
import { Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/navbar";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building a Premium Portfolio with Next.js",
      date: "Nov 20, 2025",
      author: "KC",
      category: "Web Development",
      image: "/portfolio-blog.jpg",
      description:
        "A deep dive into how I designed and built a premium, responsive, animated developer portfolio using Next.js, Tailwind CSS, and ShadCN UI.",
      slug: "building-premium-portfolio-nextjs",
    },
    {
      title: "How I Designed a Premium Weather App UI",
      date: "Nov 15, 2025",
      author: "KC",
      category: "UI/UX Design",
      image: "/weather-ui.jpg",
      description:
        "The full breakdown of my creative process behind my colorful, animated weather application — from components to animations.",
      slug: "designing-premium-weather-app-ui",
    },
    {
      title: "Mastering API Integration in Next.js",
      date: "Nov 10, 2025",
      author: "KC",
      category: "Next.js",
      image: "/api-integration.jpg",
      description:
        "Everything you need to know about connecting external APIs to your Next.js frontend — including real examples using CoinGecko and OpenWeatherMap.",
      slug: "mastering-api-integration-nextjs",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Blog
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Articles, tutorials, insights, and everything I&#39;m working on. Dive
            in and explore my thoughts, builds, and breakdowns.
          </p>
        </div>

        {/* --- BLOG POSTS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/routes/blog/${post.slug}`}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              /> */}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>

                <span className="inline-flex items-center gap-1 text-blue-500 font-medium">
                  <Tag size={16} /> {post.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
