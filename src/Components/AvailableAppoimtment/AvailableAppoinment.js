import React from 'react';

const AvailableAppointment = ({appointment,setModal}) => {
    const {name , slots,price} = appointment;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl lg:w-9/12">
        <div className="card-body text-center ">
            <h2 className="card-title text-center  text-cyan-500 ml-24">{name}</h2>
            <h2 className=" text-center font-bold  text-cyan-500">Cost:${price}</h2>
            <p>
                {
                slots.length ? <span> {slots[0]}  </span> : <span className='text-red-600'> No Slots Available,Try Another Date </span>
                }
            </p>
            <p className='font-bold '> {slots.length} {slots.length > 1? "Spaces": "Space"}  Available</p>
            <div className="card-actions justify-center">
            <label onClick={()=>setModal(appointment)} for="Booking-Modal" disabled={slots.length === 0} className="btn btn-primary">Book Appointment</label>
            </div>
        </div>
        </div>
    );
};

export default AvailableAppointment;