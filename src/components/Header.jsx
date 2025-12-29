// src/components/MainNavigation.js
"use client";

import React, { useState ,useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { facebook, gmail, instagram, linkedin, phone, youtube } from "@/utills/constants";

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

    useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);

  const navigation = [
    {
      name: "Home",
      path: "/",
      dropdown: null,
    },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "The Madhuban Story", path: "/about/story" },
        { name: "Eco-Philosophy", path: "/about/eco-philosophy" },
        { name: "Vision & Mission", path: "/about/Vision-&-Mission" },
        // { name: "Our Team", path: "/about/Our-Team" },
        { name: "Blog", path: "/blogs" },
      ],
    },
    {
      name: "Stay",
      path: "/stay",
    },
    {
      name: "Experiences",
      path: "/experiences",
      dropdown: [
        {
          name: "Forest Walks & Nature Trails",
          path: "/experiences/forest-walks-and-nature-trails",
        },
        {
          name: "Bird Watching & Wilderness",
          path: "/experiences/bird-watching-and-wilderness",
        },
        {
          name: "Recreational Facilities",
          path: "/experiences/recreational-facilities",
        },
      ],
    },
    {
      name: "Dining",
      path: "/dining",
    },
    {
      name: "Nearby Attractions",
      path: "/nearby-attractions",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact-us",
      dropdown: null,
    },
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className="fixed w-full z-50 bg-primary-gray shadow-lg ">
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-primary-gray2 text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+917895432160"
              className="flex items-center hover:text-[#D1C8C1]"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span>+{phone}</span>
            </a>
            <a
              href={`mailto:${gmail}`}
              className="hover:text-[#D1C8C1]"
            >
              {gmail}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="Youtube"
                className="w-6 h-5"
              />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/640px-Linkedin.svg.png"
                alt="Linkdin"
                className="w-5 h-5"
              />
            </a>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative xl:justify-between 2xl:justify-between xl:min-w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4 z-20">
          <img
            src="/images/logo/logo-4.png"
            alt="Madhuban Eco Retreat Logo"
            className="h-20 w-20 filter brightness-75"
          />
          <div className="flex flex-col justify-center">
            <div className="font-[sitka-banner] tracking-wide text-xl font-bold text-[rgb(110,97,70)] leading-tight">
              Madhuban Eco Retreat
            </div>

            <p className="font-[sitka-banner] tracking-wider text-sm text-[rgb(110,97,70)] leading-tight">
              Ratapani Tiger Reserve,
            </p>
            <p className="font-[sitka-banner] tracking-wide text-xs text-[rgb(110,97,70)] leading-tight">
              Bhopal, Madhya Pradesh, India
            </p>
          </div>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="xl:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[rgb(110,97,70)]" />
          ) : (
            <Menu className="w-6 h-6 text-[rgb(110,97,70)]" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex xl:justify-between xl:flex-1 xl:ml-8 2xl:ml-12 items-center space-x-6 font-inter xl:max-w-[62vw]">
          {navigation.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center font-[sitka-banner] font-medium tracking-wide text-[22px]  text-[rgb(110,97,70)] hover:text-[rgb(190,175,145)]"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div
                      className={`absolute left-0 w-56 bg-white shadow-lg rounded-md py-2 z-20 transform transition-all origin-top-left  ${
                        activeDropdown === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((subItem) => {
                        const isActive = pathname === subItem.path;
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className={`block px-4 py-2 text-lg ${
                              isActive
                                ? "text-[rgb(110,97,70)] hover:text-[rgb(190,175,145)] font-[sitka-banner] font-medium tracking-wide"
                                : "text-[rgb(120,100,60)] hover:text-[rgb(190,175,145)] font-[sitka-banner] font-medium tracking-wide"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`font-medium text-[19px] ${
                      isActive
                        ? "text-[rgb(110,97,70)] font-[sitka-banner] font-medium tracking-wide text-[22px]"
                        : "text-[rgb(120,100,60)] hover:text-[rgb(190,175,145)] text-[22px] font-[sitka-banner] font-medium tracking-wide"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Book Now Button - Desktop */}
        <Link
          href="/booking"
          className="hidden xl:block px-4 py-2 rounded-md font-[sitka-banner] font-semibold text-xl text-[#D1C8C1] bg-[rgb(110,97,70)]  transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out min-h-screen pt-20 px-6 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-[rgb(110,97,70)] hover:text-[rgb(110,97,70)]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col space-y-4">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-lg font-semibold text-black hover:text-[rgb(110,97,70)]"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={activeDropdown === index}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        activeDropdown === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          //   className={({ isActive }) =>
                          //     `block text-base pl-3 py-1 border-l-2 ${
                          //       isActive
                          //         ? "text-[rgb(110,97,70)] border-[rgb(110,97,70)] font-medium"
                          //         : "text-gray-600 border-transparent hover:text-[rgb(110,97,70)] hover:border-[rgb(110,97,70)] "
                          //     }`
                          //   }
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    // className={({ isActive }) =>
                    //   `block py-2 text-lg font-semibold ${
                    //     isActive
                    //       ? "text-[rgb(110,97,70)]"
                    //       : "text-gray-800 hover:text-[rgb(110,97,70)]"
                    //   }`
                    // }
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Book Now Button - Mobile */}
            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 w-full py-3 text-center rounded-md font-semibold  text-[#D1C8C1] bg-[rgb(110,97,70)] hover:bg-[rgb(132,116,85)] transition"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
