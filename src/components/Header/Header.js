import React from 'react';
import "./Header.css";
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="top-header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <Link className="navbar" to="/home">Home</Link>
                <Link className="navbar" to="/services">Services</Link>
                <Link className="navbar" to="/home">Shop</Link>
                <Link className="navbar" to="/about">About us</Link>
                <FontAwesomeIcon className="nav-icon" icon={faShoppingCart} />
                <input placeholder="Search" type="text" />
            </nav>

        </div>
    );
};

export default Header;