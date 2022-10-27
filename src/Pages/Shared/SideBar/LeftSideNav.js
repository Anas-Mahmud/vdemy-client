import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
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
        <div className='pl-3'>
            <div className="h-full p-3 space-y-2 w-auto">
                <div className="flex items-center p-2 space-x-4">
                    {
                        user?.photoURL ?
                            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                            : <FaUser></FaUser>
                    }
                    <div>
                        <h2 className="text-lg font-semibold">
                            {
                                user?.uid ?
                                    <span>{user?.displayName}</span>
                                    :
                                    <p><span>user name</span></p>
                            }
                        </h2>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-2 text-start">
                        {
                            courses.map(course => <p className='bg-slate-300 text-black text-lg font-semibold pl-2 py-2 rounded-lg' key={course.id}>
                                <Link to={`/courses/${course.id}`}>{course.title}</Link>
                            </p>)
                        }
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-start">
                        <li>
                            <button onClick={handleLogOut} type="button" className="px-8 py-3 font-semibold rounded dark:bg-yellow-600 dark:text-gray-800">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;