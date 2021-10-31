import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-barrow-28735.herokuapp.com/allTour')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);

    return (
        <div>
            <div className="section-title text-center my-5 pt-3">
                <h2>Available Tour And Pricing</h2>
                <h4>Book your convenient tour and enjoy</h4>
            </div>
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