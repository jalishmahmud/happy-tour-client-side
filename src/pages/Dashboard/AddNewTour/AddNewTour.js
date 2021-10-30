import React from 'react';
import { useForm } from "react-hook-form";
const AddNewTour = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="d-flex justify-content-center">

            <div className="p-4 border rounded w-75">
                <h4 className="mb-3">Add New Tour</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Your Full Name</span>
                    <input className="form-control mb-3 mt-2" defaultValue="Jalish Mahmud" {...register("name")} />
                    <span>Your Email</span>
                    <input className="form-control mb-3 mt-2" defaultValue="exapme@email.com" {...register("email")} />
                    <span>Your Gender</span>
                    <select className="form-select mb-3 mt-2" {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <span>Payment Methood</span>
                    <select className="form-select mb-3 mt-2" {...register("paymentMethood")}>
                        <option value="bKash">bKash</option>
                        <option value="bank">Bank</option>
                        <option value="cash">Cash</option>
                    </select>
                    <span>Your Mobile Number</span>
                    <input className="form-control mb-3 mt-2" placeholder="Your Mobile Number" {...register("mobile")} />
                    <span>Your Address</span>
                    <input className="form-control mb-3 mt-2" placeholder="Your full address" {...register("address")} />

                    <input className="btn btn-primary" type="submit" value="Confirm Booking" />
                </form>
            </div>
        </div>
    );
};

export default AddNewTour;