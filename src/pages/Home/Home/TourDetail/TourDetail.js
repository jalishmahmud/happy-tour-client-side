import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const TourDetail = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { singleTourId } = useParams();
    console.log("id is", singleTourId);
    const [singleTour, setSingleTour] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/allTour/${singleTourId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTour(data));
    }, []);

    const {
        availableSeat,
        cost,
        departurePlace,
        description,
        destinationPlace,
        duration,
        endDate,
        img,
        lastDateOfBooking,
        startDate,
        startTime,
        totalSeat,
        tourName,
        transport,
        visitingPlace,
    } = singleTour;


    console.log(singleTour);

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col className="mb-5" xs={12} md={7}>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{tourName}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <Row>
                                        <Col xs={12} md={6} >
                                            <ListGroupItem>Start Date: {startDate}</ListGroupItem>
                                            <ListGroupItem>End Date: {endDate}</ListGroupItem>
                                            <ListGroupItem>Duration: {duration} </ListGroupItem>
                                            <ListGroupItem>Booking Deadline: {lastDateOfBooking} </ListGroupItem>

                                            <ListGroupItem>Departure Time: {startTime} </ListGroupItem>
                                            <ListGroupItem>Departure From: {departurePlace} </ListGroupItem>
                                            <ListGroupItem>Description: {destinationPlace} </ListGroupItem>


                                        </Col>
                                        <Col xs={12} md={6}>
                                            <ListGroupItem>Cost: {cost} </ListGroupItem>
                                            <ListGroupItem>Transport: {transport}</ListGroupItem>
                                            <ListGroupItem>Total Seat: {totalSeat} </ListGroupItem>
                                            <ListGroupItem>Available Seat: {availableSeat} </ListGroupItem>
                                            <ListGroupItem>Visiting Place: {visitingPlace} </ListGroupItem>
                                        </Col>
                                    </Row>
                                </ListGroup>
                                <Link to="/"><Button className="mt-3" variant="primary">Available Tour</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5" xs={12} md={5}>
                        <div className="p-4 border rounded">
                            <h5 className="mb-3">Confirm Booking For : <span className="text-primary">{tourName}</span></h5>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <span>Your Full Name</span>
                                <input className="form-control mb-3 mt-2" defaultValue={user?.displayName} {...register("name")} />
                                <span>Your Email</span>
                                <input className="form-control mb-3 mt-2" defaultValue={user?.email} {...register("email")} />
                                <span>Your Gender</span>
                                <select className="form-select mb-3 mt-2" {...register("gender")}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <span>Payment Methood</span>
                                <select className="form-select mb-3 mt-2" {...register("paymentMethood")}>
                                    <option value="bKash">bKash</option>
                                    <option value="bank">Bank</option>
                                    <option value="cash">Cash</option>
                                </select>
                                <span>Your Mobile Number</span>
                                <input className="form-control mb-3 mt-2" placeholder="Your Mobile Number" {...register("mobile")} />
                                <span>Your Address</span>
                                <input className="form-control mb-3 mt-2" placeholder="Your full address" {...register("address")} />

                                <input className="btn btn-primary" type="submit" value="Confirm Booking" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourDetail;