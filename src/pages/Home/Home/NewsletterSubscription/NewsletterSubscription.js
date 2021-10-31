import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const NewsletterSubscription = () => {
    return (
        <div className="newsletter-subscription bg-primary pb-5 pt-3 mt-4">
            <div className="section-title text-center mt-2 mb-5 pt-5 text-light">
                <h2>Newsletter Subscription</h2>
                <h4 className="text-light">Subscription today and get all update in you inbox</h4>
            </div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center pb-5">
                        <Form>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Full Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Full Name"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Your Email
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" placeholder="Your Email" />
                                    </InputGroup>
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2 btn-light">
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default NewsletterSubscription;