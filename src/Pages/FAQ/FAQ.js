import React from 'react';

const FAQ = () => {
    return (
        <div className='my-5'>
            <section className="dark:bg-gray-700 dark:text-gray-100 rounded">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">Why JavaScript frameworks are used?</h3>
                            <p className="mt-1 dark:text-gray-400">JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience. In this set of articles, we are aiming to give you a comfortable starting point to help you begin learning frameworks.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Why JavaScript frameworks are used?</h3>
                            <p className="mt-1 dark:text-gray-400">JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience. In this set of articles, we are aiming to give you a comfortable starting point to help you begin learning frameworks.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What framework is JavaScript?</h3>
                            <p className="mt-1 dark:text-gray-400">Frameworks define the structure of an application, much like the framework of a house. JavaScript frameworks are specific to the JavaScript programming language. </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How do JavaScript frameworks work?</h3>
                            <p className="mt-1 dark:text-gray-400">At their most basic, JS frameworks are collections of JavaScript code libraries (see below) that provide developers with pre-written JS code to use for routine programming features and tasks—literally a framework to build websites or web applications around.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;