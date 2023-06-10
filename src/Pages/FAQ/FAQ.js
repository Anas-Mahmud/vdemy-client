import React from "react";

const FAQ = () => {
  return (
    <div className="my-5">
      <section className="dark:bg-gray-700 dark:text-gray-100 rounded">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4 w-2/3 mx-auto">
            <details
              class="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 class="font-medium">Why JavaScript frameworks are used?</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                JavaScript frameworks are an essential part of modern front-end
                web development, providing developers with tried and tested
                tools for building scalable, interactive web applications. Many
                modern companies use frameworks as a standard part of their
                tooling, so many front-end development jobs now require
                framework experience. In this set of articles, we are aiming to
                give you a comfortable starting point to help you begin learning
                frameworks.
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 class="font-medium">How do JavaScript frameworks work?</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                At their most basic, JS frameworks are collections of JavaScript
                code libraries (see below) that provide developers with
                pre-written JS code to use for routine programming features and
                tasks—literally a framework to build websites or web
                applications around.
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 class="font-medium">What framework is JavaScript?</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Frameworks define the structure of an application, much like the
                framework of a house. JavaScript frameworks are specific to the
                JavaScript programming language.
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 class="font-medium">What framework is JavaScript?</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Frameworks define the structure of an application, much like the
                framework of a house. JavaScript frameworks are specific to the
                JavaScript programming language.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
