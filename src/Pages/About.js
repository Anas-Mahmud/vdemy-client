import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="sm:h-80">
          <img alt="House" src={about} className="" />
        </div>

        <div className=" flex items-center rounded-2xl bg-gray-100">
          <div className="p-8 sm:p-16 lg:p-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Empowering Lifelong Learning for Personal Growth
            </h2>

            <p className="mt-4 text-gray-600">
              Welcome to Vdemy, where we believe that learning is a lifelong
              adventure. Our platform is designed to inspire and empower
              individuals to explore new subjects, acquire valuable skills, and
              cultivate a passion for continuous growth. We offer a wide range
              of carefully crafted courses taught by experienced instructors who
              are experts in their fields. Our goal is to provide an enriching
              and interactive learning experience that fosters curiosity,
              creativity, and critical thinking.
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded bg-gradient-to-r from-cyan-600 to-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-500"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
