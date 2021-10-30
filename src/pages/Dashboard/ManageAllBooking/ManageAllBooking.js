import React from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Flexible Derjelling Tour</td>
                        <td>12-07-2022</td>
                        <td>Pending</td>
                        <td><Button variant="secondary">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Flexible Derjelling Tour</td>
                        <td>12-07-2022</td>
                        <td>Pending</td>
                        <td><Button variant="secondary">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Flexible Derjelling Tour</td>
                        <td>12-07-2022</td>
                        <td>Pending</td>
                        <td><Button variant="secondary">Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllBooking;