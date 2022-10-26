import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="p-4 dark:bg-pink-900 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='h-10 pr-2' src="https://jthemes.net/themes/html/etreeks/assests/images/hero-logo.png" alt="" srcset="" />
                        <span className='text-3xl font-bold'>Vdemy</span>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Link</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to={'/login'}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-900">Login</button></Link>
                        <Link to={'/register'}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-900">Register</button></Link>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;