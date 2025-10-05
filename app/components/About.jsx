import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="relative w-full px-4 py-16 mt-20 sm:px-6 md:px-12 lg:pt-32">
      <h4 className="mb-2 text-lg text-center font-Ovo dark:text-white">Introduction</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo dark:text-white">About me</h2>

      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto my-16 lg:flex-row lg:gap-20">
        <div className="flex-shrink-0 w-56 sm:w-72 lg:w-80 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="Profile"
            width={320}
            height={320}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="max-w-2xl mx-auto mb-10 text-gray-700 lg:mx-0 font-Ovo dark:text-white">
            I’m a Fullstack Developer with experience building scalable and
            user-friendly web applications. Skilled in both frontend and backend
            technologies, I enjoy turning ideas into functional solutions and
            creating seamless user experiences.
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 lg:mx-0">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <li
                key={i}
                className="p-6 transition border border-gray-300 rounded-xl hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md dark:border-white/20 dark:hover:bg-white/5 dark:hover:shadow-white/10"
              >
                <Image src={isDarkMode && iconDark ? iconDark : icon} alt={title} width={28} height={28} className="mt-3" />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white">
            Tools I use
          </h4>
          <ul className="flex flex-wrap justify-center gap-3 lg:justify-start sm:gap-5">
            {toolsData.map((tool, i) => (
              <li
                key={i}
                className="flex items-center justify-center w-12 transition border border-gray-300 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1 dark:border-white/20 dark:hover:bg-white/5"
              >
                <Image src={tool} alt="tool" width={28} height={28} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
