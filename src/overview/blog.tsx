"use client";

import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // <-- import Link

export default function BlogPreview() {
  const previewPosts = [
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
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Latest Encyclopedia Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A quick taste of the engineering knowledgebase.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`} // <-- use Link
              className="group rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <Link
            href="/blog" // <-- use Link
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
          >
            View all blog posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
