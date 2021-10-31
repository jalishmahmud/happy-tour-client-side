import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useHistory } from 'react-router';

const TourPackage = ({ tourPackage }) => {

    const { _id, tourName, img, cost, duration, startDate } = tourPackage;

    const history = useHistory();

    const handleBookButton = singleTourId => {
        history.push(`/tourDetail/${singleTourId}`)
    };

    return (
        <Col className="mb-5" xs={12} md={4}>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Start Date: {startDate}</ListGroupItem>
                        <ListGroupItem>Duration: {duration}</ListGroupItem>
                        <ListGroupItem>Cost: {cost}</ListGroupItem>
                    </ListGroup>
                    <Button onClick={() => handleBookButton(_id)} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TourPackage;