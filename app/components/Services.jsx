"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";

const Services = ({ isDarkMode }) => {
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
      id="services"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-10 lg:py-16 scroll-mt-20"
    >
      <h4 className={`mb-2 text-lg text-center font-Ovo text-gray-600 dark:text-[#FFFFFF] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>What I offer</h4>
      <h2 className={`text-4xl text-center sm:text-5xl font-Ovo text-[#1a202c] dark:text-[#01C38D] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>My services</h2>

      <p className={`max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo text-gray-600 dark:text-[#FFFFFF] leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>

      <div className="grid gap-6 my-10 grid-cols-auto sm:grid-cols-2 lg:grid-cols-4">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <div
            key={i}
            className={`p-6 transition-all duration-300 border border-gray-300 rounded-lg cursor-pointer sm:p-8 hover:bg-lightHover hover:-translate-y-3 hover:shadow-2xl hover:border-gray-400 dark:border-[#01C38D]/30 dark:hover:bg-[#132D46] dark:hover:shadow-[#01C38D]/20 dark:hover:border-[#01C38D] group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
            style={{transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms'}}
          >
            <div className="flex justify-center mb-4">
              <Image 
                src={icon} 
                alt={title} 
                width={40}
                height={40}
                className={`transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6 ${isDarkMode ? 'invert' : ''}`} 
              />
            </div>
            <h3 className="mb-2 text-lg text-center text-[#2d3748] dark:text-[#01C38D]">{title}</h3>
            <p className="text-sm text-center text-gray-600 dark:text-[#FFFFFF] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
