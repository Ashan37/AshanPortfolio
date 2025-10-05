import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Header = ({ isDarkMode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-11/12 h-screen max-w-4xl gap-6 px-4 mx-auto text-center lg:pt-48">
      <div className="relative z-20 animate-float">
        <Image
          src={assets.profile_img}
          alt="Profile"
          width={192}
          height={192}
          className="w-32 mx-auto rounded-full shadow-lg md:w-40 lg:w-48 transition-transform hover:scale-110"
          priority
        />
      </div>

      <h3 className="relative z-20 flex items-center justify-center gap-2 mb-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Ashan Ekanayake
  <Image src={assets.hand_icon} alt="hand" width={24} height={24} />
      </h3>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-Ovo z-20">
        Frontend and Backend Developer based in Colombo.
      </h1>

      <p className="z-20 max-w-2xl mx-auto text-gray-700 font-Ovo dark:text-white">
        I am a frontend and backend developer from Colombo, Sri Lanka.
      </p>

      <div className="relative z-20 flex flex-col items-center gap-4 mt-6 sm:flex-row">
        <a
          href="#contact"
          className="flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" width={16} height={16} />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default Header;
