import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">What I offer</h4>
      <h2 className="text-5xl text-center font-Ovo">My services</h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">
        I build responsive front-end interfaces and scalable back-end systems to
        deliver complete, user-friendly web solutions.
      </p>
      
      
      <div className="grid grid-cols-1 gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="px-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg hover:bg-lightHover hover:-translate-y-1"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 text-lg text-gray-700">{title}</h3>
            <p className="text-sm leading-5 text-gray-600">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 mt-5 text-sm text-black hover:underline"
            >
              Read more
              <Image
                src={assets.right_arrow}
                alt="arrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

