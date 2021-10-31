import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUsImage from '../../images/about-us.jpg';
import WhyChooseUs from '../Home/WhyChooseUs/WhyChooseUs';
const About = () => {
    return (
        <div className="mb-5">
            <Container>
                <Row className="pt-5 mt-5">
                    <Col xs={12} md={4}>
                        <img className="img-fluid" src={aboutUsImage} alt="" />
                    </Col>
                    <Col className="" xs={12} md={8}>
                        <h2 className="text-danger mb-3 ">About Happy Tour</h2>
                        <p>
                            A tour operator is a business that typically combines and organizes accommodations, meals, sightseeing and transportation components. in order to create a package tour. They advertise and produce brochures to promote their products, holidays and itineraries.
                            <br />
                            <br />
                            The most common example of a tour operator's product would be a flight on a charter airline, plus a transfer from the airport to a hotel and the services of a local representative, all for one price. Each tour operator may specialise in certain destinations, e.g. Italy, activities and experiences, e.g. skiing, or a combination thereof.
                            <br />
                            <br />
                            The original raison d'être of tour operating was the difficulty for ordinary folk of making arrangements in far-flung places, with problems of language, currency and communication. The advent of the Internet has led to a rapid increase in self-packaging of holidays. However, tour operators still have their competence in arranging tours for those who do not have time to do DIY holidays.
                        </p>
                    </Col>
                </Row>
            </Container>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default About;