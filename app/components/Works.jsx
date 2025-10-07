"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Works = ({ isDarkMode }) => {
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
    <div
      id="work"
      ref={sectionRef}
      className="relative w-full px-[12%] py-10 lg:py-16 scroll-mt-20"
    >
      <h4 className={`mb-2 text-lg text-center font-Ovo dark:text-[#FFFFFF] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        My portfolio
      </h4>
      <h2 className={`text-4xl text-center sm:text-5xl font-Ovo dark:text-[#01C38D] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        My latest works
      </h2>

      <p className={`max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo dark:text-[#FFFFFF] leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>

      <div className="grid gap-6 my-10 grid-cols sm:grid-cols-2 lg:grid-cols-4">
        {workData.map((project, index) => (
          <div
            key={index}
            className={`relative h-64 overflow-hidden transition-all duration-700 border group rounded-xl border-gray-200 hover:border-gray-400 dark:border-[#01C38D]/30 dark:hover:border-[#01C38D] hover:shadow-2xl dark:hover:shadow-[#01C38D]/20 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
            style={{transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms'}}
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
              <h2 className="text-lg font-semibold text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                {project.title}
              </h2>
              <p className="text-sm text-gray-300 transform transition-all duration-500 delay-75 translate-y-4 group-hover:translate-y-0">{project.description}</p>
            </div>

            <div className="absolute bottom-4 right-4 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12">
              <Image
                src={assets.send_icon}
                alt="send icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className={`flex items-center justify-center gap-2 py-3 px-10 mx-auto my-20 w-max text-gray-700 border border-[0.5px] border-gray-700 rounded-full transition-all duration-700 hover:gap-3 hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 dark:text-[#FFFFFF] dark:border-[#01C38D] dark:hover:bg-[#01C38D] dark:hover:text-[#191E29] dark:hover:shadow-[#01C38D]/20 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{transitionDelay: isVisible ? '700ms' : '0ms'}}
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Rightarrowbold"
          width={16}
          height={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default Works;
