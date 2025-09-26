import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt="" className="w-32 rounded-full" />
      </div>
      <h3 className="flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo">
        Hi! I'm Ashan Ekanayake{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend and backend developer based in Colombo.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend and backend developer from Colombo, Sri Lanka.
      </p>

      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <a
          href="#contact"
          className="flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
