import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    const [controll, setControll] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setAllBooking(data));
    }, [controll]);

    // Booking Cancle
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
                        alert('This Bokking has been canceled')
                        setControll(!controll);
                    }
                    else {
                        setControll(false);
                    }
                })
        }
        else {

        }
    }
    // Booking Approve
    const handleApproveButton = id => {
        const booking = { tourStatus: 'Approped' }
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setControll(!controll);
                }
                else {
                    setControll(false);
                }
            })
    }
    return (
        <div>
            <h4 className="mb-3">Manage All Booking</h4>
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
                            <td>
                                <Button className="me-3" onClick={() => handleApproveButton(booking._id)} variant="secondary">Approve</Button>
                                <Button onClick={() => handleCancleButton(booking._id)} variant="secondary">Cancle</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllBooking;