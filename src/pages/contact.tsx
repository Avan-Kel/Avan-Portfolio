"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact: React.FC = () => {
  const socialLinks = [
    { name: "Github", href: "https://github.com/Avan-Kel", icon: Github },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/promise-eguh-71445b252/",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://x.com/EguhPromis30435/", icon: Twitter },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex-shrink-0">
                <Mail size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  Email
                </h4>
                <a
                  href="mailto:promisewonder03@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  promisewonder03@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex-shrink-0">
                <Phone size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+2349042898955"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  +234 904 289 8955
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  aria-label={`Follow on ${name}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
