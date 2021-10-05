import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <form>
                <h3 className="py-5">If you want to enroll courses, then please <span className="span-tag">CONTACT</span> with  us</h3>
                <div className="mb-5 pt-5">
                    <label className="me-5" htmlFor="name"> Name  :</label>
                    <input className="form-input py-1" placeholder="Enter your name" type="text" />
                </div>

                <div className="mb-5">
                    <label className="me-5" htmlFor="email"> Email  :</label>
                    <input className="form-input py-1" placeholder="Enter your email" type="email" />
                </div>

                <div className="mb-5">
                    <label className="me-3" htmlFor="number"> Phone No. : </label>
                    <input className="form-input py-1" placeholder="Enter your number" type="number" />
                </div>

                <div className="mb-5">
                    <label className="me-2" htmlFor="course"> Course Name  :</label>
                    <input className="form-input py-1" placeholder="Enter choosing course" type="name" />
                </div>

                <div className="submit-btn">
                    <Link className="button" to="">Submit</Link>
                </div>

            </form>
        </div>
    );
};

export default Contact;