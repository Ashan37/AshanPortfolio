import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Header = ({ isDarkMode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-11/12 h-screen max-w-4xl gap-6 px-4 mx-auto text-center lg:pt-48 sm:pt-32">
      <div className="relative z-20 animate-float animate-fadeIn" style={{animationDelay: '0.2s'}}>
        <Image
          src={assets.profile_img}
          alt="Profile"
          width={192}
          height={192}
          className="w-32 mx-auto rounded-full shadow-lg md:w-40 lg:w-48 transition-transform hover:scale-110"
          priority
        />
      </div>

      <h3 className="relative z-20 flex items-center justify-center gap-2 mb-2 text-xl md:text-2xl font-Ovo text-gray-700 dark:text-[#FFFFFF] animate-float" style={{animationDelay: '0.2s'}}>
        Hi! I'm Ashan Ekanayake
      </h3>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-Ovo font-semibold z-20 text-[#1a202c] dark:text-[#01C38D] animate-fadeIn" style={{animationDelay: '0.4s'}}>
        Passionate Full Stack Developer.
      </h1>

      <p className="z-20 max-w-2xl mx-auto text-gray-600 font-Ovo dark:text-[#FFFFFF] animate-slideInRight" style={{animationDelay: '0.6s'}}>
        I am a Full Stack Developer from Colombo, Sri Lanka.
      </p>

      <div className="relative z-20 flex flex-col items-center gap-4 mt-6 sm:flex-row animate-scaleIn" style={{animationDelay: '0.8s'}}>
        <a
          href="#contact"
          className="flex items-center gap-2 px-10 py-3 text-white bg-[#132D46] border border-[#01C38D] rounded-full hover:bg-[#01C38D] hover:text-[#191E29] transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" width={16} height={16} className="transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="/sample-resume.pdf"
          download="Ashan_Ekanayake_Resume.pdf"
          className="flex items-center gap-2 px-10 py-3 border border-gray-700 text-gray-800 rounded-full hover:bg-gray-100 dark:border-[#01C38D] dark:text-[#FFFFFF] dark:hover:bg-[#01C38D] dark:hover:text-[#191E29] transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          My Resume
          <Image src={isDarkMode ? assets.download_icon : assets.download_icon_black} alt="download" width={16} height={16} className="transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default Header;
