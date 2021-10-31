import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
import slider3 from '../../../images/slider3.jpg'
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-primary p-3 rounded">We are best tour planner in your country
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="bg-primary p-3 rounded">We provide quality service for our client
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="bg-primary p-3 rounded">We care your expectation so join us
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;