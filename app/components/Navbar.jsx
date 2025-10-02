"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    requestAnimationFrame(() => {
      document.body.style.overflow = !menuOpen ? "hidden" : "auto";
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      document.body.style.overflow = "auto";
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const menuIcon = isDarkMode ? assets.menu_white : assets.menu_black;
  const closeIcon = isDarkMode ? assets.close_white : assets.close_black;

  return (
    <>
      <div className="fixed top-0 left-0 z-0 w-full h-24 pointer-events-none sm:h-28 md:h-32">
        <Image
          src={assets.header_bg_color}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <nav
        className={`w-full fixed top-0 left-0 px-4 sm:px-6 md:px-8 lg:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-sm dark:bg-darkTheme/60"
            : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="Go to top">
          <Image
            src={assets.logo}
            alt="Logo"
            width={150}
            height={40}
            priority
          />
        </a>

        <ul className="items-center hidden gap-4 text-gray-800 md:flex sm:gap-6 lg:gap-10 font-ovo">
          <li>
            <a
              href="#top"
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            type="button"
            aria-label="Toggle theme"
            className="p-1"
          >
            {isDarkMode ? (
              <Image
                src={assets.sun_icon}
                alt="Light mode"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={assets.moon_icon}
                alt="Dark mode"
                width={20}
                height={20}
              />
            )}
          </button>

          <a
            href="#contact"
            className="items-center hidden gap-2 px-6 py-2 transition border border-gray-500 rounded-full lg:flex hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-400"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              width={12}
              height={12}
              className={isDarkMode ? "invert" : ""}
            />
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Image src={menuIcon} alt="menu" width={28} height={28} />
          </button>
        </div>

        <ul
          className={`fixed top-0 bottom-0 right-0 z-40 flex flex-col w-64 h-screen gap-6 px-6 py-20 bg-white shadow-lg transform transition-transform duration-500 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } dark:bg-darkTheme dark:text-white`}
        >
          <div className="absolute right-4 top-4">
            <button onClick={closeMenu} aria-label="Close menu">
              <Image src={closeIcon} alt="close" width={20} height={20} />
            </button>
          </div>
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="hover:text-gray-700 dark:hover:text-gray-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
