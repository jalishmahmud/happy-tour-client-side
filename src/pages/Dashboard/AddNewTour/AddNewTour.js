import React from 'react';
import { useForm } from "react-hook-form";
const AddNewTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://ghastly-barrow-28735.herokuapp.com/allTour', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('New Tour Added')
                    reset();
                }

            })
    };

    return (
        <div className="d-flex justify-content-center">

            <div className="p-4 border rounded w-75">
                <h4 className="mb-3">Add New Tour</h4>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <span>Tour ID</span>
                    <input className="form-control mb-3 mt-2" {...register("tourId")} />

                    <span>Tour Name</span>
                    <input className="form-control mb-3 mt-2" {...register("tourName")} />

                    <span>Cost</span>
                    <input className="form-control mb-3 mt-2" {...register("cost")} />

                    <span>Start Date</span>
                    <input type="date" className="form-control mb-3 mt-2"  {...register("startDate")} />

                    <span>End Date</span>
                    <input type="date" className="form-control mb-3 mt-2"  {...register("endDate")} />

                    <span>Start Time</span>
                    <input type="time" className="form-control mb-3 mt-2"  {...register("startTime")} />

                    <span>Duration</span>
                    <input className="form-control mb-3 mt-2"  {...register("duration")} />

                    <span>Booking Deadline</span>
                    <input className="form-control mb-3 mt-2"  {...register("lastDateOfBooking")} />

                    <span>Transport</span>
                    <input className="form-control mb-3 mt-2" {...register("transport")} />

                    <span>Departure</span>
                    <input className="form-control mb-3 mt-2"  {...register("departurePlace")} />

                    <span>Destination</span>
                    <input className="form-control mb-3 mt-2" {...register("destinationPlace")} />

                    <span>Visiting Place</span>
                    <input className="form-control mb-3 mt-2" {...register("visitingPlace")} />

                    <span>Total Seat</span>
                    <input className="form-control mb-3 mt-2"  {...register("totalSeat")} />

                    <span>Available Seat</span>
                    <input className="form-control mb-3 mt-2"  {...register("availableSeat")} />

                    <span>Tour Description</span>
                    <input className="form-control mb-3 mt-2" {...register("name")} />

                    <span>Image Url</span>
                    <input className="form-control mb-3 mt-2"  {...register("img")} />

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewTour;