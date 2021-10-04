import React, { useEffect, useState } from 'react';
// import { Carousel, CarouselItem } from 'react-bootstrap';
// import img1 from "../../images/benner.jpg"
import Course from '../Course/Course';
import Counting from '../Couting/Counting';
// import { Carousel } from 'react-bootstrap/Carousel'
import "../Course/Course.css"
import "./Home.css"
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // console.log(courses.slice(0, 4));
    return (
        <div>
            <Banner></Banner>
            <Counting></Counting>
            <h1 className="my-5 py-5">Latest <span className="span-tag">featured</span> Courses </h1>
            <div className="course-container">
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }
            </div>


        </div>
    );
};

export default Home;

