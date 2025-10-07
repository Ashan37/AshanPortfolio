"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";

const About = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={sectionRef} className="relative w-full px-4 py-16 mt-20 sm:px-6 md:px-12 lg:pt-32">
      <h4 className={`mb-2 text-lg text-center font-Ovo dark:text-[#FFFFFF] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Introduction</h4>
      <h2 className={`text-4xl text-center sm:text-5xl font-Ovo dark:text-[#01C38D] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>About me</h2>

      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto my-16 lg:flex-row lg:gap-20">
        <div className={`flex-shrink-0 w-56 sm:w-72 lg:w-80 rounded-3xl group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <Image
            src={assets.user_image}
            alt="Profile"
            width={320}
            height={320}
            className="w-full rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:rotate-2"
          />
        </div>

        <div className={`flex-1 text-center lg:text-left transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <p className="max-w-2xl mx-auto mb-10 text-gray-700 lg:mx-0 font-Ovo dark:text-[#FFFFFF] leading-relaxed">
            I'm a Fullstack Developer with experience building scalable and
            user-friendly web applications. Skilled in both frontend and backend
            technologies, I enjoy turning ideas into functional solutions and
            creating seamless user experiences.
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 lg:mx-0">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <li
                key={i}
                className={`p-6 transition-all duration-700 border border-gray-300 rounded-xl hover:bg-gray-50 hover:-translate-y-2 hover:shadow-xl hover:border-gray-400 dark:border-[#01C38D]/30 dark:hover:bg-[#132D46] dark:hover:shadow-[#01C38D]/20 dark:hover:border-[#01C38D] cursor-pointer ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                style={{transitionDelay: isVisible ? `${400 + i * 100}ms` : '0ms'}}
              >
                <Image src={isDarkMode && iconDark ? iconDark : icon} alt={title} width={28} height={28} className="mt-3" />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-[#01C38D]">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-[#FFFFFF]">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className={`my-6 text-gray-700 font-Ovo dark:text-[#01C38D] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: isVisible ? '700ms' : '0ms'}}>
            Tools I use
          </h4>
          <ul className="flex flex-wrap justify-center gap-3 lg:justify-start sm:gap-5">
            {toolsData.map((tool, i) => (
              <li
                key={i}
                className={`flex items-center justify-center w-12 transition-all duration-700 border border-gray-300 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:border-gray-400 dark:border-[#01C38D]/30 dark:hover:bg-[#132D46] dark:hover:border-[#01C38D] dark:hover:shadow-[#01C38D]/20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{transitionDelay: isVisible ? `${800 + i * 50}ms` : '0ms'}}
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
