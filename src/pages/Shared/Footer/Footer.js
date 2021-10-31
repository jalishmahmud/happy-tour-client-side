import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <h2>Fotter</h2>
            <Container>
                <Row className="footer-content">
                    <Col className="py-4" xs={12} md={3}>
                        <h4>About Us</h4>
                        <img className="mb-3" src={logo} alt="" />
                        <p>Encounter the most bewitching wines around the world with a knowledgeable wine sommelier to experience the sublime with just a sip. Relish from the most</p>
                    </Col>
                    <Col className="py-4" xs={12} md={3}>
                        <h4>Contact Info</h4>
                        <h6>ADDRESS:</h6>
                        <p>123 Street Name, City, England</p>

                        <h6>PHONE:</h6>
                        <p>(123) 456-7890</p>

                        <h6>EMAIL:</h6>
                        <p>mail@example.com</p>

                        <h6>WORKING DAYS/HOURS:</h6>
                        <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                    </Col>
                    <Col className="py-4" xs={12} md={3}>
                        <h4>Customer Service</h4>
                        <ul>
                            <li><Link to="/">Help And FAQs</Link></li>
                            <li><Link to="/">Tour Tracking</Link></li>
                            <li><Link to="/">Photo Gallery</Link></li>
                            <li><Link to="/">Education Tour</Link></li>
                            <li><Link to="/">Corporate Tour</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Privacy</Link></li>
                        </ul>
                    </Col>
                    <Col className="py-4" xs={12} md={3}>
                        <h4>Popular Tour</h4>
                        <span>Darjeeling</span>
                        <span>Sikkim Tour</span>
                        <span>Nepal</span>
                        <span>Discover</span>
                        <span>SAARC</span>
                        <span>Flexible</span>
                        <span>Tour</span>
                        <span>Bhutan</span>
                        <span>Enjoy</span>
                        <span>Family Tour</span>
                        <span>Education</span>
                    </Col>
                </Row>
                <Row >
                    <p className="copyrhgit text-center py-3">Copyright &copy; Happy Tour,  All Rights Reserved. Developed By : Jalish Mahmud</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;