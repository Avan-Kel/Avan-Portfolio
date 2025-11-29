"use client";

import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

const timelineOverview = [
  {
    year: "2002",
    title: "Born in Lagos, Nigeria",
    location: "Lagos",
    description:
      "Where the journey officially began.",
  },
  {
    year: "2018",
    title: "Started Exploring Technology",
    location: "Lagos",
    description:
      "Got exposed to programming and digital creativity.",
  },
  {
    year: "2023",
    title: "Joined Digital Solutions Bootcamp",
    location: "Online",
    description:
      "Completed a structured bootcamp and strengthened my foundations.",
  },
];

const TimelineOverview = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Quick Timeline Overview
      </h2>

      <div className="space-y-6">
        {timelineOverview.map((event, index) => (
          <div key={index} className="border-l border-gray-300 dark:border-gray-700 pl-4">
            <span className="text-blue-500 font-semibold">{event.year}</span>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
              {event.title}
            </h3>

            <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
              <MapPin size={14} /> {event.location}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {event.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/timeline"
        className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-semibold"
      >
        View Full Timeline →
      </Link>
    </section>
  );
};

export default TimelineOverview;
