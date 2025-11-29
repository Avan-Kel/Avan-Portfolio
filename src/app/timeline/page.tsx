"use client";

import React from "react";
import { Calendar, MapPin, Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Masonry from "@/components/Masonry/Masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1040/200/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1090/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1050/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  // ... more items
];

const Timeline = () => {
  const events = [
    {
      year: "2002",
      title: "Born in Lagos, Nigeria",
      location: "Lagos",
      description:
        "My journey began in one of Africa’s most energetic and thriving cities.",
      highlight: true,
    },
    {
      year: "2018",
      title: "Started Exploring Technology",
      location: "Lagos",
      description:
        "Got my first exposure to programming, computers, and digital creativity.",
    },
    {
      year: "2021",
      title: "First Real Projects & Web Experiments",
      location: "Remote",
      description:
        "Began experimenting with real-world web projects and online tools.",
    },
    {
      year: "2023",
      title: "Joined Bootcamp — Digital Solutions LLC",
      location: "Online",
      description:
        "Completed a professional bootcamp and solidified my foundations in development.",
    },
    {
      year: "2024",
      title: "Mastered Front-End Development",
      location: "Remote",
      description:
        "Earned a front-end certification and started building premium Next.js apps.",
    },
    {
      year: "2025",
      title: "Building Complex, Premium Apps",
      location: "Nigeria",
      description:
        "Started working on large-scale Next.js apps — portfolios, dashboards, weather apps, and more.",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            My Timeline
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A visual journey of major milestones that shaped who I am —
            personally and professionally.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
          {events.map((event, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Icon Bubble */}
              <div className="absolute -left-4 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white shadow">
                {event.highlight ? <Star size={18} /> : <Calendar size={18} />}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300">
                <span className="text-blue-500 font-semibold tracking-wide">
                  {event.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
                  {event.title}
                </h3>

                <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-1">
                  <MapPin size={16} /> {event.location}
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 ml-[50px]"> 
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
      </div>
    </section>
  );
};

export default Timeline;
