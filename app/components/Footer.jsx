import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative z-20 mt-20 py-10 bg-white dark:bg-[#191E29] border-t border-gray-200 dark:border-[#01C38D]/30">
    
      <div className="relative z-20 text-center">
        <Image 
          src={isDarkMode ? assets.logo_dark : assets.logo} 
          alt="Ashan Ekanayake Logo" 
          width={160} 
          height={40} 
          className="mx-auto mb-4 transition-transform hover:scale-105" 
        />

        <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-[#FFFFFF]">
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt="Email Icon" 
            width={20} 
            height={20} 
          />
          <a href="mailto:ashanekanayakeat@gmail.com" className="hover:underline transition-all font-Ovo">
            ashanekanayakeat@gmail.com
          </a>
        </div>
      </div>

      
      <div className="relative z-20 border-t border-gray-300 mx-[10%] mt-10 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:border-[#01C38D]/30 dark:text-[#FFFFFF]">
        <p className="relative z-20 font-Ovo">© {new Date().getFullYear()} Ashan Ekanayake. All rights reserved.</p>

        <ul className="relative z-20 flex items-center gap-8 mt-4 sm:mt-0 font-Ovo">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ashan37"
              className="transition-all hover:text-black dark:hover:text-[#01C38D] hover:underline hover:scale-105 inline-block"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ashan-ekanayake-a02840302/"
              className="transition-all hover:text-black dark:hover:text-[#01C38D] hover:underline hover:scale-105 inline-block"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/"
              className="transition-all hover:text-black dark:hover:text-[#01C38D] hover:underline hover:scale-105 inline-block"
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

