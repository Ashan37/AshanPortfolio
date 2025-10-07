"use client";
import React, {useState} from "react";


const Contact = ({ isDarkMode }) => {

  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "996146b8-2f86-4652-8ce2-022761f6c9b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div id="contact" className="relative w-full px-[12%] py-10 lg:py-16 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo text-gray-600 dark:text-[#FFFFFF]">Connect with me</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo text-[#1a202c] dark:text-[#01C38D]">
        Get in touch
      </h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo text-gray-600 dark:text-[#FFFFFF]">
        I’d love to hear from you! Whether it’s a project idea, a question, or
        just a hello feel free to reach out and let’s connect.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid gap-6 mt-10 mb-8 grid-cols-auto">
            <input name="name" className="flex flex-1 p-3 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#132D46] dark:border-[#01C38D]/30 dark:text-[#FFFFFF] dark:placeholder:text-gray-400" type="text" placeholder="Enter your name" required />
            <input name="email" className="flex flex-1 p-3 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#132D46] dark:border-[#01C38D]/30 dark:text-[#FFFFFF] dark:placeholder:text-gray-400" type="email" placeholder="Enter your email" required/>
        </div>
        <textarea name='message' className="w-full p-4 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#132D46] dark:border-[#01C38D]/30 dark:text-[#FFFFFF] dark:placeholder:text-gray-400" rows={6} placeholder="Enter your message" required></textarea>
        <button className="flex items-center gap-2 px-8 py-3 mx-auto text-white duration-300 rounded-full bg-black justify-between hover:bg-black dark:bg-[#132D46] dark:border dark:border-[#01C38D] dark:text-[#FFFFFF] dark:hover:bg-[#01C38D] dark:hover:text-[#191E29] hover:shadow-lg dark:hover:shadow-[#01C38D]/30 group animate-fadeIn" type="submit">Submit now</button>

        <p className="mt-4 dark:text-[#FFFFFF]">{result}</p>
        
      </form>
    </div>
  );
};

export default Contact;
