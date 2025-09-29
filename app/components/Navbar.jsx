"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    // Lock body scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 z-10 w-11/12 pointer-events-none -translate-y-4/5">
        <Image
          src={assets.header_bg_color}
          className="w-full"
          alt="background"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" aria-label="Go to top">
          <Image
            src={assets.logo}
            alt="Ashan Logo"
            className="w-40 cursor-pointer sm:w-48"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`items-center hidden gap-6 px-8 py-3 rounded-full md:flex lg:gap-10 ${
            isScroll ? "bg-transparent" : "bg-white/60 shadow-sm"
          }`}
        >
          <li>
            <a className="font-Ovo hover:text-gray-700" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-700" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-700" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-700" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-gray-700" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Toggle theme">
            <Image src={assets.moon_icon} alt="theme" width={20} height={20} />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-8 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100 transition"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              width={12}
              height={12}
            />
          </a>

          {/* Hamburger for mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="z-50 block ml-3 md:hidden"
          >
            <Image src={assets.menu_black} alt="menu" width={28} height={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 bottom-0 right-0 z-40 flex flex-col w-64 h-screen gap-6 px-10 py-20 bg-white shadow-lg transform transition-transform duration-500 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute right-6 top-6">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex items-center justify-center w-8 h-8"
            >
              <Image
                src={assets.close_black}
                alt="close"
                width={20}
                height={20}
              />
            </button>
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
