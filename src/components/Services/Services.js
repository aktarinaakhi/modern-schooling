import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <h2 className="mt-5"> Latest featured <span className="span-tag">Courses</span> </h2>
            <p className="mb-5">CHOOSE WHERE YOU'D LIKE TO BEGIN</p>
            <div className="course-container">
                {
                    courses.map(course => <AllCourses
                        key={course.id}
                        course={course}
                    >
                    </AllCourses>)
                }
            </div>
        </div>
    );
};

export default Services;