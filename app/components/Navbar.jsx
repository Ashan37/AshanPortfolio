"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* background pattern behind navbar */}
      <div className="fixed top-0 right-0 z-10 w-11/12 -translate-y-4/5">
        <Image src={assets.header_bg_color} className="w-full" alt="bg" priority />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Ashan"
            className="w-48 cursor-pointer mr-14"
          />
        </a>

        {/* desktop menu */}
        <ul className="items-center hidden gap-6 px-12 py-3 bg-white bg-opacity-50 rounded-full md:flex lg:gap-8">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* right side controls */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Toggle theme">
            <Image src={assets.moon_icon} alt="theme" width={20} height={20} />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" width={12} height={12} className="ml-2" />
          </a>

          {/* hamburger for mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="z-50 block ml-3 md:hidden"
          >
            <Image src={assets.menu_black} alt="menu" width={28} height={28} />
          </button>
        </div>

        {/* ----------mobile view - menu slides in/out---------- */}
        <ul
          className={`fixed top-0 bottom-0 right-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 bg-rose-50 transform transition-transform duration-500 md:hidden ${
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
              <Image src={assets.close_black} alt="close" width={20} height={20} />
            </button>
          </div>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
