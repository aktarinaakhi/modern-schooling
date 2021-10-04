import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../images/benner1.jpg"
import image2 from "../../images/banner7.jpg"
import image3 from "../../images/banner8.jpg"
import "./Banner.css"



const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="banner-img d-block w-100 "
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner">
                        <h1 className="banner-title">Welcome To Our Schooling</h1>
                        <h4 className="info">Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="banner">
                        <h1 className="banner-title">Second slide label</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="banner">
                        <h1 className="banner-title">Third slide label</h1>
                        <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;