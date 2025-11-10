"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

// Tech Stack Color Mapper
const getTechColor = (techName) => {
  const t = techName.toLowerCase();

  if (t.includes('react')) return 'text-sky-500 dark:text-sky-400';
  if (t.includes('node')) return 'text-green-600 dark:text-green-500';
  if (t.includes('express')) return 'text-orange-700 dark:text-orange-500';
  if (t.includes('figma') || t.includes('figjam')) return 'text-purple-600 dark:text-purple-500';
  if (t.includes('dart') || t.includes('flutter')) return 'text-blue-500 dark:text-blue-400';
  if (t.includes('javascript')) return 'text-yellow-500 dark:text-yellow-400';
  if (t.includes('mongo')) return 'text-green-500 dark:text-green-400';
  if (t.includes('postgre')) return 'text-blue-700 dark:text-blue-600';
  if (t.includes('socket.io')) return 'text-blue-500 dark:text-blue-400';
  if (t.includes('docker')) return 'text-sky-600 dark:text-sky-500';
  if (t.includes('aws')) return 'text-orange-500 dark:text-orange-400';
  if (t.includes('adobe xd')) return 'text-pink-600 dark:text-pink-500';
  if (t.includes('ios') || t.includes('android')) return 'text-lime-600 dark:text-lime-500';
  if (t.includes('php')) return 'text-indigo-600 dark:text-indigo-500';
  if (t.includes('laravel')) return 'text-red-700 dark:text-red-600';
  if (t.includes('mysql')) return 'text-blue-900 dark:text-blue-700';
  if (t.includes('tailwindcss') || t.includes('tailwind')) return 'text-cyan-500 dark:text-cyan-400';
  if (t.includes('supabase')) return 'text-green-400 dark:text-green-300';
  if (t.includes('flask')) return 'text-red-900 dark:text-red-700';
  if (t.includes('html')) return 'text-red-600 dark:text-red-500';
  if (t.includes('css')) return 'text-blue-900 dark:text-blue-700';
  if (t.includes('next')) return 'text-gray-900 dark:text-gray-300';
  if (t.includes('scikit-learn')) return 'text-orange-600 dark:text-orange-500';
  if (t.includes('arduino') || t.includes('esp32')) return 'text-teal-500 dark:text-teal-400';

  return 'text-gray-500 dark:text-gray-400';
};

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

  const isValidLink = (link) => link && link !== '#' && link.length > 1;
  const iconBaseClasses = "w-5 h-5 transition-all duration-300";

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full px-6 sm:px-[12%] py-16 md:py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className={`mb-2 text-lg font-Ovo text-gray-600 dark:text-[#FFFFFF] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Portfolio
          </h4>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold font-Ovo text-[#1a202c] dark:text-[#01C38D] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Latest Works
          </h2>
          <p className={`max-w-2xl mx-auto mt-5 text-center font-Ovo text-gray-600 dark:text-[#FFFFFF] leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I build responsive front-end interfaces and scalable back-end systems to deliver complete, user-friendly web solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {workData.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 flex flex-col h-full bg-white dark:bg-[#132D46] rounded-xl overflow-hidden border border-gray-200 dark:border-[#01C38D]/30 hover:border-gray-400 dark:hover:border-[#01C38D] hover:shadow-2xl dark:hover:shadow-[#01C38D]/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms' }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-bold mb-2 text-center text-gray-800 dark:text-white line-clamp-2 font-Ovo">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed mb-4 line-clamp-3 font-Ovo">
                  {project.subtitle}
                </p>

                <div className="border-t border-gray-200 dark:border-[#01C38D]/20 pt-3 mb-3"></div>

                {/* Role */}
                <div className="text-xs flex flex-wrap justify-center items-center mb-2">
                  <span className="text-gray-400 dark:text-gray-500 mr-1 font-Ovo">Role:</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium font-Ovo">
                    {project.role.join(" / ")}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="text-xs flex flex-wrap justify-center items-center mb-4">
                  <span className="text-gray-400 dark:text-gray-500 mr-1 font-Ovo">Stack:</span>
                  {project.techUsed.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className={`${getTechColor(tech)} font-medium font-Ovo`}>
                        {tech}
                      </span>
                      {i < project.techUsed.length - 1 && (
                        <span className="text-gray-500 dark:text-gray-400 mx-[0.2rem]">,</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center mt-auto pt-3 border-t border-gray-200 dark:border-[#01C38D]/20">
                  {isValidLink(project.links.github) && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:opacity-70 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Image
                        src={assets.github}
                        alt="GitHub"
                        width={20}
                        height={20}
                        className={iconBaseClasses}
                      />
                    </a>
                  )}

                  {isValidLink(project.links.figma) && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:opacity-70 hover:scale-110"
                      aria-label="Figma"
                    >
                      <Image
                        src={assets.figma}
                        alt="Figma"
                        width={20}
                        height={20}
                        className={iconBaseClasses}
                      />
                    </a>
                  )}

                  {isValidLink(project.links.linkedin) && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:opacity-70 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Image
                        src={assets.linkedin}
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className={iconBaseClasses}
                      />
                    </a>
                  )}

                  {isValidLink(project.links.behance) && (
                    <a
                      href={project.links.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:opacity-70 hover:scale-110"
                      aria-label="Behance"
                    >
                      <Image
                        src={assets.firebase}
                        alt="Behance"
                        width={20}
                        height={20}
                        className={iconBaseClasses}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <a
          href="https://github.com/Ashan37"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-3 px-10 mx-auto my-16 w-max text-[#2d3748] border border-gray-700 rounded-full transition-all duration-300 hover:gap-3 hover:bg-[#1a202c] hover:text-white hover:shadow-xl hover:scale-105 dark:text-[#FFFFFF] dark:border-[#01C38D] dark:hover:bg-[#01C38D] dark:hover:text-[#191E29] dark:hover:shadow-[#01C38D]/20 group font-Ovo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          View More on GitHub
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            width={16}
            height={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Works;
