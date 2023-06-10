import React from "react";

const Star = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hear from Our Happy Learners
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Discover inspiring stories from our learners. Read testimonials
            showcasing how our courses have transformed lives, careers, and
            personal growth.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg bg-gray-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd class="text-4xl font-extrabold text-yellow-500 md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div class="flex flex-col rounded-lg bg-gray-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd class="text-4xl font-extrabold text-yellow-500 md:text-5xl">
                24
              </dd>
            </div>

            <div class="flex flex-col rounded-lg bg-gray-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd class="text-4xl font-extrabold text-yellow-500 md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Star;
