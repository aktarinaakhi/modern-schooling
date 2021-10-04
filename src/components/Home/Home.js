import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Counting from '../Couting/Counting';
import "../Course/Course.css"
import "./Home.css"
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Counting></Counting>
            <h1 className="my-5 py-5">Latest featured<span className="span-tag"> Courses</span> </h1>
            <div className="course-container">
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }
            </div>

            {/* button  */}
            <div className="button-div"> <Link className="button" to="/services" >Views all courses </Link> </div>
        </div >
    );
};

export default Home;

