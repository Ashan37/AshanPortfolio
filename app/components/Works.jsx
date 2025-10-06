import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Works = ({ isDarkMode }) => {
  return (
    <div
      id="work"
      className="relative w-full px-[12%] py-10 lg:py-16 scroll-mt-20"
    >
      <h4 className="mb-2 text-lg text-center font-Ovo dark:text-white animate-fadeIn">
        My portfolio
      </h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo dark:text-white animate-fadeIn" style={{animationDelay: '0.2s'}}>
        My latest works
      </h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo dark:text-white/90 leading-relaxed animate-fadeIn" style={{animationDelay: '0.4s'}}>
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>

      <div className="grid gap-6 my-10 grid-cols sm:grid-cols-2 lg:grid-cols-4">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden transition-all duration-500 border group rounded-xl border-gray-200 hover:border-gray-400 dark:border-white/10 dark:hover:border-white/40 hover:shadow-2xl dark:hover:shadow-white/20 hover:-translate-y-2 animate-scaleIn cursor-pointer"
            style={{animationDelay: `${index * 0.1}s`}}
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
        className="flex items-center justify-center gap-2 py-3 px-10 mx-auto my-20 w-max text-gray-700 border border-[0.5px] border-gray-700 rounded-full transition-all duration-500 hover:gap-3 hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:hover:shadow-white/20 group animate-fadeIn"
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
