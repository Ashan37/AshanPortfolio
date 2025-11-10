"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { assets, toolsData } from "../assets/assets";

const About = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [text] = useTypewriter({
    words: ["Ashan Ekanayake", "Full Stack Developer"],
    loop: 0,
    typeSpeed: 130,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

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
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-4 py-16 mt-20 sm:px-6 md:px-12 lg:pt-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Profile Section */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl">
            {/* Left - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="relative">
                <div className="w-80 h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={assets.user_image}
                    alt="Ashan Ekanayake"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div
              className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1a202c] dark:text-[#01C38D] min-h-[50px] font-Ovo">
                  <span>{text}</span>
                  <Cursor cursorStyle="|" cursorColor="#01C38D" />
                </h2>

                <p className="text-base md:text-lg text-gray-600 dark:text-[#FFFFFF] leading-relaxed font-Ovo">
                  Hi, I&apos;m Ashan! A Full Stack Developer specializing in modern web technologies. I build scalable, user-friendly applications with{" "}
                  <span className="font-semibold text-[#1a202c] dark:text-[#01C38D]">
                    MERN Stack
                  </span>
                  . Passionate about creating seamless user experiences and robust backend systems.
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 font-Ovo">
                  Based in Colombo, Sri Lanka 🇱🇰
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 w-full">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#2d3748] dark:text-[#01C38D] font-Ovo">
              Tech Stack
            </h3>
          </div>

          <div className="overflow-hidden relative max-w-3xl mx-auto">
            <div className="flex animate-slide space-x-8">
              {/* First set */}
              <div className="flex items-center space-x-8 min-w-max">
                {toolsData.map((tool, i) => (
                  <div key={`tech-1-${i}`} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-[#01C38D]/30 bg-white dark:bg-[#132D46] p-3 transition-transform hover:scale-110 flex items-center justify-center">
                      <Image
                        src={tool}
                        alt={`Technology ${i + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                        priority={i < 3}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 min-w-max">
                {toolsData.map((tool, i) => (
                  <div key={`tech-2-${i}`} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-[#01C38D]/30 bg-white dark:bg-[#132D46] p-3 transition-transform hover:scale-110 flex items-center justify-center">
                      <Image
                        src={tool}
                        alt={`Technology ${i + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
