import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter, FaGithub, FaLock } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-20">
            <div class="w-full max-w-lg">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://jthemes.net/themes/html/etreeks/assests/images/hero-logo.png" alt="Your Company" />
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register to your account</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="-space-y-px rounded-md shadow-sm">
                        <div className='mb-2'>
                            <input name="name" type="text" autocomplete="text" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Your name" />
                        </div>
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div class="text-sm">
                            <Link href="#" class="font-medium text-yellow-500 hover:text-yellow-400">Forgot your password?</Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaLock class="h-5 w-5 text-yellow-600 group-hover:text-rose-800" />
                            </span>
                            Sign in
                        </button>
                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FaGoogle />
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                            <FaTwitter />
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <FaGithub />
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link to={'/login'} className="underline text-yellow-500"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;