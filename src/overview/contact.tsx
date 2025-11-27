"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactOverview() {
  const socials = [
    { name: "Github", href: "https://github.com/Avan-Kel", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/promise-eguh-71445b252/",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://x.com/EguhPromis30435/", icon: Twitter },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether it’s a collaboration, freelance project, or a simple hello —
            I’m always open to meaningful conversations.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* Email */}
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                <Mail size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Email
                </h4>
                <a
                  href="mailto:promisewonder03@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  promisewonder03@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                <Phone size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Phone
                </h4>
                <a
                  href="tel:+2349042898955"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  +234 904 289 8955
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                <MapPin size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Socials
              </h4>

              <div className="flex space-x-3">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/contact"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
            >
              View full contact details →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
