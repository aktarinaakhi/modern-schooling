import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { IconName } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-detalis">
                    <h5>Address</h5>
                    <p>382 NE 191st St # 87394 Dinajpur, FL 33179-3899</p>
                    <p>01743626193 (9am - 5pm EST, Monday - Friday)</p>
                    <p>gubictclub@gmail.com</p>
                    {/* <i class="fab fa-facebook"></i> */}
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faCoffee} />
                    {/* <FontAwesomeIcon icon={fa} /> */}
                </div>
                <div className="footer-detalis">
                    <div>
                        <h5>Explore</h5>
                        <p>start here</p>
                        <p>Blog</p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Succes history</p>
                    </div>
                </div>
                <div className="footer-detalis">
                    <h5>Information</h5>
                    <p>Membership</p>
                    <p>Purchase Guid</p>
                    <p>Private policy</p>
                    <p>Terms of services</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;