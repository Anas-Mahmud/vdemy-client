import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <div className="space-y-2 text-center mt-10">
                <h2 className="text-3xl font-bold">Our premium courses content</h2>
                <p className="font-serif text-sm dark:text-gray-400">Take one of Vdemys range of Javascript courses and learn how to code using this incredibly useful language.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-10'>
                {
                    courses.map(singleCourse => <Course
                        key={singleCourse.id}
                        singleCourse={singleCourse}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;