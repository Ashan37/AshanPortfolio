import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";

const Services = ({ isDarkMode }) => {
  return (
    <div
      id="services"
      className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-10 lg:py-16 scroll-mt-20"
    >
      <h4 className="mb-2 text-lg text-center font-Ovo dark:text-white">What I offer</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo dark:text-white">My services</h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo dark:text-white/90">
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>

      <div className="grid gap-6 my-10 grid-cols-auto sm:grid-cols-2 lg:grid-cols-4">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <div
            key={i}
            className="p-6 transition border border-gray-300 rounded-lg cursor-pointer sm:p-8 hover:bg-lightHover hover:-translate-y-1 hover:shadow-lg dark:border-white/20 dark:hover:bg-white/5 dark:hover:shadow-white/10"
          >
            <Image 
              src={icon} 
              alt={title} 
              width={40}
              height={40}
              className={`mb-4 ${isDarkMode ? 'invert' : ''}`} 
            />
            <h3 className="mb-2 text-lg text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-white/80">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 mt-4 text-sm text-black hover:underline dark:text-white dark:hover:text-white/80"
            >
              Read more{" "}
              <Image 
                src={assets.right_arrow} 
                alt="arrow" 
                width={16}
                height={16}
                className={isDarkMode ? 'invert' : ''} 
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
