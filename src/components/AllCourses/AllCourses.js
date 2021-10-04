import React from 'react';

const AllCourses = (props) => {
    const { name, img, price, Lesson, student } = props.course;

    return (
        <div className="course m-5">
            <div className="course-img">
                <img src={img} alt="" />
            </div>
            <div className="course-details">
                <h4>{name}</h4>
                <p> $ {price}</p>
                <p>Lesson : {Lesson}</p>
                <p>Students : {student}</p>
            </div>

        </div>

    );
};

export default AllCourses;