import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-4 py-16 mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">Introduction</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto my-16 lg:flex-row lg:items-center lg:gap-20">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-56 sm:w-72 lg:w-80 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="Profile photo"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="max-w-2xl mx-auto mb-10 text-gray-700 font-Ovo lg:mx-0">
            I’m a Fullstack Developer with experience building scalable and
            user-friendly web applications. Skilled in both frontend and backend
            technologies, I enjoy turning ideas into functional solutions and
            creating seamless user experiences. Passionate about problem-solving
            and continuous learning, I thrive on building impactful digital
            products.
          </p>

          {/* Info Cards */}
          <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 lg:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="p-6 transition duration-500 border border-gray-300 cursor-pointer rounded-xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md"
              >
                <Image src={icon} alt={title} className="mt-3 w-7" />
                <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:justify-start">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 transition duration-500 border border-gray-300 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

