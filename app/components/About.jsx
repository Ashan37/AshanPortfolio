import React from "react";
import Image from "next/image";
import { assets, infoList } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-4 py-10 mt-20 scroll">
      {/* Section titles */}
      <h4 className="mb-2 text-lg text-center font-Ovo">Introduction</h4>
      <h2 className="text-5xl text-center font-Ovo">About me</h2>

      {/* Main flex container */}
      <div className="flex flex-col items-center max-w-6xl gap-20 mx-auto my-20 lg:flex-row lg:items-center">
        
        {/* Left: profile image */}
        <div className="flex-shrink-0 w-64 sm:w-80 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="Profile photo"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Right: description + info cards */}
        <div className="flex-1 text-center lg:text-left">
          <p className="max-w-2xl mx-auto mb-10 font-Ovo lg:mx-0">
            I’m a Fullstack Developer with experience building scalable and
            user-friendly web applications. Skilled in both frontend and backend
            technologies, I enjoy turning ideas into functional solutions and
            creating seamless user experiences. Passionate about problem-solving
            and continuous learning, I thrive on building impactful digital
            products.
          </p>

          {/* Info cards */}
          <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 lg:mx-0">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className="mt-3 w-7" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
