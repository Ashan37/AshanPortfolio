import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-50">
    
      <div className="text-center">
        <Image src={assets.logo} alt="Ashan Ekanayake Logo" className="w-40 mx-auto mb-4" />

        <div className="flex items-center justify-center gap-2 text-gray-700">
          <Image src={assets.mail_icon} alt="Email Icon" className="w-5 h-5" />
          <a href="mailto:ashanekanayakeat@gmail.com" className="hover:underline">
            ashanekanayakeat@gmail.com
          </a>
        </div>
      </div>

      
      <div className="border-t border-gray-300 mx-[10%] mt-10 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Ashan Ekanayake. All rights reserved.</p>

        <ul className="flex items-center gap-8 mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ashan37"
              className="transition hover:text-black"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ashan-ekanayake-a02840302/"
              className="transition hover:text-black"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/"
              className="transition hover:text-black"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

