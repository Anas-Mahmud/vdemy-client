import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = ({ singleCourse }) => {
    const { title, time, description, image, rating } = singleCourse;
    const course = useLoaderData();
    return (
        <div>
            <h2>{course.title}</h2>
            <div>
                <article className="flex flex-col dark:bg-slate-300 rounded-md border-2 shadow-xl">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-100 rounded-md" src={image} />
                    <div className="flex flex-col flex-1 p-6">
                        <h2 className='text-yellow-600 text-2xl font-bold'>{title}</h2>
                        <h3 className="flex-1 py-2 text-lg font-semibold text-start">
                            {
                                description.length > 150 ?
                                    <p className='text-black'>{description.slice(0, 150) + '...'} <Link to={`/courses/${course.id}`}>Read More</Link></p>
                                    :
                                    <p>{description}</p>
                            }
                        </h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-cyan-900">
                            <span>Time: {time}</span>
                            <span>Rating: {rating.rate}k</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Course;