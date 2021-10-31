import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoolge, setUser, setIsLoading } = useAuth();


    const location = useLocation();
    const history = useHistory()
    const redirectUri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithGoolge()
            .then(result => {
                // setUser(result.user);
                history.push(redirectUri);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div>
            <Container>
                <Row className="my-5 text-center">
                    <Col className="d-flex justify-content-center" xs={12}>
                        {/* <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <br />
                        <div>------------------- OR -------------------</div>
                        <br /> */}
                        <div className="w-50 p-5 border border-2 rounded">
                            <Button onClick={handleGoogleSignIn} variant="danger">Login With Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Login;