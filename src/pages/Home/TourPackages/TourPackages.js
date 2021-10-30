import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allTour')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    {
                        tourPackages.map(tourPackage => <TourPackage

                            key={tourPackage._id}
                            tourPackage={tourPackage}

                        ></TourPackage>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TourPackages;