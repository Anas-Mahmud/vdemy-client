import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <header className="p-4 dark:bg-pink-900 dark:text-gray-100">
                <div className="container flex justify-around h-16 mx-auto">
                    <Link aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='h-10 pr-2' src="https://jthemes.net/themes/html/etreeks/assests/images/hero-logo.png" alt="" srcset="" />
                        <span className='text-3xl font-bold text-yellow-500'>Vdemy</span>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to={'/home'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
                        </li>
                        <li className="flex">
                            <Link to={'/courses'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</Link>
                        </li>
                        <li className="flex">
                            <Link to={'/faq'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</Link>
                        </li>
                        <li className="flex">
                            <Link to={'/blog'} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} type="button" className="px-8 py-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-800">Logout</button>
                                :
                                <>
                                    <Link to={'/login'}><button className="self-center px-8 py-3 mr-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-900">Login</button></Link>
                                    <Link to={'/register'}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-900">Register</button></Link>
                                </>
                        }
                    </div>
                    <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                        <span className="relative">
                            <input id="Toggle2" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
                            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                        </span>
                    </label>
                </div>
            </header>
        </div>
    );
};

export default Header;