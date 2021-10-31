import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddNewTour from '../AddNewTour/AddNewTour';
import ManageAllBooking from '../ManageAllBooking/ManageAllBooking';
import MyBooking from '../MyBooking/MyBooking';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';


const Dashboard = () => {
    const { logOut } = useAuth();
    const [tabControll, setTabControll] = useState('myBooking');
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const gearIcon = <FontAwesomeIcon icon={faCog} />
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col className="mb-5 dashboard-sidebar" xs={12} md={3}>
                        <Card border="danger" style={{ width: '15rem' }}>
                            <Card.Header> <h5 className="pt-2">{gearIcon} Dashboard</h5> </Card.Header>
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
                                    <li onClick={logOut}>
                                        <span className="text-danger">{logOutIcon} log Out</span>
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