import React from "react";
import Image from "next/image";
import { assets, infoList } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12] py-10 mt-20 scroll">
      <h4 className="mb-2 text-lg text-center font-Ovo">Introduction</h4>
      <h2 className="text-5xl text-center font-Ovo">About me</h2>

      <div className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row">
        <div className="w-64 rounded sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="aaa"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="max-w-2xl mb-10 font-Ovo">
            I’m a Fullstack Developer with experience building scalable and
            user-friendly web applications. Skilled in both frontend and backend
            technologies, I enjoy turning ideas into functional solutions and
            creating seamless user experiences. Passionate about problem-solving
            and continuous learning, I thrive on building impactful digital
            products.
          </p>

          <ul className="grid max-w-2xl gap-6 grid-col-1 sm:grid-col-3">
            {infoList.map(({icon, iconDark, title, description},index)=>(
                <li className="border border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer" key={index}>
                    <Image src={icon} alt="title" className="mt-3 w-7"/>
                    <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
