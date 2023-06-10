import React from "react";
import img from "../assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="mt-14">
      <h1 className="text-3xl font-bold text-center bg-black bg-clip-text text-transparent">
        Contact US
      </h1>
      <hr className="w-2/4 mx-auto my-5" />
      <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
        <div className="flex flex-col justify-between">
          <img src={img} alt="" className="pr-4 h-full" />
        </div>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid mt-10">
          <div data-aos="fade-up" data-aos-duration="1500">
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <input
              id="email"
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
              data-temp-mail-org="1"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-gray-100 text-black"
              spellcheck="false"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-cyan-600 to-teal-600 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
