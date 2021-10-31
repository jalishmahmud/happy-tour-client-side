import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center border rounded p-5 m-5">Opps! 404 Not Found</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;