import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="mb-2 text-lg text-center font-Ovo">Connect with me</h4>
      <h2 className="text-4xl text-center sm:text-5xl font-Ovo">
        Get in touch
      </h2>

      <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">
        I’d love to hear from you! Whether it’s a project idea, a question, or
        just a hello feel free to reach out and let’s connect.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid gap-6 mt-10 mb-8 grid-cols-auto">
            <input className="flex flex-1 p-3 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white" type="text" placeholder="Enter your name" required />
            <input className="flex flex-1 p-3 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white" type="email" placeholder="Enter your email" required/>
        </div>
        <textarea className="w-full p-4 outline-none border border-[0.5px] border-gray-400 rounded-md bg-white mb-6" rows={6} placeholder="Enter your message" required></textarea>
        <button className="flex items-center gap-2 px-8 py-3 mx-auto text-white duration-500 rounded-full bg-black/80 justyfy-between hover:bg-black" type="submit">Submit now</button>

        
      </form>
    </div>
  );
};

export default Contact;
