import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    return (
        <div className='pl-3'>
            <div className="h-full p-3 space-y-2 w-auto bg-white text-black">
                <div className="flex items-center p-2 space-x-4">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Search</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Wishlist</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;