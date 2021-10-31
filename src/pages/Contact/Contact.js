import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="contact-info py-5 my-5">
                    <Col xs={12} md={4}>
                        <h4 className="text-danger">Contact With Us</h4>
                        <h6>ADDRESS:</h6>
                        <p>123 Street Name, City, England</p>

                        <h6>PHONE:</h6>
                        <p>(123) 456-7890</p>

                        <h6>EMAIL:</h6>
                        <p>mail@example.com</p>

                        <h6>WORKING DAYS/HOURS:</h6>
                        <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                    </Col>
                    <Col className="border p-3 rounded" xs={12} md={8}>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="email" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Mobile Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;