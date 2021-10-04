import React from 'react';
import "./Peoples.css"

const Peoples = (props) => {
    const { people } = props.people;
    // console.log(people);
    return (
        <div className="people">
            <div><img src={props.people.image} alt="" /></div>
            <h2>{props.people.contributor}</h2>
            <h6>{props.people.contribution}</h6>
        </div>
    );
};

export default Peoples;