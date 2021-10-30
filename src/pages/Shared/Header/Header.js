import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>
                        <Navbar.Text>
                            <Nav className="me-auto">
                                {user.email ?
                                    <span>
                                        <Button className="me-3" variant="danger"><Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link></Button>

                                        <Button onClick={logOut} className="me-3" variant="primary">Logout</Button>
                                    </span>
                                    :
                                    <Button className="me-3" variant="primary"><Nav.Link as={Link} to="/login">login</Nav.Link></Button>
                                }

                                {user.displayName &&
                                    <span> Welcome! {user.displayName}</span>}
                            </Nav>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;