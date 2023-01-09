import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://vdemy-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='px-3 bg-zinc-300'>
            <div className="h-full p-3 space-y-2 w-auto">
                <div className="flex items-center px-2 py-3 space-x-4">
                    {
                        user?.photoURL ?
                            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                            : <FaUser></FaUser>
                    }
                    <div>
                        <h2 className="text-lg font-semibold">
                            {
                                user?.uid ?
                                    <span className='text-black'>{user?.displayName}</span>
                                    :
                                    <p><span>user name</span></p>
                            }
                        </h2>
                    </div>
                </div>
                <hr />
                <div className="divide-y divide-gray-100">
                    <ul className="pt-2 pb-4 space-y-2 text-start">
                        {
                            courses.map(course => <p className='hover:bg-gradient-to-r from-teal-800 to-cyan-200 hover:text-gray-50 text-black text-lg font-semibold pl-4 py-3 rounded-lg' key={course.id}>
                                <Link to={`/courses/${course.id}`}>{course.title}</Link>
                            </p>)
                        }
                    </ul>
                    <ul className="pt-4 pb-2 px-5 space-y-1 text-start">
                        <li>
                            <button onClick={handleLogOut} type="button" className="px-8 py-3 font-semibold rounded bg-yellow-500 text-gray-100">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default LeftSideNav;