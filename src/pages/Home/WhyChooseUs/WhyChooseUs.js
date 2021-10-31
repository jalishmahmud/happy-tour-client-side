import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import './WhyChooseUs.css';


const handshake = <FontAwesomeIcon icon={faHandshake} />
const clock = <FontAwesomeIcon icon={faClock} />
const creditCard = <FontAwesomeIcon icon={faCreditCard} />

const WhyChooseUs = () => {
    return (
        <div>
            <Container>
                <div className="section-title text-center my-5 pt-3">
                    <h2>Why Choose Us</h2>
                    <h4>We are best tour planner in your country</h4>
                </div>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="why-choose-us text-center my-3">
                            <span className="custom-icon icon-1">{handshake}</span>
                            <h3>Easy and Flexible</h3>
                            <p>You don’t have to choose between two great destinations anymore! Collette can help you </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="why-choose-us text-center my-3">
                            <span className="custom-icon icon-2">{clock}</span>
                            <h3>On Time Service</h3>
                            <p>Arrive a little early, stay a little longer and return home with even more memories of the world. </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="why-choose-us text-center my-3">
                            <span className="custom-icon icon-3">{creditCard}</span>
                            <h3>Budget Friendly</h3>
                            <p>No matter how you want to see the world, Collette can do it your way to hepl you.  </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;