import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import './MakeAppointment.css'


const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center mt-32 lg:card-side lg:h-96 mx-10 px-10 py-10 lg:mx-0" >
           <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px] doctor-img  " src={doctor} alt="" />
      </div>
      <div className="flex-1  ">
        <h3 className="text-xl text-primary font-bold py-3">Appointment</h3>
        <h2 className="text-3xl text-white py-4">Make an appointment Today</h2>
        <p className="text-white pb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The po </p>
          <div className="card-actions mt-8">
             <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
