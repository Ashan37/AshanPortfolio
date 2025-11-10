"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

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
      <div className="fixed top-0 left-0 z-0 w-full h-24 pointer-events-none sm:h-28 md:h-32 dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <a href="#top" aria-label="Go to top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            width={112}
            height={32}
            className="cursor-pointer mr-14"
          />
        </a>

        <ul className={`items-center hidden gap-6 text-gray-800 md:flex sm:gap-6 lg:gap-8 rounded-full px-12 py-3 dark:text-white ${isScroll ? "" :"bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
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
          <ThemeToggle />

          <a
            href="#contact"
            className="items-center hidden gap-2 px-6 py-2 transition border border-gray-500 rounded-full lg:flex hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-400"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              width={16}
              height={16}
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
