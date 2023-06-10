import React from "react";
import { Link } from "react-router-dom";
import cta from "../assets/cta.png";

const CTA = () => {
  return (
    <div>
      <section class="overflow-hidden sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 ml-20 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Start Your Learning Journey Today!
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Unlock a world of knowledge and broaden your horizons with our
              comprehensive online learning platform. Whether you're looking to
              enhance your skills, explore new subjects, or advance your career,
              our courses offer a flexible and engaging learning experience.
              Join our community of passionate learners and take the first step
              towards achieving your educational goals.
            </p>

            <div class="mt-4 md:mt-8">
              <Link
                href="#"
                class="inline-block rounded bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-12 py-3 text-sm font-medium"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src={cta}
          class="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
};

export default CTA;
