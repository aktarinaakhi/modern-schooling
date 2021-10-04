import React from 'react';
import "./Counting.css"

const Counting = () => {
    return (
        <div className="counting-container my-5">
            <div className="count">
                <h2 className="number">2.455</h2>
                <p>FINISHED SESSIONS</p>
            </div>
            <div className="count">
                <h2 className="number">3.092 + </h2>
                <p>ENROLLED LEARNERS</p>
            </div>
            <div className="count">
                <h2 className="number"> 200 </h2>
                <p>ONLINE INSTRUCTORS</p>
            </div>
            <div className="count">
                <h2 className="number">100%</h2>
                <p>SATISFACTION RATE</p>
            </div>
        </div>
    );
};

export default Counting;