import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import AddNewTour from '../AddNewTour/AddNewTour';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';
import './Dashboard.css';

const Dashboard = () => {
    const [tabControll, setTabControll] = useState('myBooking');
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col className="mb-5 dashboard-sidebar" xs={12} md={3}>
                        <Card border="primary" style={{ width: '15rem' }}>
                            <Card.Header> <h5>Header</h5> </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <li onClick={() => setTabControll('myBooking')}>
                                        My Booking
                                    </li>
                                    <li onClick={() => setTabControll('manageAllBooking')}>
                                        Manage All Booking
                                    </li>
                                    <li onClick={() => setTabControll('addNewTour')}>
                                        Add New Tour
                                    </li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5" xs={12} md={9}>
                        {tabControll === 'myBooking' && <MyBooking></MyBooking>}
                        {tabControll === 'manageAllBooking' && <ManageAllBooking></ManageAllBooking>}
                        {tabControll === 'addNewTour' && <AddNewTour></AddNewTour>}


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;