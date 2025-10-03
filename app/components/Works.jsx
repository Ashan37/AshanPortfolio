import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Works = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">My portfolio</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo">
        My latest work
      </h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo dark:text-white">
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>

      <div className="grid gap-6 my-10 grid-cols sm:grid-cols-2 lg:grid-cols-4">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden group rounded-xl"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-4 transition opacity-0 bg-black/50 group-hover:opacity-100">
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>

            <div className="absolute bottom-4 right-4">
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
        className="flex items-center justify-center gap-2 text-gray-700 border border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover: w-max dark:text-white dark:border-white"
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Rightarrowbold"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Works;
