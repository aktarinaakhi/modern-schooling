import React, { useEffect, useState } from 'react';
import Peoples from '../Peoples/Peoples';
import "./About.css"

const About = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch('/people.json')
            .then(res => res.json())
            .then(data => setPeoples(data));
    }, [peoples])
    // console.log(peoples);
    return (
        <div>
            <h1 className="mt-5"> Whose <span className="span-tag">Inspirations</span> You Love </h1>
            <p>THE GUYS BEHIND THE CURTAINS</p>
            <div className="people-container">
                {
                    peoples.map(people => <Peoples
                        people={people}
                    >

                    </Peoples>)
                }
            </div>
        </div>
    );
};

export default About;