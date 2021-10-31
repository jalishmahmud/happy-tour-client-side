import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [allBooking, setAllBooking] = useState([]);
    const [isCancel, setIsCancel] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setAllBooking(data));
    }, [isCancel]);

    const handleCancleButton = id => {
        const confirm = window.confirm('Are you sure you wnat to cncle your booking?');
        if (confirm) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Your Bokking has been canceled')
                        setIsCancel(!isCancel);
                    }
                    else {
                        setIsCancel(false);
                    }
                })
        }
        else {

        }
    }

    return (
        <div>
            <h4 className="mb-3">My Booking</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tour Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBooking.map((booking, index) => <tr key={booking._id}>
                            <td>{index + 1}</td>
                            <td>{booking.tourName}</td>
                            <td>{booking.date}</td>
                            <td>{booking.tourStatus}</td>
                            <td><Button onClick={() => handleCancleButton(booking._id)} variant="secondary">Cancle</Button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyBooking;