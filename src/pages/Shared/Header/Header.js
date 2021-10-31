import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import logo from '../../../images/logo.png';

import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand as={Link} className="me-5" to="/home"><img src={logo} alt="" /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className="custom-nav" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="custom-nav" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className="custom-nav" as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>
                        <Navbar.Text>
                            <Nav className="me-auto">
                                {user.displayName &&
                                    <span className="custom-user mt-2 pe-3" > Welcome! {user.displayName}</span>}
                                {user.email ?
                                    <span>
                                        <Button className="me-3" variant="danger"><Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link></Button>

                                        <Button onClick={logOut} className="me-3" variant="primary">Logout</Button>
                                    </span>
                                    :
                                    <Button className="me-3" variant="primary"><Nav.Link as={Link} to="/login">login</Nav.Link></Button>
                                }


                            </Nav>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;