import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>this is courses {courses.length}</h2>
        </div>
    );
};

export default Courses;