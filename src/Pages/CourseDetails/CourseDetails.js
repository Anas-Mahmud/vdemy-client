import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h2>{details.title}</h2>
        </div>
    );
};

export default CourseDetails;