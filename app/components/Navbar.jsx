"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Background Cover (subtle height) */}
      <div className="fixed top-0 left-0 z-0 w-full h-24 pointer-events-none sm:h-28 md:h-32">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 px-4 sm:px-6 md:px-8 lg:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-white/70 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" aria-label="Go to top">
          <Image src={assets.logo} alt="Logo" className="w-36 sm:w-40 md:w-48" />
        </a>

        {/* Desktop Menu */}
        <ul className="items-center hidden gap-4 text-gray-800 md:flex sm:gap-6 lg:gap-10 font-Ovo">
          <li><a href="#top" className="hover:text-gray-700">Home</a></li>
          <li><a href="#about" className="hover:text-gray-700">About</a></li>
          <li><a href="#services" className="hover:text-gray-700">Services</a></li>
          <li><a href="#work" className="hover:text-gray-700">Work</a></li>
          <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Toggle theme">
            <Image src={assets.moon_icon} alt="theme" width={20} height={20} />
          </button>

          <a
            href="#contact"
            className="items-center hidden gap-2 px-6 py-2 transition border border-gray-500 rounded-full lg:flex hover:bg-gray-100"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" width={12} height={12} />
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Image src={assets.menu_black} alt="menu" width={28} height={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 bottom-0 right-0 z-40 flex flex-col w-64 h-screen gap-6 px-6 py-20 bg-white shadow-lg transform transition-transform duration-500 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute right-4 top-4">
            <button onClick={closeMenu} aria-label="Close menu">
              <Image src={assets.close_black} alt="close" width={20} height={20} />
            </button>
          </div>
          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

