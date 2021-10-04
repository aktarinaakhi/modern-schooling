import React from 'react';
import "./Counting.css"

const Counting = () => {
    return (
        <div className="counting-container my-5 py-5">
            <div className="count">
                <h2 className="number"><span className="span-tag">2.455</span></h2>
                <p>FINISHED SESSIONS</p>
            </div>
            <div className="count">
                <h2 className="number"> <span className="span-tag"> 3.092 +</span> </h2>
                <p>ENROLLED LEARNERS</p>
            </div>
            <div className="count">
                <h2 className="number"> <span className="span-tag"> 200 </span> </h2>
                <p>ONLINE INSTRUCTORS</p>
            </div>
            <div className="count">
                <h2 className="number"><span className="span-tag"> 100%</span></h2>
                <p>SATISFACTION RATE</p>
            </div>
        </div>
    );
};

export default Counting;