import React from 'react';
import Banner from '../Banner/Banner';
import image from "../../images/banner7.jpg"
import "./Blogs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEye } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    return (
        <div>
            {/* banner part  */}
            <Banner></Banner>

            {/* publication part */}
            <h1 className="my-5 py-5">Why People Talk About <span className="span-tag">GUB ICT CLUB ?</span></h1>
            <div className="blogs my-5">
                <div className="self">
                    <img src={image} alt="" />
                </div>
                <div className="blog-title">
                    <h1> I am free to learn at my own peace, follow my own schedule and choose the subject I like. Great study portal for people like me</h1>

                </div>
            </div>

            {/* letast blogs part  */}
            <div className="latest-blog-container pb-5">
                <h1 className="my-5 py-5">Latest on <span className="span-tag">Our Blogs</span></h1>
                <div className="latest-blog">
                    <div>
                        <img src={image} alt="" />
                        <h6 className="mt-4">Business</h6>
                        <h4>How Stay Clam From The First Time</h4>
                        <span><small><FontAwesomeIcon className="me-3" icon={faCalendar} />June 30,2021</small></span>
                        <span className="ms-4"> <small><FontAwesomeIcon className="me-3" icon={faEye} />3455 views</small></span>

                    </div>
                    <div>
                        <img src={image} alt="" />
                        <h6 className="mt-4">Business</h6>
                        <h4>How Stay Clam From The First Time</h4>
                        <span><small><FontAwesomeIcon className="me-3" icon={faCalendar} />Jul 30,2020</small></span>
                        <span className="ms-4"> <small><FontAwesomeIcon className="me-3" icon={faEye} />4566 views</small></span>
                    </div>
                    <div>
                        <img src={image} alt="" />
                        <h6 className="mt-4">Business</h6>
                        <h4>How Stay Clam From The First Time</h4>
                        <span><small><FontAwesomeIcon className="me-3" icon={faCalendar} />Dec 30,2020</small></span>
                        <span className="ms-4"> <small><FontAwesomeIcon className="me-3" icon={faEye} />1456 views</small></span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;