import React from "react";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <div>
      <section className="py-4 mx-20 mb-6 rounded-3xl bg-gray-100 dark:text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
            Empowering Lifelong Learning for Personal and professional Growth
          </h1>
          <Link to={"/courses"}>
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-gray-200">
              Get started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Action;
