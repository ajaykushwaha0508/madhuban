// src/components/MainNavigation.js
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import {
  facebook,
  gmail,
  instagram,
  linkedin,
  phone,
  youtube,
} from "@/utills/constants";

const navigation = [
  {
    name: "Home",
    path: "/",
    dropdown: null,
  },
  {
    name: "About",
    path: "/about-us",
  },
  {
    name: "Stay",
    path: "/stay",
  },
  {
    name: "Experiences",
    path: "/experiences",
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
    name: "Blogs",
    path: "/blogs",
    hideOnDesktop: true,
  },
  {
    name: "Contact",
    path: "/contact-us",
    dropdown: null,
  },
];

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-gray shadow-lg ">
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
            <a href={`mailto:${gmail}`} className="hover:text-[#D1C8C1]">
              {gmail}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
                alt="Youtube"
                className="w-6 h-5"
              />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
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
            className="h-15 md:h-20 w-15 md:w-20 filter brightness-75"
          />
          <div className="flex flex-col justify-center">
            <div className="font-primary tracking-wide text-lg  md:text-xl font-bold text-[rgb(110,97,70)] leading-tight">
              Madhuban Eco Retreat
            </div>

            <p className="font-primary tracking-wider text-sm text-[rgb(110,97,70)] leading-tight">
              Ratapani Tiger Reserve,
            </p>
            <p className="font-primary tracking-wide text-xs text-[rgb(110,97,70)] leading-tight">
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
          {navigation
            .filter((item) => !item.hideOnDesktop)
            .map((item) => {
              const isActive = (itemPath) => {
                if (itemPath === "/") {
                  return pathname === "/";
                }
                return pathname.startsWith(itemPath);
              };

              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`
                              text-[22px] font-primary text-[rgb(120,100,60)]
                              relative  font-medium tracking-wide cursor-pointer
                              after:content-[''] after:absolute after:w-full  ${
                                isActive(item.path)
                                  ? "after:scale-x-100"
                                  : "after:scale-x-0"
                              } after:h-[2px] after:bottom-0 after:left-0
                              after:bg-[rgb(120,100,60)] after:origin-bottom-right after:transition-transform after:duration-300
                             hover:after:scale-x-100
                             hover:after:origin-bottom-left`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
        </nav>

        {/* Book Now Button - Desktop */}
        <Link
          href="/booking"
          className="hidden xl:block px-4 py-2 rounded-md font-primary font-semibold text-xl text-[#D1C8C1] bg-[rgb(110,97,70)]  transition"
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
            <div className="border-l-3 border-l-[rgb(110,97,70)] ">
              {navigation.map((item, index) => {
                return (
                  <div key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block  text-lg px-4 py-2  p-text border-b-1 border-b-gray-200 ml-4 ${
                        pathname === item.path
                          ? "text-white bg-primary-gray2 rounded-lg"
                          : "text-gray-800 hover:text-[rgb(110,97,70)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>

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
