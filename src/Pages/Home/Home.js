import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-200 text-black">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Expand your career opportunities with
                        <span className="dark:text-violet-400">Javascript</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Take one of Vdemys range of Javascript courses and learn how to code using this incredibly useful language. You will learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to={'/courses'}><button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button></Link>
                        <Link to={'/blog'}><button className="px-8 py-3 m-2 text-lg border rounded dark:text-black dark:border-gray-700">Blogs</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;